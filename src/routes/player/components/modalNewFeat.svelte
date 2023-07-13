<script lang="ts">
	import { generateRandomId } from '$lib/utils/helpers';
	import { toCamelCase } from '$lib/utils/utils';
	import type { Feat } from '$lib/types/interfaceCharacter';
	import { currentFeats } from '$lib/stores/storeCharacter';
	import { modalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	const newFeat: Feat = {
		id: '',
		uid: undefined,
		name: '',
		longText: '',
		shortText: '',
		type: '',
		prerequisites: '',
		ref: ''
	};

	function onSubmit(): void {
		newFeat.id = toCamelCase(newFeat.name);
		newFeat.uid = generateRandomId();
		$currentFeats.userFeats = [...$currentFeats.userFeats, newFeat];
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
				<span>Feat Name</span>
				<input
					class="input"
					type="text"
					bind:value={newFeat.name}
					placeholder="Enter new feat name..."
				/>
			</label>
			<label class="label">
				<span>Short Description</span>
				<input
					class="input"
					type="text"
					bind:value={newFeat.shortText}
					placeholder="Summary of the feat effects..."
				/>
			</label>
			<label class="label">
				<span>Descripttion</span>
				<input
					class="input"
					type="text"
					bind:value={newFeat.longText}
					placeholder="Describe the feat..."
				/>
			</label>
			<label class="label">
				<span>Requires</span>
				<input
					class="input"
					type="text"
					bind:value={newFeat.prerequisites}
					placeholder="Prerequisites for the feat..."
				/>
			</label>
			<label class="label">
				<span>Reference</span>
				<input
					class="input"
					type="text"
					bind:value={newFeat.ref}
					placeholder="Link to reference..."
				/>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
        <button class="btn {parent.buttonPositive}" on:click={onSubmit}>New Feat</button>
    </footer>
	</div>
{/if}
