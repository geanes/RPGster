<script lang="ts">
	// import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Accordion from '$lib/components/CustomAccordion/Accordion.svelte';
	import AccordionItem from '$lib/components/CustomAccordion/AccordionItem.svelte';
	import { currentGear, currentMisc, currentACTotals, modify } from '../storeCharacter';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { toTitleCase } from '$lib/utils/utils';

	export let armor: any;

	function modalAddArmor(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalAddArmor',
			title: 'Choose Armor',
			meta: { armor }
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalNewArmor(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalNewArmor',
			title: 'New Protective Item',
			body: 'Create a new item'
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function removeArmor(tag: string): void {
		$currentGear.armor = $currentGear.armor.filter((armor) => armor.tag !== tag);
	}
	function removeUserArmor(tag: string): void {
		$currentGear.userArmor = $currentGear.userArmor.filter((armor) => armor.tag !== tag);
	}
	function filteredArmor(id: string): any {
		return armor.find((item: any) => item.id === id);
	}
	const getTotalBonuses = (list: any) => {
		let armorBonus = 0;
		let shieldBonus = 0;
		let accesoryBonus = 0;
		list.forEach((item: any) => {
			if (item.hidden.type.toLowerCase().includes('armor') && item.equipped) {
				armorBonus += item.visible.armorBonus;
			} else if (item.hidden.type.toLowerCase().includes('shield') && item.equipped) {
				shieldBonus += item.visible.armorBonus;
			} else if (item.equipped) {
				accesoryBonus += item.visible.armorBonus;
			}
		});
		return { armorBonus, shieldBonus, accesoryBonus };
	};
	$: {
		// $currentGear.armor || $currentGear.userArmor;
		const totalBonuses = getTotalBonuses($currentGear.armor);
		const totalUserBonuses = getTotalBonuses($currentGear.userArmor);
		$currentMisc.armorBonus = totalBonuses.armorBonus + totalUserBonuses.armorBonus;
		$currentMisc.shieldBonus = totalBonuses.shieldBonus + totalUserBonuses.shieldBonus;
	}
</script>

<div class="card variant-glass-surface">
	<section class="card mx-auto mt-2 mb-8 space-y-2" class:variant-ringed-error={$modify}>
		<div class="grid grid-cols-2 p-0 m-0 gap-2">
			<span class="p-2 pl-4 text-slate-50/80 align-text-bottom">
				<h2 class="pt-2">Armor</h2>
			</span>
			<span class="p-2 pr-4 justify-self-end">
				<button
					title="Add armor"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalAddArmor}
				>
					<iconify-icon icon="mdi:add-bold" />
				</button>
				<button
					title="New armor"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalNewArmor}
				>
					<iconify-icon icon="grommet-icons:new" />
				</button>
			</span>
		</div>
		<div class="flex flex-row pl-10 pb-2 border-b-[1px] border-slate-500/30 text-slate-100/50">
			<span class="w-full shrink">
				Armor({$currentMisc.armorBonus})
			</span>
			<span class="w-full shrink">
				Shield({$currentMisc.shieldBonus})
			</span>
			<span class="w-full shrink">
				Total AC: {$currentACTotals.acTotal}
			</span>
		</div>
		<!-- <hr class="slate-500/30" /> -->
		<div class="grow max-h-[40rem] min-h-[40rem] p-2 overflow-auto text-slate-100/70">
			<Accordion autocollapse>
				{#if $currentGear.armor.length === 0 && $currentGear.userArmor.length === 0}
					<p class="min-w-max text-center">🛡️ Add or create armor</p>
				{/if}
				{#each $currentGear.armor as item, index}
					<AccordionItem id={item.tag}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox variant-ringed-secondary"
								type="checkbox"
								checked={$currentGear.armor[index].equipped}
								bind:value={item.tag}
								on:change={() => {
									$currentGear.armor[index].equipped = $currentGear.armor[index].equipped
										? false
										: true;
								}}
							/>
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<span>
								<h3 class="text-slate-100/80 inline-block">
									{filteredArmor(item.id).description.name}
								</h3>
								<button
									class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
									on:click={() => removeArmor(item.tag)}
								>
									<iconify-icon icon="material-symbols:delete" />
								</button>
								<span class="text-slate-100/70">{item.note}</span>
							</span>
							<ul class="text-slate-300/70 text-sm space-x-4">
								<li class="inline-block text-orange-400/70">
									{filteredArmor(item.id).description.price}
								</li>
								<li class="inline-block">{filteredArmor(item.id).description.weight} lbs.</li>
								{#if filteredArmor(item.id).visible.coverage.length > 0}
									<li class="inline-block">({filteredArmor(item.id).visible.coverage})</li>
								{/if}
							</ul>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"
							>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(filteredArmor(item.id).visible) as key}
											{#if filteredArmor(item.id).visible[key] && typeof filteredArmor(item.id).visible[key] != 'object'}
												<li>{toTitleCase(key)}: {filteredArmor(item.id).visible[key]}</li>
											{/if}
										{/each}
									</ul>
								</div>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(filteredArmor(item.id).visible.combat) as key}
											{#if filteredArmor(item.id).visible.combat[key] && typeof filteredArmor(item.id).visible.combat[key] != 'object'}
												<li>{toTitleCase(key)}: {filteredArmor(item.id).visible.combat[key]}</li>
											{:else if key === 'type' && filteredArmor(item.id).visible.combat.type.length > 0}
												<li>{toTitleCase(key)}: {filteredArmor(item.id).visible.combat[key]}</li>
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
				<!-- User armor -->
				{#each $currentGear.userArmor as item, index}
					<AccordionItem id={item.tag}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox variant-ringed-secondary"
								type="checkbox"
								checked={$currentGear.userArmor[index].equipped}
								bind:value={item.tag}
								on:change={() => {
									$currentGear.userArmor[index].equipped = $currentGear.userArmor[index].equipped
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
									on:click={() => removeUserArmor(item.tag)}
								>
									<iconify-icon icon="material-symbols:delete" />
								</button>
								<span class="text-slate-100/70">{item.note}</span>
							</span>
							<ul class="text-slate-300/70 text-sm space-x-4">
								<li class="inline-block text-orange-400/70">{item.description.price}</li>
								<li class="inline-block">{item.description.weight} lbs.</li>
								{#if item.visible.coverage.length > 0}
									<li class="inline-block">({item.visible.coverage})</li>
								{/if}
							</ul>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"
							>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(item.visible) as key}
											{#if item.visible[key] && typeof item.visible[key] != 'object'}
												<li>{toTitleCase(key)}: {item.visible[key]}</li>
											{/if}
										{/each}
									</ul>
								</div>
								<div class="space-y-2 ml-2 p-2">
									<ul>
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
