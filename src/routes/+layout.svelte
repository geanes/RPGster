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
	import ndk, { connected } from '$lib/stores/ndk';
	import { generateCharacter } from '$lib/utils/eventUtils';
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
	import CharExportJson from './player/components/modalCharExportJson.svelte';
	import CharImportJson from './player/components/modalCharImportJson.svelte';
	import 'iconify-icon';
	import {
		stringifiedCharacter,
		currentAttributes,
		currentMetadata,
		shortCharacterDescription
	} from '$lib/stores/storeCharacter';

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

	if (browser) {
		$ndk.connect().then(() => {
			$connected = true;
			// console.log('Connected');
		});
	}

	// MOVE
	async function postChar() {
		const kind: number = 31974;
		if (!$currentUser) return;
		const event = generateCharacter({
			ndk: $ndk,
			kind,
			user: $currentUser,
			name: $currentAttributes.name,
			desc: $shortCharacterDescription,
			content: $stringifiedCharacter,
			system: 'DnD 3.5e',
			uid: $currentMetadata.uid
		});
		try {
			await event[0].publish();
			// console.log('Character posted', event);
			toastPosted();
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
