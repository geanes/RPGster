<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	// Drawer Singleton
	import { Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
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
</script>

<Drawer>
	{#if $drawerStore.id === 'menuPlayer'}
		<div class="p-4">
			<h3 class="p-4">Player Menu</h3>
			<hr />
			<button
				title="Export Character JSON"
				class="btn btn-sm variant-soft-surface m-4"
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
		</div>
	{:else if $drawerStore.id === 'menuGameMaster'}
		<h3>Game Master Menu</h3>
	{:else}
		<p>Nothing to see here.</p>
	{/if}
</Drawer>

<!-- Overlays -->
<Modal components={modalComponentRegistry} on:backdrop={modalStore.close} />

<slot />
