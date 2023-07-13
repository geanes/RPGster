<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { toCamelCase } from '$lib/utils/utils';
	import { currentGear } from '$lib/stores/storeCharacter';
	import { modalStore, InputChip } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	let newWeapon = {
		id: '',
		tag: '',
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
			basic: {
				size: '',
				ammo: null,
				reach: null,
				range: null,
				blast: null
			},
			combat: {
				damage: {
					mediumDie: '',
					smallDie: ''
				},
				critical: '',
				type: []
			}
		},
		hidden: {
			hardness: null,
			hp: null,
			break: null,
			material: null,
			isExotic: false,
			isRanged: false
		},
		inputs: {}
	};

	function onSubmit(): void {
		newWeapon.id = toCamelCase(newWeapon.description.name);
		newWeapon.tag = uuidv4();
		$currentGear.userWeapons = [...$currentGear.userWeapons, newWeapon];
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
				<span>Weapon name</span>
				<input
					class="input"
					type="text"
					bind:value={newWeapon.description.name}
					placeholder="Name..."
				/>
			</label>
			<label class="label">
				<span>Type</span>
				<select
					id="type"
					class="select variant-form-material"
					bind:value={newWeapon.hidden.isRanged}
				>
					<option value="false" selected>Melee</option>
					<option value="true" selected>Ranged</option>
				</select>
			</label>
			<label class="label">
				<span>Size</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newWeapon.visible.basic.size}
					placeholder="Enter size..."
				/>
			</label>
			<label class="label">
				<span>Price</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newWeapon.description.price}
					placeholder="Enter price in gp..."
				/>
			</label>
			<label class="label">
				<span>Weight</span>
				<input
					class="input text-center arrow-hide"
					type="number"
					bind:value={newWeapon.description.weight}
				/>
			</label>
			<label class="label col-span-2">
				<span>Reference</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newWeapon.ref}
					placeholder="URL or book and page number..."
				/>
			</label>
			<label class="label col-span-2">
				<span>Notes</span>
				<textarea
					name="Note"
					id={`${newWeapon.id}Note`}
					class="textarea"
					bind:value={newWeapon.note}
				/>
			</label>
			<hr class="col-span-4" />
			<h3 class="col-span-4">Combat</h3>
			<label class="label">
				<span>Medium die</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newWeapon.visible.combat.damage.mediumDie}
					placeholder="Medium die..."
				/>
			</label>
			<label class="label">
				<span>Small die</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newWeapon.visible.combat.damage.smallDie}
					placeholder="Small die..."
				/>
			</label>
			<label class="label">
				<span>Critical</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newWeapon.visible.combat.critical}
					placeholder="Critical..."
				/>
			</label>
			<InputChip
				name="damage type"
				class="col-span-2"
				bind:value={newWeapon.visible.combat.type}
				placeholder="Enter damage type, press ENTER..."
			/>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
        <button class="btn {parent.buttonPositive}" on:click={onSubmit} disabled={!newWeapon.description.name}>Create Item</button>
    </footer>
	</div>
{/if}
