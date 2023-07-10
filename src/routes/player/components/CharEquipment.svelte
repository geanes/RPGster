<script lang="ts">
	// import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Accordion from '$lib/components/CustomAccordion/Accordion.svelte';
	import AccordionItem from '$lib/components/CustomAccordion/AccordionItem.svelte';
	import { currentGear, modify } from '../storeCharacter';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { toTitleCase } from '$lib/utils/utils';

	export let gear: any;

	function modalAddGear(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalAddGear',
			title: 'Choose Gear',
			meta: { gear }
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalNewGear(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalNewGear',
			title: 'New Gear',
			body: 'Create new gear item'
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function removeEquipment(tag: string): void {
		$currentGear.equipment = $currentGear.equipment.filter((item) => item.tag !== tag);
	}
	function removeUserEquipment(tag: string): void {
		$currentGear.userEquipment = $currentGear.userEquipment.filter((item) => item.tag !== tag);
	}

	function filteredGear(id: string): any {
		return gear.find((item: any) => item.id === id);
	}
</script>

<div class="card variant-glass-surface">
	<section class="card mx-auto mt-2 mb-8 space-y-2" class:variant-ringed-error={$modify}>
		<div class="grid grid-cols-2 p-0 m-0 gap-2">
			<span class="p-2 pl-4 text-slate-50/80 align-text-bottom">
				<h2 class="pt-2">Equipment</h2>
			</span>
			<span class="p-2 pr-4 justify-self-end">
				<button
					title="Add gear"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalAddGear}
				>
					<iconify-icon icon="mdi:add-bold" />
				</button>
				<button
					title="New gear"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalNewGear}
				>
					<iconify-icon icon="grommet-icons:new" />
				</button>
			</span>
		</div>
		<hr class="slate-500/30" />
		<div class="grow max-h-[42rem] min-h-[42rem] p-2 overflow-auto text-slate-100/70">
			<Accordion autocollapse>
				{#if $currentGear.equipment.length === 0 && $currentGear.userEquipment.length === 0}
					<p class="min-w-max text-center">🎒 Add or create gear</p>
				{/if}
				{#each $currentGear.equipment as item, index}
					<AccordionItem id={item.tag}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox variant-ringed-secondary"
								type="checkbox"
								checked={$currentGear.equipment[index].equipped}
								bind:value={item.tag}
								on:change={() => {
									$currentGear.equipment[index].equipped = $currentGear.equipment[index].equipped
										? false
										: true;
								}}
							/>
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<span>
								<h3 class="text-slate-100/80 inline-block">
									{filteredGear(item.id).description.name}
								</h3>
								<button
									class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
									on:click={() => removeEquipment(item.tag)}
								>
									<iconify-icon icon="material-symbols:delete" />
								</button>
								<span class="text-slate-100/70">{item.note}</span>
							</span>
							<ul class="text-slate-300/70 text-sm space-x-4">
								<li class="inline-block text-orange-400/70">
									{filteredGear(item.id).description.price}
								</li>
								<li class="inline-block">{filteredGear(item.id).description.weight} lbs.</li>
							</ul>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"
							>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(filteredGear(item.id).visible.basic) as key}
											{#if filteredGear(item.id).visible.basic[key] && typeof filteredGear(item.id).visible.basic[key] != 'object'}
												<li>{toTitleCase(key)}: {filteredGear(item.id).visible.basic[key]}</li>
											{/if}
										{/each}
									</ul>
								</div>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(filteredGear(item.id).visible.basic) as key}
											<li>{toTitleCase(key)}: {filteredGear(item.id).visible.basic[key]}</li>
										{/each}
										{#each Object.keys(filteredGear(item.id).visible.combat) as key}
											{#if filteredGear(item.id).visible.combat[key] && typeof filteredGear(item.id).visible.combat[key] != 'object'}
												<li>{toTitleCase(key)}: {filteredGear(item.id).visible.combat[key]}</li>
											{:else if key === 'type' && filteredGear(item.id).visible.combat.type.length > 0}
												<li>{toTitleCase(key)}: {filteredGear(item.id).visible.combat[key]}</li>
											{/if}
										{/each}
									</ul>
								</div>
								<div class="space-y-2 ml-2 p-2">
									<label class="label">
										<span>Note</span>
										<textarea
											name="Note"
											id={`${item.id}Note`}
											class="textarea"
											bind:value={item.note}
										/>
									</label>
								</div>
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
				<!-- User equipment -->
				{#each $currentGear.userEquipment as item, index}
					<AccordionItem id={item.tag}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox variant-ringed-secondary"
								type="checkbox"
								checked={$currentGear.userEquipment[index].equipped}
								bind:value={item.tag}
								on:change={() => {
									$currentGear.userEquipment[index].equipped = $currentGear.userEquipment[index]
										.equipped
										? false
										: true;
								}}
							/>
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<iconify-icon
								icon="fa6-solid:circle-half-stroke"
								class="text-slate-100/50 text-xs mr-2"
							/>
							<span>
								<h3 class="text-slate-100/80 inline-block">{item.description.name}</h3>
								<button
									class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
									on:click={() => removeUserEquipment(item.tag)}
								>
									<iconify-icon icon="material-symbols:delete" />
								</button>
								<span class="text-slate-100/70">{item.note}</span>
							</span>
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
								<div class="space-y-2 ml-2 p-2">
									<label class="label">
										<span>Note</span>
										<textarea
											name="Note"
											id={`${item.id}Note`}
											class="textarea"
											bind:value={item.note}
										/>
									</label>
								</div>
							</div>
						</svelte:fragment>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
		<footer class="card-footer" />
	</section>
</div>
