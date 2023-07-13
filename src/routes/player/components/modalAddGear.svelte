<script lang="ts">
	// import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Accordion from '$lib/components/CustomAccordion/Accordion.svelte';
	import AccordionItem from '$lib/components/CustomAccordion/AccordionItem.svelte';
	import { currentGear } from '$lib/stores/storeCharacter';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { v4 as uuidv4 } from 'uuid';
	import { toTitleCase, inList } from '$lib/utils/utils';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	const gear = $modalStore[0].meta?.gear;
	let addList: any[] = [];

	function addItems(): void {
		$currentGear.equipment = [...$currentGear.equipment, ...addList];
		addList = [];
		modalStore.close();
	}

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
				{#each gear as item}
					<AccordionItem id={item.id}>
						<svelte:fragment slot="lead">
							<button
								class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"
								on:click={() => {
									const gearToAdd = {
										id: item.id,
										equipped: false,
										note: '',
										tag: uuidv4()
									};
									addList = [...addList, gearToAdd];
									// totalCost += item.description.price;
								}}
							>
								<iconify-icon icon="mdi:add-bold" class="inline-block" />
							</button>
							{#if inList(addList, item.id).in}
								<span class="inline-block text-orange-400">
									<strong>{inList(addList, item.id).qty}</strong>
								</span>
								<button
									class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"
									on:click={() => {
										const index = addList.findIndex((i) => item.id === i.id);
										if (index !== -1) {
											addList.splice(index, 1);
											addList = [...addList];
										}
									}}
								>
									<iconify-icon icon="fa:minus" />
								</button>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<h3 class="text-slate-100/80">{item.description.name}</h3>
							<ul class="text-slate-300/70 text-sm space-x-4">
								<li class="inline-block text-orange-400/70">{item.description.price}</li>
								<li class="inline-block">{item.description.weight} lbs.</li>
							</ul>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"
							>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(item.visible.basic) as key}
											{#if item.visible.basic[key] && typeof item.visible.basic[key] != 'object'}
												<li>{toTitleCase(key)}: {item.visible.basic[key]}</li>
											{/if}
										{/each}
									</ul>
								</div>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(item.visible.basic) as key}
											<li>{toTitleCase(key)}: {item.visible.basic[key]}</li>
										{/each}
										{#each Object.keys(item.visible.combat) as key}
											{#if item.visible.combat[key] && typeof item.visible.combat[key] != 'object'}
												<li>{toTitleCase(key)}: {item.visible.combat[key]}</li>
											{:else if key === 'type' && item.visible.combat.type.length > 0}
												<li>{toTitleCase(key)}: {item.visible.combat[key]}</li>
											{/if}
										{/each}
									</ul>
								</div>
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
		<!-- prettier-ignore -->
		<div class="justify-between">
			<!-- <div class="inline-block ml-2 p-0">
				<h3>Total Cost: {totalCost}</h3>
			</div> -->
			<footer class="modal-footer {parent.regionFooter}">
				<button class="btn {parent.buttonNeutral}" on:click={modalStore.close}>Cancel</button>
				<button class="btn {parent.buttonPositive}" on:click={addItems} disabled={addList.length < 1}>Add Items</button>
		</footer>
		</div>
	</div>
{/if}
