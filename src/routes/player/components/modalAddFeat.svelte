<script lang="ts">
	import Accordion from '$lib/components/CustomAccordion/Accordion.svelte';
	import AccordionItem from '$lib/components/CustomAccordion/AccordionItem.svelte';
	import { currentFeats } from '$lib/stores/storeCharacter';
	import { modalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	let revertList = $currentFeats.feats;
	const featsdata = $modalStore[0].meta?.feats;
	const featsIndex = Object.keys(featsdata);
	const feats = featsIndex.map((key) => {
		const data = featsdata[key];
		return { ...data, id: key };
	});

	function cancelChanges(): void {
		$currentFeats.feats = revertList;
		modalStore.close();
	}

	const isChecked = (list: string[], id: string): boolean => {
		// const listIds = list.map((feat) => feat.id);
		return list.includes(id);
	};

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class="w-modal-wide {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<!-- <article>{$modalStore[0].body ?? '(body missing)'}</article> -->
		<div class="modal-form {cForm} max-h-[720px] overflow-auto">
			<Accordion autocollapse>
				{#each feats as feat}
					<AccordionItem id={feat.id}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox"
								type="checkbox"
								checked={isChecked($currentFeats.feats, feat.id)}
								bind:value={feat.id}
								on:change={() => {
									if (isChecked($currentFeats.feats, feat.id)) {
										$currentFeats.feats = $currentFeats.feats.filter((f) => f !== feat.id);
									} else {
										const featToAdd = feats.find((f) => f.id === feat.id);
										$currentFeats.feats = [...$currentFeats.feats, featToAdd.id];
									}
								}}
							/>
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<h3 class="text-slate-100/80">{feat.name}</h3>
							<p class="text-slate-300/70 text-sm">{feat.shortText}</p>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="space-y-2 ml-4 pl-4 pr-6 pb-2 border-l-2 border-b-2 border-slate-500/70 rounded-sm"
							>
								<p class="text-slate-100/80 text-justify">
									{feat.longText}
								</p>
								<span class="ml-4 text-xs text-slate-100/70">Requires: {feat.prerequisites}</span>
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={cancelChanges}>Cancel</button>
			<button class="btn {parent.buttonPositive}" on:click={parent.onClose}>Done</button>
    </footer>
	</div>
{/if}
