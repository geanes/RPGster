<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	// NOSTR stuff
	import { browser } from '$app/environment';
	import { nip19 } from 'nostr-tools';
	import ndk, { connected } from '$lib/stores/ndk';
	import { NDKEvent, NDKList } from '@nostr-dev-kit/ndk';
	import type { NDKTag } from '@nostr-dev-kit/ndk';
	import { unixTimeNow } from '$lib/utils/helpers';
	import Authenticate from '$lib/components/Authenticate.svelte';
	import { RelayList } from '@nostr-dev-kit/ndk-svelte-components';
	import { currentUser } from '$lib/stores/currentUser';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// Drawer Singleton
	import { Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	// Popup Setup
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	// Toast Singleton
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	// Modal Singleton
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import { modalExportChar, modalImportChar } from '$lib/utils/singletonModal';
	// Modal Components
	import NewSkill from './player/components/modalNewSkill.svelte';
	import NewFeat from './player/components/modalNewFeat.svelte';
	import AddFeat from './player/components/modalAddFeat.svelte';
	import NewArmor from './player/components/modalNewArmor.svelte';
	import AddArmor from './player/components/modalAddArmor.svelte';
	import NewWeapon from './player/components/modalNewWeapon.svelte';
	import AddWeapon from './player/components/modalAddWeapon.svelte';
	import NewGear from './player/components/modalNewGear.svelte';
	import AddGear from './player/components/modalAddGear.svelte';
	import NewSpell from './player/components/modalNewSpell.svelte';
	import AddSpell from './player/components/modalAddSpell.svelte';
	// Character Export/Import
	import CharExportJson from './player/components/modalCharExportJson.svelte';
	import CharImportJson from './player/components/modalCharImportJson.svelte';
	import 'iconify-icon';
	import {
		stringifiedCharacter,
		currentAttributes,
		currentMetadata
	} from '$lib/stores/storeCharacter';
	import { list } from 'postcss';

	let canPost: boolean = false;
	const charListName = 'RPGstr Characters';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalNewSkill: { ref: NewSkill },
		modalAddFeat: { ref: AddFeat },
		modalNewFeat: { ref: NewFeat },
		modalAddArmor: { ref: AddArmor },
		modalNewArmor: { ref: NewArmor },
		modalAddWeapon: { ref: AddWeapon },
		modalNewWeapon: { ref: NewWeapon },
		modalNewGear: { ref: NewGear },
		modalAddGear: { ref: AddGear },
		modalNewSpell: { ref: NewSpell },
		modalAddSpell: { ref: AddSpell },
		modalExportCharJson: { ref: CharExportJson },
		modalImportCharJson: { ref: CharImportJson }
	};

	const toastConnected: ToastSettings = {
		message: 'Connected to relays',
		timeout: 1000
	};

	function toastPosted(): void {
		const t: ToastSettings = {
			message: 'Posted to NOSTR',
			autohide: true,
			timeout: 1000,
			background: 'variant-filled-primary'
		};
		toastStore.trigger(t);
	}

	function toastCharacterListCreated(): void {
		const t: ToastSettings = {
			message: 'RPGstr Characters list created',
			autohide: true,
			timeout: 1000,
			background: 'variant-filled-primary'
		};
		toastStore.trigger(t);
	}

	if (browser) {
		$ndk.connect().then(() => {
			$connected = true;
			// console.log('Connected');
		});
	}

	async function hasCharactersList(pubkey: string, tag: string = charListName, aTag: string[]) {
		let charTags: NDKTag[] = [['d', tag]];
		const listFilter: any = {
			kinds: [30001],
			authors: [pubkey],
			'#d': [tag]
		};
		try {
			const charList = await $ndk.fetchEvent(listFilter).then((listEvent) => {
				const hasList = !!listEvent;
				if (!hasList) {
					// console.log('No list found');
					return false;
				}
				const fetchedAtags = listEvent.getMatchingTags('a');
				const tagExists = fetchedAtags.find((t) => t[1] === aTag[1]);
				const exists = !!tagExists;

				if (exists) {
					// console.log('Character already in list');
					return listEvent;
				} else {
					let event = new NDKEvent($ndk, {
						content: '',
						kind: 30001,
						pubkey: pubkey,
						created_at: unixTimeNow(),
						tags: [...listEvent.tags]
					});
					if (aTag && aTag !== undefined) event.tags.push(aTag);

					try {
						event.publish();
						console.log(listEvent);
						// console.log('Character added to list', event);
						return event;
					} catch (error) {
						console.log(error);
					}
				}
			});
			return charList;
		} catch (error) {
			console.log(error);
		}
	}

	async function createCharactersList(pubkey: string, tag: string = charListName, aTag?: string[]) {
		let charTags: NDKTag[] = [['d', tag]];
		if (aTag && aTag !== undefined) charTags.push(aTag);
		const event = new NDKEvent($ndk, {
			content: '',
			kind: 30001,
			pubkey: pubkey,
			created_at: unixTimeNow(),
			tags: [...charTags]
		});
		try {
			await event.publish();
			// console.log('Character list created', event);
			toastCharacterListCreated();
		} catch (error) {
			console.log(error);
		}
	}

	async function postChar() {
		const kind: number = 31974;
		const pubkey: string = $currentUser?.pubkey as string;
		const identifier: string = $currentAttributes.name as string;
		const naddrInput: nip19.AddressPointer = {
			identifier: identifier,
			pubkey: pubkey,
			kind: kind
		};
		let charTags: NDKTag[] = [
			['d', identifier],
			['a', `${kind}:${pubkey}:${identifier}`]
		];
		charTags.push(['d', 'RPGstr Character' as string]);
		const event = new NDKEvent($ndk, {
			content: $stringifiedCharacter,
			kind: kind,
			pubkey: pubkey,
			created_at: unixTimeNow(),
			tags: [...charTags]
		});
		// TEST EVENT KIND 1
		// const event = new NDKEvent($ndk, {
		// 	content: 'Hello from NDK 0.7.3',
		// 	kind: 1,
		// 	pubkey: $currentUser?.pubkey as string,
		// 	created_at: unixTimeNow(),
		// 	tags: []
		// });
		try {
			await event.publish();
			// console.log('Character to post', event);
			toastPosted();
			if (!$currentMetadata.naddr) $currentMetadata.naddr = nip19.naddrEncode(naddrInput);
			// Check for RPGstr Characters list, create if not found, add character to list
			const hasCharList = await hasCharactersList(pubkey, charListName, [
				'a',
				`${kind}:${pubkey}:${identifier}`
			]);
			const hasList = !!hasCharList;
			if (!hasList) {
				await createCharactersList(pubkey, charListName, ['a', `${kind}:${pubkey}:${identifier}`]);
			}
		} catch (error) {
			console.log('Error publishing: ', error);
		}
	}

	$: {
		if ($connected) {
			toastStore.trigger(toastConnected);
		}
	}

	$: {
		canPost =
			$currentUser !== undefined && $currentUser.pubkey && $currentAttributes.name ? true : false;
	}
