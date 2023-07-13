<script lang="ts">
	import { generateRandomId } from '$lib/utils/helpers';
	import { toCamelCase, toTitleCase } from '$lib/utils/utils';
	import type { Skill } from '$lib/types/interfaceCharacter';
	import { currentSkills, currentAbilities } from '$lib/stores/storeCharacter';
	import { modalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	const abilitiesList = Object.keys($currentAbilities);
	const { categories } = $modalStore[0].meta;

	const newSkill: Skill = {
		id: '',
		uid: '',
		name: '',
		category: 'general',
		ability: '',
		trained: false,
		magic: false,
		psi: false,
		synergy: [],
		ref: '',
		ranks: 0,
		miscMod: 0
	};

	function onSubmit(): void {
		newSkill.id = toCamelCase(newSkill.name);
		newSkill.uid = generateRandomId();
		newSkill.ability = newSkill.ability && newSkill.ability.toLowerCase();
		$currentSkills.userSkills = [...$currentSkills.userSkills, newSkill];
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<form class="modal-form {cForm}">
			<label class="label">
				<span>SKill Name</span>
				<input
					class="input"
					type="text"
					bind:value={newSkill.name}
					placeholder="Enter new skill name..."
				/>
			</label>
			<div class="grid grid-cols-2 gap-2">
				<label class="label">
					<span>Category</span>
					<select class="select" bind:value={newSkill.category}>
						{#each categories as category}
							<option value={category}>{toTitleCase(category)}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span>Ability</span>
					<select class="select" bind:value={newSkill.ability}>
						<option value="" selected>None</option>
						{#each abilitiesList as ability}
							<option value={ability}>{ability.toUpperCase()}</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="space-y-2 grid grid-cols-3 gap-4 justify-items-center">
				<label class="flex items-center space-x-2">
					<input class="checkbox" type="checkbox" bind:value={newSkill.trained} checked />
					<p>Trained</p>
				</label>
				<label class="flex items-center space-x-2">
					<input class="checkbox" type="checkbox" bind:value={newSkill.magic} />
					<p>Magic</p>
				</label>
				<label class="flex items-center space-x-2">
					<input class="checkbox" type="checkbox" bind:value={newSkill.psi} />
					<p>Psionic</p>
				</label>
			</div>
			<label class="label">
				<span>Reference</span>
				<input
					class="input"
					type="text"
					bind:value={newSkill.ref}
					placeholder="Link to reference..."
				/>
			</label>
			<div class="grid grid-cols-2 gap-4 justify-items-center">
				<label class="label">
					<span>Ranks</span>
					<input
						class="input text-center w-[48px] arrow-hide"
						type="number"
						bind:value={newSkill.ranks}
					/>
				</label>
				<label class="label">
					<span>Misc Modifier</span>
					<input
						class="input text-center w-[48px] arrow-hide"
						type="number"
						bind:value={newSkill.miscMod}
					/>
				</label>
			</div>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
        <button class="btn {parent.buttonPositive}" on:click={onSubmit}>Add Skill</button>
    </footer>
	</div>
{/if}
