<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { toCamelCase } from '$lib/utils/utils';
	import { currentGear } from '../storeCharacter';
	import { modalStore, InputChip } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	let newArmor = {
		id: '',
		tag: '',
		note: '',
		equipped: false,
		description: {
			name: '',
			source: null,
			price: '0 gp',
			weight: 0
		},
		visible: {
			size: null,
			armorBonus: 0,
			checkPenalty: 0,
			maxDexBonus: 0,
			arcaneSpellFailure: 0,
			speed_20: '20 ft',
			speed_30: '30 ft',
			coverage: [],
			combat: {
				mediumDie: null,
				smallDie: null,
				critical: null,
				type: []
			}
		},
		hidden: {
			type: ''
		},
		inputs: {}
	};

	let coverageList: string[] = ['head', 'body', 'arms', 'legs', 'hands', 'feet', 'other'];

	function onSubmit(): void {
		newArmor.id = toCamelCase(newArmor.description.name);
		newArmor.tag = uuidv4();
		$currentGear.userArmor = [...$currentGear.userArmor, newArmor];
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
					bind:value={newArmor.description.name}
					placeholder="Name..."
				/>
			</label>
			<label class="label col-span-2">
				<span>Type</span>
				<select id="type" class="select variant-form-material" bind:value={newArmor.hidden.type}>
					<option value="other" selected>Other</option>
					<option value="armor" selected>Armor</option>
					<option value="shield" selected>Shield</option>
					<option value="accessory" selected>Accessory</option>
				</select>
			</label>
			<label class="label">
				<span>Price</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newArmor.description.price}
					placeholder="Enter price in gp..."
				/>
			</label>
			<label class="label">
				<span>Weight</span>
				<input
					class="input text-center arrow-hide"
					type="number"
					bind:value={newArmor.description.weight}
				/>
			</label>
			<label class="label">
				<span>Armor Bonus</span>
				<input
					class="input text-center arrow-hide"
					type="number"
					bind:value={newArmor.visible.armorBonus}
				/>
			</label>
			<label class="label">
				<span>Check Penalty</span>
				<input
					class="input text-center arrow-hide"
					type="number"
					bind:value={newArmor.visible.checkPenalty}
				/>
			</label>
			<label class="label">
				<span>Max. DEX Bonus</span>
				<input
					class="input text-center arrow-hide"
					type="number"
					bind:value={newArmor.visible.maxDexBonus}
				/>
			</label>
			<label class="label">
				<span>Arcane Spell Failure</span>
				<input
					class="input text-center arrow-hide"
					type="number"
					bind:value={newArmor.visible.arcaneSpellFailure}
				/>
			</label>
			<label class="label">
				<span>Speed 20</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newArmor.visible.speed_20}
					placeholder="Enter speed at 20 ft..."
				/>
			</label>
			<label class="label">
				<span>Speed 30</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newArmor.visible.speed_30}
					placeholder="Enter speed at 30 ft..."
				/>
			</label>
			<InputChip
				name="coverage"
				class="col-span-2"
				bind:value={newArmor.visible.coverage}
				whitelist={coverageList}
				placeholder="Enter coverage area, press ENTER..."
			/>
			<hr class="col-span-4" />
			<h3 class="col-span-4">Combat</h3>
			<label class="label">
				<span>Medium die</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newArmor.visible.combat.mediumDie}
					placeholder="Medium die..."
				/>
			</label>
			<label class="label">
				<span>Small die</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newArmor.visible.combat.smallDie}
					placeholder="Small die..."
				/>
			</label>
			<label class="label">
				<span>Critical</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newArmor.visible.combat.critical}
					placeholder="Critical..."
				/>
			</label>
			<label class="label">
				<span>Damage type</span>
				<input
					class="input variant-form-material"
					type="text"
					bind:value={newArmor.visible.combat.type}
					placeholder="Damage type..."
				/>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
        <button class="btn {parent.buttonPositive}" on:click={onSubmit} disabled={!newArmor.description.name}>Create Item</button>
    </footer>
	</div>
{/if}
