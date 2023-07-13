<script lang="ts">
	import { goto } from '$app/navigation';
	import { nip19 } from 'nostr-tools';
	import ndk from '$lib/stores/ndk';
	import type { NDKTag } from '@nostr-dev-kit/ndk';
	import { connected } from '$lib/stores/ndk';
	import { currentUser } from '$lib/stores/currentUser';
	import Authenticate from '$lib/components/Authenticate.svelte';
	import { fade } from 'svelte/transition';
	import { toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import {
		currentMetadata,
		currentState,
		currentAvatar,
		currentAttributes,
		currentHealth,
		currentAbilities,
		currentSaves,
		currentAttack,
		currentMisc,
		currentSkills,
		currentFeats,
		currentGear,
		currentSpells,
		defaultCharacter
	} from '$lib/stores/storeCharacter';

	let npubSearch: string = '';
	let userRole: 'player' | 'gm' | null = null;
	let characterList: any = [];
	let toastLoadId: string = '';

	function toastLoadingCharacter(): void {
		const t: ToastSettings = {
			message: 'Loading character...',
			autohide: true,
			background: 'variant-filled-primary'
		};
		toastLoadId = toastStore.trigger(t);
	}

	async function fetchCharacters(pubkey: string, tag: string = 'RPGstr Characters') {
		const listFilter: any = {
			kinds: [30001],
			authors: [pubkey],
			'#d': [tag]
		};
		if ($connected) {
			const charList = await $ndk.fetchEvent(listFilter).then((fetchedEvent) => {
				let list: NDKTag[] | undefined = [];
				let result = undefined;
				let atags: string[] | undefined = [];
				list = fetchedEvent?.tags.filter((tag) => tag[0] === 'a');
				atags = list?.map((item) => item[1]);
				const tagsSplit = atags?.map((item) => {
					return item.split(':').map((value) => value.trim());
				});
				result = tagsSplit;
				return result;
			});
			return charList;
		}
	}

	const handleGM = () => {
		userRole = 'gm';
		goto('./gamemaster');
	};

	const handlePlayer = () => {
		userRole = 'player';
		if ($currentUser && $currentUser.pubkey !== undefined) {
			characterList = fetchCharacters($currentUser.pubkey, 'RPGstr Characters').then((result) => {
				return result;
			});
		} else {
			goto('./player');
		}
	};

	const loadCharacter = async (splitTag: string) => {
		toastLoadingCharacter();
		const naddrInput: nip19.AddressPointer = {
			identifier: splitTag[2],
			pubkey: splitTag[1],
			kind: 31974
		};
		const naddr = nip19.naddrEncode(naddrInput);
		// console.log(naddr);
		const characterData = await $ndk.fetchEvent(naddr).then((fetchedEvent) => {
			return fetchedEvent;
		});
		const character: string | undefined = characterData?.content;
		if (character === undefined) return;
		const parsed = JSON.parse(character);
		$currentMetadata = parsed.metadata;
		$currentState = parsed.state;
		$currentAvatar = parsed.avatar;
		$currentAttributes = parsed.attributes;
		$currentHealth = parsed.health;
		$currentAbilities = parsed.abilities;
		$currentSaves = parsed.saves;
		$currentAttack = parsed.attack;
		$currentMisc = parsed.misc;
		$currentSkills = parsed.skills;
		$currentFeats = parsed.feats;
		$currentGear = parsed.gear;
		$currentSpells = parsed.spells;
		if ($currentMetadata === undefined || !$currentMetadata.naddr) {
			$currentMetadata.naddr = naddr;
		}
		toastStore.close(toastLoadId);
		goto('./player');
	};

	const newCharacter = () => {
		const character = JSON.parse($defaultCharacter);
		$currentMetadata = character.metadata;
		$currentState = character.state;
		$currentAvatar = character.avatar;
		$currentAttributes = character.attributes;
		$currentHealth = character.health;
		$currentAbilities = character.abilities;
		$currentSaves = character.saves;
		$currentAttack = character.attack;
		$currentMisc = character.misc;
		$currentSkills = character.skills;
		$currentFeats = character.feats;
		$currentGear = character.gear;
		$currentSpells = character.spells;
		goto('./player');
	};

	$: {
		if ($currentUser === undefined) userRole = null;
	}
</script>

<section class="grid grid-rows-6 gap-4 h-screen place-items-center">
	<!-- <div class="self-start p-8 row-start-1">
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]" in:fade>
			<input
				type="search"
				placeholder="Search naddr or npub..."
				bind:value={npubSearch}
				class="w-96"
			/>
			<button class="variant-soft-secondary">
				<iconify-icon icon="mdi:magnify" />
			</button>
		</div>
	</div> -->
	<div class="self-end p-8 row-start-2">
		<Authenticate />
	</div>
	<div class="grid grid-cols-3 gap-4 self-start row-start-3">
		<button class="btn" on:click={handleGM}>
			<span class="text-xl font-extralight tracking-tighter hover:underline">Game Master</span>
		</button>
		<span class="divider-vertical h-48" />
		<div class="flex items-center">
			<button class="btn" on:click={handlePlayer}>
				<span class="text-xl font-extralight tracking-tighter hover:underline">Player</span>
			</button>
		</div>
	</div>
	<div class="flex flex-col gap-2 row-start-4 row-span-2 self-start place-items-center">
		{#if $currentUser !== undefined && userRole === 'player'}
			<div class="align-self-center" in:fade>
				<button
					class="btn-icon variant-outline-primary"
					title="New Character"
					on:click={newCharacter}
				>
					<iconify-icon icon="mdi:add-bold" />
				</button>
			</div>
			<div class="flex flex-row gap-2 flex-wrap overflow-auto justify-center p-8" in:fade>
				{#await characterList}
					<!-- <p>Loading characters...</p> -->
				{:then characters}
					{#if characters}
						{#each characters as character}
							<button
								class="btn btn-sm variant-outline-surface"
								in:fade
								on:click={() => loadCharacter(character)}>{character[2]}</button
							>
						{/each}
					{/if}
				{/await}
			</div>
		{:else if $connected && userRole === 'gm'}
			<button class="btn-icon variant-outline-secondary" title="New Campaign">
				<iconify-icon icon="mdi:add-bold" />
			</button>
		{/if}
	</div>
	<div class="flex self-center m-0 gap-4 row-start-6">
		<div class="chip variant-soft rounded-md align-center">
			<a href="https://github.com/geanes/RPGstr" target="_blank">
				<span class="pr-2">
					<iconify-icon icon="mdi:github" />
				</span>
				GitHub
			</a>
		</div>
		<div>
			<p class="font-light tracking-tighter text-slate-100/70">
				Login with Nostr requires a browser extension like
				<a class="anchor" href="https://getalby.com/" target="_blank"> Alby </a>
			</p>
		</div>
	</div>
</section>
