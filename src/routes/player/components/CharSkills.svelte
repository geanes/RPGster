<script lang="ts">
	import {
		currentSkills,
		currentAttributes,
		currentAbilities,
		modify
	} from '$lib/stores/storeCharacter';
	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { toTitleCase } from '$lib/utils/utils';
	import type { Skill } from '$lib/types/interfaceCharacter';

	export let skills: any;
	export let classes: any;
	const skillsCategories = Object.keys(skills);

	function modalNewSkill(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalNewSkill',
			title: 'New Skill',
			body: 'Create a new skill.',
			meta: { categories: skillsCategories }
			// response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	let cClass: string = $currentAttributes.class;
	let classSkills: string[] = [];

	function compileSkillsList() {
		let skillsList: Skill[] = [];
		skillsCategories.map((category) => {
			skills[category].map((skill: any) => {
				let skillExtended;
				skillExtended = { ...skill, ranks: 0, miscMod: 0, category: category };
				skillsList = [...skillsList, skillExtended];
			});
		});
		return skillsList;
	}

	$currentSkills.skills = compileSkillsList();

	let fullSkillsList = [...$currentSkills.skills, ...$currentSkills.userSkills];

	$: {
		fullSkillsList = [...$currentSkills.skills, ...$currentSkills.userSkills];
	}

	const currentAbilityMod = (ability: string, temp: any) => {
		if (temp) {
			return $currentAbilities[ability]['modTemp'];
		} else if (ability) {
			ability = ability.toLowerCase();
			return $currentAbilities[ability]['mod'];
		} else {
			return 0;
		}
	};

	const skillTotal = (abilityMod: any, ranks: number, misc: number): number => {
		return abilityMod + ranks + misc;
	};

	function removeUserSkill(uid: string | undefined): void {
		$currentSkills.userSkills =
			uid === undefined
				? $currentSkills.userSkills
				: ($currentSkills.userSkills = $currentSkills.userSkills.filter(
						(skill) => skill.uid !== uid
				  ));
	}

	$: {
		cClass = $currentAttributes.class;
		classSkills = cClass ? classes[cClass].classSkills : [];
		classSkills = Object.keys(classSkills);
	}

	const [send, receive] = crossfade({
		duration: 1500,
		easing: quintOut
	});
</script>

<div class="card variant-glass-surface">
	<section class="card mx-auto mt-2 mb-8 space-y-2" class:variant-ringed-error={$modify}>
		<div class="grid grid-cols-2 p-0 m-0 gap-2">
			<span class="p-2 pl-4 text-slate-50/80 align-text-bottom">
				<h2 class="pt-2">Skills</h2>
			</span>
			<span class="p-2 pr-4 justify-self-end">
				<button
					title="Create a new Skill"
					class="btn-icon btn-icon-sm variant-outline-tertiary"
					on:click={modalNewSkill}
				>
					<iconify-icon icon="grommet-icons:new" />
				</button>
			</span>
		</div>
		<div class="flex flex-row pl-10 pb-2 border-b-[1px] border-slate-500/30 text-slate-100/50">
			<span class="w-full shrink" />
			<span class="pr-8">Ability</span>
			<span class="pl-2 pr-8">Rank</span>
			<span class="pl-2 pr-6">Misc</span>
			<span class="pl-2 pr-4">Total</span>
		</div>
		<div class="flex-col max-h-[40rem] p-2 overflow-auto">
			<ul class="list flex-1">
				{#each skillsCategories as category}
					<li class="text-slate-100/80 pt-2">
						<span class="flex-1 font-extrabold">{toTitleCase(category)}</span>
					</li>
					<li class="text-slate-100/70 hover:text-slate-100">
						<ul class="list flex-1 pb-2">
							{#each fullSkillsList as item}
								{#if item.category === category}
									<li class="text-slate-100/70 hover:text-slate-100">
										<span class="w-[18px]">
											{#if classSkills.includes(item.id)}
												<iconify-icon
													icon="tabler:circle-dot"
													in:send={{ key: 'circle' }}
													out:receive={{ key: 'circle' }}
												/>
											{:else if !item.trained}
												<iconify-icon
													icon="material-symbols:circle"
													in:send={{ key: 'circle' }}
													out:receive={{ key: 'circle' }}
												/>
											{:else}
												<iconify-icon
													icon="material-symbols:circle-outline"
													in:send={{ key: 'circle' }}
													out:receive={{ key: 'circle' }}
												/>
											{/if}
										</span>
										<span id={item.id} class="grow" class:italic={item.trained}>
											<a
												href={item.ref ? item.ref : null}
												target="_blank"
												class:cursor-not-allowed={!item.ref}>{item.name}</a
											>
											{#if item.uid !== undefined && item.uid}
												<button
													class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"
													on:click={() => removeUserSkill(item.uid)}
												>
													<iconify-icon icon="material-symbols:delete" />
												</button>
											{/if}
										</span>
										<span class="text-slate-100/50"
											>{item.ability ? item.ability.toUpperCase() : ''}</span
										>
										<span
											id="abilMod"
											title="Ability Modifier"
											class="bg-surface-500/40 p-2 text-center rounded-full w-[36px]"
											class:variant-outline-warning={item.ability &&
												$currentAbilities[item.ability]['temp']}
											class:invisible={!item.ability}
										>
											{#if item.ability}
												{currentAbilityMod(item.ability, $currentAbilities[item.ability]['temp'])}
											{:else}
												0
											{/if}
										</span>
										<span>
											<input
												id="sRank"
												class="input text-center arrow-hide read-only:border"
												title="Skill Rank"
												type="number"
												min="0"
												max="100"
												bind:value={item.ranks}
											/>
										</span>
										<span>
											<input
												id="sMiscMod"
												class="input text-center arrow-hide read-only:border"
												title="Misc Modifier"
												type="number"
												min="0"
												max="100"
												bind:value={item.miscMod}
											/>
										</span>
										<span
											id="sTotal"
											title="Total Skill Modifier"
											class="bg-surface-500/70 p-2 text-center rounded-full w-[36px]"
										>
											<p>
												{skillTotal(
													item.ability
														? currentAbilityMod(
																item.ability,
																$currentAbilities[item.ability]['temp']
														  )
														: 0,
													item.ranks,
													item.miscMod
												)}
											</p>
										</span>
									</li>
									<!-- <hr class="!border-t-2" /> -->
								{/if}
							{/each}
						</ul>
					</li>
					<hr class="!border-t-1" />
				{/each}
			</ul>
		</div>
		<footer class="card-footer" />
	</section>
</div>
