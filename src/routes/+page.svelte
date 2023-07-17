<script lang="ts">
	import { goto } from '$app/navigation';
	import ndk, { connected } from '$lib/stores/ndk';
	import type { NDKFilter, NDKEvent } from '@nostr-dev-kit/ndk';
	import { currentUser } from '$lib/stores/currentUser';
	import Authenticate from '$lib/components/Authenticate.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import { fade } from 'svelte/transition';
	import { toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { loadCharacter } from '$lib/utils/characterUtils';
	import { getNaddr } from '$lib/utils/eventUtils';
	import { currentMetadata } from '$lib/stores/storeCharacter';

	let npubSearch: string = '';
	let userRole: 'player' | 'gm' | null = null;
	let characterList: NDKEvent[] = [];
	let characterListInfo: [{ name: string; desc: string; system: string }];
	let toastLoadId: string = '';

	function toastLoadingCharacter(): void {
		const t: ToastSettings = {
			message: 'Loading character...',
			autohide: true,
			background: 'variant-filled-primary'
		};
		toastLoadId = toastStore.trigger(t);
	}

	async function fetchCharacters(
		kinds: number[],
		pubkey: string,
		tag: string = 'root'
	): Promise<NDKEvent[] | undefined> {
		const filter: NDKFilter = {
			kinds: kinds,
			authors: [pubkey],
			'#d': [tag]
		};
		if ($connected) {
			const charList: NDKEvent[] = await $ndk.fetchEvents(filter).then((fetchedEvents) => {
				return [...fetchedEvents];
			});
			return charList;
		}
	}

	const handleGM = () => {
		userRole = 'gm';
		// goto('./gamemaster');
	};

	const handlePlayer = () => {
		userRole = 'player';
		if ($currentUser && $currentUser.pubkey !== undefined) {
			fetchCharacters([31974], $currentUser.pubkey, 'root').then((events) => {
				if (events === undefined) return;
				characterList = events;
				characterList.forEach((char, index) => {
					const name = char.getMatchingTags('name')[0][1];
					const desc = char.getMatchingTags('desc')[0][1];
					const system = char.getMatchingTags('system')[0][1];
					const result = { name, desc, system };
					index === 0 ? (characterListInfo = [result]) : characterListInfo.push(result);
				});
			});
		} else {
			goto('./player');
		}
	};

	const getCharacter = async (char: NDKEvent) => {
		toastLoadingCharacter();
		const character: string | undefined = char?.content;
		if (character === undefined) return;
		loadCharacter({ char: character, nav: false });
		$currentMetadata.naddr = getNaddr(char);
		$currentMetadata.uid = char.replaceableDTag();
		toastStore.close(toastLoadId);
		goto('./player');
	};

	$: {
		if ($currentUser === undefined) userRole = null;
	}
</script>

<section class="grid grid-rows-6 gap-4 h-screen place-items-center px-2">
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
	<div
		class="flex flex-col py-2 px-8 gap-2 row-start-4 row-span-2 self-start place-items-center overflow-x-hidden"
	>
		{#if $currentUser !== undefined && userRole === 'player'}
			<div class="align-self-center" in:fade>
				<button
					class="btn-icon variant-outline-primary"
					title="New Character"
					on:click={() => loadCharacter({ nav: true })}
				>
					<iconify-icon icon="mdi:add-bold" />
				</button>
			</div>
			<div
				class="flex-1 flex-nowrap min-w-0 max-w-xs 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-sm"
			>
				<div class="flex flex-row gap-2 p-2 overflow-x-auto" in:fade>
					{#await characterList}
						<!-- <p>Loading characters...</p> -->
					{:then characters}
						{#if characters}
							{#each characters as character, index}
								<button in:fade on:click={() => getCharacter(character)}>
									<EventCard role={userRole}>
										<span slot="header">{characterListInfo[index].name}</span>
										{characterListInfo[index].desc}
										<span slot="footer">{characterListInfo[index].system}</span>
									</EventCard>
								</button>
							{/each}
						{/if}
					{/await}
				</div>
			</div>
		{:else if $connected && userRole === 'gm'}
			<div class="align-self-center" in:fade>
				<button class="btn-icon variant-outline-secondary" title="New Campaign">
					<iconify-icon icon="mdi:add-bold" />
				</button>
			</div>
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
