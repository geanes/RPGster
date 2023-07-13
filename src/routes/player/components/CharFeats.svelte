<script lang="ts">
	import Accordion from '$lib/components/CustomAccordion/Accordion.svelte';
	import AccordionItem from '$lib/components/CustomAccordion/AccordionItem.svelte';
	import { currentFeats, modify } from '$lib/stores/storeCharacter';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';

	export let feats: any;
	const featsIndex = Object.keys(feats);
	const featsList = featsIndex.map((key) => {
		const data = feats[key];
		return { ...data, id: key };
	});

	function modalAddFeat(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalAddFeat',
			title: 'Choose Feats',
			meta: { feats }
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalNewFeat(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalNewFeat',
			title: 'New Feat',
			body: 'Create a feat.'
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function removeFeat(id: string): void {
		$currentFeats.feats = $currentFeats.feats.filter((feat) => feat !== id);
	}
	function removeUserFeat(id: string): void {
		$currentFeats.userFeats = $currentFeats.userFeats.filter((feat) => feat.uid !== id);
	}

	function filteredFeat(id: string): any {
		const result = featsList.filter((feats) => feats.id === id)[0];
		return result;
	}
</script>

<div class="card variant-glass-surface">
	<section class="card mx-auto mt-2 mb-8 space-y-2" class:variant-ringed-error={$modify}>
		<div class="grid grid-cols-2 p-0 m-0 gap-2">
			<span class="p-2 pl-4 text-slate-50/80 align-text-bottom">
				<h2 class="pt-2">Feats</h2>
			</span>
			<span class="p-2 pr-4 justify-self-end">
				<button
					title="Add Feats"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalAddFeat}
				>
					<iconify-icon icon="mdi:add-bold" />
				</button>
				<button
					title="Create a new Feat"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalNewFeat}
				>
					<iconify-icon icon="grommet-icons:new" />
				</button>
			</span>
		</div>
		<div class="flex flex-row pl-10 pb-2 border-b-[1px] border-slate-500/30 text-slate-100/50">
			<span class="w-full shrink invisible">Character Feats</span>
		</div>
		<div class="grow max-h-[40rem] min-h-[40rem] p-2 overflow-auto text-slate-100/70">
			<Accordion autocollapse>
				{#if $currentFeats.feats.length === 0 && $currentFeats.userFeats.length === 0}
					<p class="min-w-max text-center">💪 Add or create feats</p>
				{/if}
				{#each $currentFeats.feats as feat}
					<AccordionItem id={feat}>
						<svelte:fragment slot="lead">
							<span class="text-slate-100/70 w-[18px]">
								<iconify-icon icon="material-symbols:circle" />
							</span>
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<h3 class="inline-block">
								{filteredFeat(feat).name}
							</h3>
							<button
								class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
								on:click={() => removeFeat(feat)}
							>
								<iconify-icon icon="material-symbols:delete" />
							</button>
							<p class="text-slate-300/70 text-sm">{filteredFeat(feat).shortText}</p>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="space-y-2 ml-8 pl-4 pr-6 pb-2 border-l-2 border-b-2 border-slate-500/70 rounded-sm"
							>
								<p class="text-slate-100/80 text-justify">
									{filteredFeat(feat).longText}
								</p>
								<span class="ml-4 text-xs text-slate-100/70"
									>Requires: {filteredFeat(feat).prerequisites}</span
								>
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
				<!-- User Feats -->
				{#each $currentFeats.userFeats as feat}
					<AccordionItem id={feat.id}>
						<svelte:fragment slot="lead">
							<span class="text-slate-100/70 w-[18px]">
								<iconify-icon icon="fa6-solid:circle-half-stroke" />
							</span>
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<span>
								<h3 class="inline-block">{feat.name}</h3>
								<button
									class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
									on:click={() => removeUserFeat(feat.id)}
								>
									<iconify-icon icon="material-symbols:delete" />
								</button>
							</span>
							<p class="text-slate-300/70 text-sm">{feat.shortText}</p>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="space-y-2 ml-8 pl-4 pr-6 pb-2 border-l-2 border-b-2 border-slate-500/70 rounded-sm"
							>
								<p class="text-slate-100/80 text-justify">
									{feat.longText}
								</p>
								{#if feat.prerequisites}
									<span class="ml-4 text-xs text-slate-100/70">Requires: {feat.prerequisites}</span>
								{:else}
									<span class="ml-4 text-xs text-slate-100/70">No prerequisites.</span>
								{/if}
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
		<footer class="card-footer" />
	</section>
</div>
