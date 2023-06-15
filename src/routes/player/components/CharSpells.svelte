<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { currentSpells, modify } from '../storeCharacter';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { toTitleCase } from '$lib/utils/utils';

	export let spells: any;

	function modalAddSpell(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalAddSpell',
			title: 'Choose Spells',
			meta: { spells }
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function modalNewSpell(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalNewSpell',
			title: 'New Spells',
			body: 'Create new spells'
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	function removeSpell(tag: string): void {
		$currentSpells.spells = $currentSpells.spells.filter((item) => item.tag !== tag);
	}
	function removeUserSpell(tag: string): void {
		$currentSpells.userSpells = $currentSpells.userSpells.filter((item) => item.tag !== tag);
	}
</script>

<div class="card variant-glass-surface">
	<section class="card mx-auto mt-2 mb-8 space-y-2" class:variant-ringed-error={$modify}>
		<div class="grid grid-cols-2 p-0 m-0 gap-2">
			<span class="p-2 pl-4 text-slate-50/80 align-text-bottom">
				<h2 class="pt-2">Spells</h2>
			</span>
			<span class="p-2 pr-4 justify-self-end">
				<button
					title="Add gear"
					class="btn-icon btn-icon-sm variant-filled"
					on:click={modalAddSpell}
				>
					<iconify-icon icon="mdi:add-bold" />
				</button>
				<button
					title="New gear"
					class="btn-icon btn-icon-sm variant-filled"
					on:click={modalNewSpell}
				>
					<iconify-icon icon="grommet-icons:new" />
				</button>
			</span>
		</div>
		<hr class="slate-500/30" />
		<div class="grow max-h-[42rem] min-h-[42rem] p-2 overflow-auto text-slate-100/70">
			<Accordion autocollapse>
				{#if $currentSpells.spells.length === 0 && $currentSpells.userSpells.length === 0}
					<p class="min-w-max text-center">💥 Add or create spells</p>
				{/if}
				{#each $currentSpells.spells as item, index}
					<AccordionItem id={item.tag}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox variant-ringed-secondary"
								type="checkbox"
								checked={$currentSpells.spells[index].equipped}
								bind:value={item.tag}
								on:change={() => {
									$currentSpells.spells[index].equipped = $currentSpells.spells[index].equipped
										? false
										: true;
								}}
							/>
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<span>
								<h3 class="text-slate-100/80 inline-block">{item.name}</h3>
								<button
									class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
									on:click={() => removeSpell(item.tag)}
								>
									<iconify-icon icon="material-symbols:delete" />
								</button>
								<span class="text-slate-100/70">{item.note}</span>
							</span>
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
				{#each $currentSpells.userSpells as item, index}
					<AccordionItem id={item.tag}>
						<svelte:fragment slot="lead">
							<input
								class="checkbox variant-ringed-secondary"
								type="checkbox"
								checked={$currentSpells.userSpells[index].equipped}
								bind:value={item.tag}
								on:change={() => {
									$currentSpells.userSpells[index].equipped = $currentSpells.userSpells[index]
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
								<h3 class="text-slate-100/80 inline-block">{item.name}</h3>
								<button
									class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
									on:click={() => removeUserSpell(item.tag)}
								>
									<iconify-icon icon="material-symbols:delete" />
								</button>
								<span class="text-slate-100/70">{item.note}</span>
							</span>
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
