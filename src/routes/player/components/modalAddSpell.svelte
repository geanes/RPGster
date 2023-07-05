<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { currentSpells } from '../storeCharacter';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { v4 as uuidv4 } from 'uuid';
	import { toTitleCase, inList } from '$lib/utils/utils';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	const spells = $modalStore[0].meta?.spells;
	let addList: any[] = [];

	function addItems(): void {
		$currentSpells.spells = [...$currentSpells.spells, ...addList];
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
				{#each spells as item}
					<AccordionItem id={item.id}>
						<svelte:fragment slot="lead">
							<button
								class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"
								on:click={() => {
									const spellToAdd = {
										id: item.id,
										equipped: false,
										note: '',
										tag: uuidv4()
									};
									addList = [...addList, spellToAdd];
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
							<h3 class="text-slate-100/80">{item.name}</h3>
							<ul class="text-slate-300/70 text-sm space-x-2">
								<li class="inline-block text-orange-400/70">{item.casting_time}</li>
								<li class="inline-block text-orange-400/70">{item.range}</li>
								<li class="inline-block text-orange-400/70">{item.duration}</li>
								<li class="inline-block">{item.level}</li>
								<li class="inline-block">{item.school}</li>
							</ul>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"
							>
								<div class="space-y-2 ml-2 p-2">
									<ul class="list">
										<li>
											Description: <span
												class="ml-2 pl-2 border-l-2 text-justify text-slate-300/70 border-slate-300/50"
											>
												{item.desc}
											</span>
										</li>
										<li>Class: <span class="pl-2 text-slate-300/70">{item.class}</span></li>
										<li>
											Concentration: <span class="pl-2 text-slate-300/70">{item.concentration}</span
											>
										</li>
										<li>Ritual: <span class="pl-2 text-slate-300/70">{item.ritual}</span></li>
										<li>
											Components: <span class="pl-2 text-slate-300/70">{item.components}</span>
										</li>
										<li>Material: <span class="pl-2 text-slate-300/70">{item.material}</span></li>
										<li>
											<span class="whitespace-nowrap">Higher level:</span><span
												class="ml-2 pl-2 border-l-2 text-justify text-slate-300/70 border-slate-300/50"
											>
												{item.higher_level}
											</span>
										</li>
										<li>Referece page: <span class="pl-2 text-slate-300/70">{item.page}</span></li>
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
				<button class="btn {parent.buttonPositive}" on:click={addItems} disabled={addList.length < 1}>Add Spells</button>
		</footer>
		</div>
	</div>
{/if}
