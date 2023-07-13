<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { toCamelCase } from '$lib/utils/utils';
	import { currentSpells } from '$lib/stores/storeCharacter';
	import { modalStore, InputChip } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	let newSpell = {
		id: '',
		tag: '',
		ref: '',
		note: '',
		equipped: false,
		archetype: '',
		casting_time: '1 action',
		circles: '',
		class: '',
		components: 'V, S, M',
		concentration: 'no',
		desc: '',
		duration: 'Instantaneous',
		higher_level: '',
		level: '1st-level',
		material: '',
		name: '',
		range: '0 feet',
		ritual: 'no',
		school: ''
	};

	function onSubmit(): void {
		newSpell.id = toCamelCase(newSpell.name);
		newSpell.tag = uuidv4();
		$currentSpells.userSpells = [...$currentSpells.userSpells, newSpell];
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4 overflow-auto';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class="w-modal-wide {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<form class="modal-form {cForm} grid grid-cols-5 gap-2">
			<label class="label col-span-5">
				<span>Spell name</span>
				<input class="input" type="text" bind:value={newSpell.name} placeholder="Name..." />
			</label>
			<label class="label">
				<span>Casting Time</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.casting_time}
					placeholder="Casting time..."
				/>
			</label>
			<label class="label">
				<span>Range</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.range}
					placeholder="Range..."
				/>
			</label>
			<label class="label">
				<span>Duration</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.duration}
					placeholder="Duration..."
				/>
			</label>
			<label class="label">
				<span>Level</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.level}
					placeholder="Level..."
				/>
			</label>
			<label class="label">
				<span>School</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.school}
					placeholder="School..."
				/>
			</label>
			<label class="label col-span-5">
				<span>Description</span>
				<textarea
					name="Description"
					class="textarea"
					bind:value={newSpell.desc}
					placeholder="Description..."
				/>
			</label>
			<label class="label">
				<span>Classes</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.class}
					placeholder="Classes..."
				/>
			</label>
			<label class="label">
				<span>Concentration</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.concentration}
					placeholder="Concentration..."
				/>
			</label>
			<label class="label">
				<span>Ritual</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.ritual}
					placeholder="Ritual..."
				/>
			</label>
			<label class="label">
				<span>Components</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.components}
					placeholder="Components..."
				/>
			</label>
			<label class="label">
				<span>Material</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.material}
					placeholder="Material..."
				/>
			</label>
			<label class="label col-span-5">
				<span>Higher level</span>
				<textarea
					name="highereLevel"
					class="textarea"
					bind:value={newSpell.higher_level}
					placeholder="Description of higher level effects..."
				/>
			</label>
			<!-- <label class="label">
				<span>Archetype</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.archetype}
					placeholder="Archetype..."
				/>
			</label>
			<label class="label">
				<span>Circles</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.circles}
					placeholder="Circles..."
				/>
			</label> -->
			<label class="label col-span-3">
				<span>Reference</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newSpell.ref}
					placeholder="URL or book and page number..."
				/>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
        <button class="btn {parent.buttonPositive}" on:click={onSubmit} disabled={!newSpell.name}>Create Spell</button>
    </footer>
	</div>
{/if}