</script>

<Toast position="t" />

<Drawer>
	<div class="p-4">
		<Authenticate
			inline={true}
			width="w-12"
			nameText="text-slate-100/80 tracking-tight underline"
		/>
		<!-- <h3 class="p-4">Player Menu</h3> -->
		<RelayList ndk={$ndk} />
		<hr class="mt-4" />
		{#if $drawerStore.id === 'menuPlayer'}
			<div class="pt-2">
				{#if $currentMetadata.naddr !== '' || $currentMetadata.naddr !== undefined}
					<CodeBlock
						code={$currentMetadata.naddr}
						text="text-xs"
						background="bg-surface-800"
						language="nostr address"
					/>
				{/if}
			</div>
			<button
				title="Post Character to NOSTR"
				class="btn btn-sm variant-soft-surface m-4"
				disabled={!canPost}
				on:click={postChar}
			>
				Post to NOSTR
			</button>
			<button
				title="Export Character JSON"
				class="btn btn-sm variant-soft-surface m-4"
				disabled={!$currentAttributes.name}
				on:click={modalExportChar}
			>
				Export to JSON
			</button>
			<button
				title="Import Character JSON"
				class="btn btn-sm variant-soft-surface m-4"
				on:click={modalImportChar}
			>
				Import from JSON
			</button>
		{:else if $drawerStore.id === 'menuGameMaster'}
			<h3>Game Master Menu</h3>
		{:else}
			<p>Nothing to see here.</p>
		{/if}
	</div>
</Drawer>

<!-- Overlays -->
<Modal components={modalComponentRegistry} on:backdrop={modalStore.close} />

<slot />
