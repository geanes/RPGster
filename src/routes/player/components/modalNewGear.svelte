<script lang="ts">
	import { generateRandomId } from '$lib/utils/helpers';
	import { toCamelCase } from '$lib/utils/utils';
	import { currentGear } from '$lib/stores/storeCharacter';
	import { modalStore, InputChip } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	let newGear = {
		id: '',
		uid: '',
		ref: '',
		note: '',
		equipped: false,
		description: {
			name: '',
			source: null,
			price: '0 gp',
			weight: 0
		},
		visible: {
			basic: {},
			combat: {}
		},
		hidden: {
			type: null
		},
		inputs: {}
	};

	function onSubmit(): void {
		newGear.id = toCamelCase(newGear.description.name);
		newGear.uid = generateRandomId();
		$currentGear.userEquipment = [...$currentGear.userEquipment, newGear];
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
		<form class="modal-form {cForm} grid grid-cols-4 gap-2">
			<label class="label col-span-4">
				<span>Item name</span>
				<input
					class="input"
					type="text"
					bind:value={newGear.description.name}
					placeholder="Name..."
				/>
			</label>
			<label class="label">
				<span>Price</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newGear.description.price}
					placeholder="Enter price in gp..."
				/>
			</label>
			<label class="label">
				<span>Weight</span>
				<input
					class="input text-center arrow-hide"
					type="number"
					bind:value={newGear.description.weight}
				/>
			</label>
			<label class="label col-span-2">
				<span>Reference</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newGear.ref}
					placeholder="URL or book and page number..."
				/>
			</label>
			<label class="label col-span-2">
				<span>Notes</span>
				<textarea name="Note" id={`${newGear.id}Note`} class="textarea" bind:value={newGear.note} />
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
        <button class="btn {parent.buttonPositive}" on:click={onSubmit} disabled={!newGear.description.name}>Create Item</button>
    </footer>
	</div>
{/if}
