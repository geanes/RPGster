<script lang="ts">
	// import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Accordion from '$lib/components/CustomAccordion/Accordion.svelte';
	import AccordionItem from '$lib/components/CustomAccordion/AccordionItem.svelte';
	import { currentGear, modify } from '../storeCharacter';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { toTitleCase } from '$lib/utils/utils';

	export let weapons: any;

	function modalAddWeapon(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalAddWeapon',
			title: 'Choose Weapons',
			meta: { weapons }
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalNewWeapon(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalNewWeapon',
			title: 'New Weapon',
			body: 'Create a new weapon'
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function removeWeapon(tag: string): void {
		$currentGear.weapons = $currentGear.weapons.filter((weapon) => weapon.tag !== tag);
	}
	function removeUserWeapon(tag: string): void {
		$currentGear.userWeapons = $currentGear.userWeapons.filter((weapon) => weapon.tag !== tag);
	}
	function filteredWeapon(id: string): any {
		return weapons.find((item: any) => item.id === id);
	}
</script>

<div class="card variant-glass-surface">
	<section class="card mx-auto mt-2 mb-8 space-y-2" class:variant-ringed-error={$modify}>
		<div class="grid grid-cols-2 p-0 m-0 gap-2">
			<span class="p-2 pl-4 text-slate-50/80 align-text-bottom">
				<h2 class="pt-2">Weapons</h2>
			</span>
			<span class="p-2 pr-4 justify-self-end">
				<button
					title="Add weapon"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalAddWeapon}
				>
					<iconify-icon icon="mdi:add-bold" />
				</button>
				<button
					title="New weapon"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalNewWeapon}
				>
					<iconify-icon icon="grommet-icons:new" />
				</button>
			</span>
		</div>
		<div class="flex flex-row pl-10 pb-2 border-b-[1px] border-slate-500/30 text-slate-100/50">
			<span class="w-full shrink invisible">Weapons</span>
		</div>
		<!-- <hr class="slate-500/30" /> -->
		<div class="grow max-h-[40rem] min-h-[40rem] p-2 overflow-auto text-slate-100/70">
			<Accordion autocollapse>
				{#if $currentGear.weapons.length === 0 && $currentGear.userWeapons.length === 0}
					<p class="min-w-max text-center">⚔️ Add or create weapons</p>
				{/if}
				{#each $currentGear.weapons as item, index}
					<AccordionItem id={item.tag}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox variant-ringed-secondary"
								type="checkbox"
								checked={$currentGear.weapons[index].equipped}
								bind:value={item.tag}
								on:change={() => {
									$currentGear.weapons[index].equipped = $currentGear.weapons[index].equipped
										? false
										: true;
								}}
							/>
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<span>
								<h3 class="text-slate-100/80 inline-block">
									{filteredWeapon(item.id).description.name}
								</h3>
								<button
									class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
									on:click={() => removeWeapon(item.tag)}
								>
									<iconify-icon icon="material-symbols:delete" />
								</button>
								<span class="text-slate-100/70">{item.note}</span>
							</span>
							<ul class="text-slate-300/70 text-sm space-x-4">
								<li class="inline-block text-orange-400/70">
									{filteredWeapon(item.id).description.price}
								</li>
								<li class="inline-block">{filteredWeapon(item.id).description.weight} lbs.</li>
							</ul>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div
								class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"
							>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(filteredWeapon(item.id).visible.basic) as key}
											{#if filteredWeapon(item.id).visible.basic[key] && typeof filteredWeapon(item.id).visible.basic[key] != 'object'}
												<li>{toTitleCase(key)}: {filteredWeapon(item.id).visible.basic[key]}</li>
											{/if}
										{/each}
									</ul>
								</div>
								<div class="space-y-2 ml-2 p-2">
									<ul>
										{#each Object.keys(filteredWeapon(item.id).visible.combat.damage) as key}
											<li>
												{toTitleCase(key)}: {filteredWeapon(item.id).visible.combat.damage[key]}
											</li>
										{/each}
										{#each Object.keys(filteredWeapon(item.id).visible.combat) as key}
											{#if filteredWeapon(item.id).visible.combat[key] && typeof filteredWeapon(item.id).visible.combat[key] != 'object'}
												<li>{toTitleCase(key)}: {filteredWeapon(item.id).visible.combat[key]}</li>
											{:else if key === 'type' && filteredWeapon(item.id).visible.combat.type.length > 0}
												<li>{toTitleCase(key)}: {filteredWeapon(item.id).visible.combat[key]}</li>
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
				<!-- User weapons -->
				{#each $currentGear.userWeapons as item, index}
					<AccordionItem id={item.tag}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox variant-ringed-secondary"
								type="checkbox"
								checked={$currentGear.userWeapons[index].equipped}
								bind:value={item.tag}
								on:change={() => {
									$currentGear.userWeapons[index].equipped = $currentGear.userWeapons[index]
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
									on:click={() => removeUserWeapon(item.tag)}
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
										{#each Object.keys(item.visible.combat.damage) as key}
											<li>{toTitleCase(key)}: {item.visible.combat.damage[key]}</li>
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
