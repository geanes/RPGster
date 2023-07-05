<script lang="ts">
	import { dateTomorrow } from '$lib/utils/helpers';
	import { NDKNip07Signer } from '@nostr-dev-kit/ndk';
	import type { NDKUserProfile } from '@nostr-dev-kit/ndk';
	import { RelayList } from '@nostr-dev-kit/ndk-svelte-components';
	import ndk, { connected } from '$lib/stores/ndk';
	import { currentUser } from '$lib/stores/currentUser';
	import { fade, fly } from 'svelte/transition';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let width: string = 'w-24';
	export let nameText: string = 'font-sans tracking-tight text-2xl text-slate-100/90 underline';
	export let inline: boolean = false;

	async function login() {
		const signer = new NDKNip07Signer();
		$ndk.signer = signer;
		signer.user().then(async (ndkUser) => {
			if (!!ndkUser.npub) {
				ndkUser.ndk = $ndk;
				ndkUser.fetchProfile().then(() => {
					const profile = ndkUser.profile as NDKUserProfile;
					$currentUser = { ...profile, npub: ndkUser.npub, pubkey: ndkUser.hexpubkey() };
					// console.log($currentUser);
				});
				window.sessionStorage.setItem('RPGstrCurrentUser', JSON.stringify($currentUser));
				document.cookie = `userNpub=${ndkUser.npub}; 
					expires=${dateTomorrow()}; SameSite=Lax; Secure`;
			}
		});
	}

	function logout(e: Event) {
		e.preventDefault();
		currentUser.set(undefined);
		window.sessionStorage.removeItem('RPGstrCurrentUser');
		document.cookie = 'userNpub=';
	}

	$: {
		if ($currentUser) {
			currentUser.set($currentUser);
			window.sessionStorage.setItem('RPGstrCurrentUser', JSON.stringify($currentUser));
		}
	}

	const popupProfile: PopupSettings = {
		event: 'click',
		target: 'popupProfile',
		placement: 'bottom'
	};
</script>

<div class="w-[200px]">
	{#if $currentUser}
		<div class="flex p-4 gap-4 items-center">
			<div use:popup={popupProfile}>
				<Avatar
					src={$currentUser?.image}
					alt="profilepic"
					{width}
					rounded="rounded-full"
					cursor="cursor-pointer"
					border="hover:border-2 border-slate-100/90"
					shadow="shadow-2xl hover:shadow-xl"
				/>
			</div>

			<span class={nameText}>{$currentUser?.displayName}</span>
			{#if inline}
				<button class="btn btn-sm variant-filled-error justify-self-end" on:click={logout}>
					Logout
				</button>
			{/if}
		</div>
		<!-- Profile popup -->
		<div class="card shadow-xl z-50" data-popup="popupProfile">
			{#if !inline}
				<section class="p-4">
					<RelayList ndk={$ndk} />
				</section>
				<footer class="card-footer">
					<a
						href="https://metadata.nostr.com/"
						target="_blank"
						class="btn-icon btn-icon-sm variant-filled-secondary"
					>
						<iconify-icon icon="material-symbols:edit-outline" />
					</a>
					<button class="btn btn-sm variant-filled-error ml-2" on:click={logout}> Logout </button>
				</footer>
			{:else}
				<section class="p-4">
					<a href="https://metadata.nostr.com/" target="_blank" class="anchor">Edit profile</a>
				</section>
			{/if}
			<div class="arrow bg-surface-100-800-token" />
		</div>
	{:else}
		<button
			class="btn variant-filled-primary m-4"
			class:btn-sm={inline}
			class:my-6={inline}
			on:click={login}
			disabled={!$connected}
		>
			Login with Nostr
		</button>
	{/if}
</div>
