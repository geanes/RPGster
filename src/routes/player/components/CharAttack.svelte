<script lang="ts">
	import {
		currentAttack,
		currentAbilities,
		currentAttributes,
		currentAbilityModifiers,
		currentAttackTotals,
		modify
	} from '../storeCharacter';
</script>

<section class="card min-w-max variant-glass-surface" class:variant-ringed-error={$modify}>
	<h2 class="pb-0 p-4 text-slate-50/80">Attack</h2>
	<div class="pt-2 p-4 space-y-2">
		<!-- BAB & Spell resistance -->
		<div class="grid grid-cols-2 gap-2">
			<label class="label">
				<span class="text-xs text-slate-50/50">Base Attack Bonus</span>
				<input
					id="bab"
					readonly={true}
					class="input rounded-full font-bold text-center arrow-hide"
					title="Base Attack Bonus"
					type="number"
					min="-20"
					max="20"
					bind:value={$currentAttack.bab}
				/>
			</label>
			<label class="label">
				<span class="text-xs text-slate-50/50">Spell Resistance</span>
				<input
					id="spellResist"
					class="input rounded-full font-bold text-center arrow-hide"
					title="Spell Resistance"
					type="number"
					min="-20"
					max="20"
					bind:value={$currentAttack.spellResist}
				/>
			</label>
		</div>
		<hr />
		<!-- Grapple -->
		<div
			class="grid grid-cols-7 grid-rows-2 gap-y-0 pt-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"
		>
			<span class="col-start-3 row-start-2">Total</span>
			<span class="col-start-4 row-start-2">BAB</span>
			<span class="col-start-5 row-start-1">STR</span>
			<span class="col-start-5 row-start-2">Modifier</span>
			<span class="col-start-6 row-start-1">Size</span>
			<span class="col-start-6 row-start-2">Modifier</span>
			<span class="col-start-7 row-start-1">Misc</span>
			<span class="col-start-7 row-start-2">Modifier</span>
		</div>

		<div class="grid grid-cols-7 gap-2 mt-0">
			<div
				id="grapple"
				title="Grapple Modifier"
				class="col-span-2 bg-surface-900/60 p-2 text-center rounded-sm"
			>
				Grapple
			</div>
			<div
				id="grappleTotal"
				title="Grapple Modifier Total"
				class="bg-slate-500/40 p-2 text-center rounded-full"
			>
				<p>{$currentAttackTotals.grappleTotal}</p>
			</div>
			<div
				id="grappleBab"
				title="Base Attack Bonus"
				class="bg-slate-500/40 p-2 text-center rounded-sm"
			>
				<p>{$currentAttack.bab}</p>
			</div>
			<div
				id="strAbilMod"
				title="Strength Modifier"
				class="bg-slate-500/40 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.str.temp}
			>
				<p>{$currentAbilityModifiers.activeStrMod}</p>
			</div>
			<div id="sizeMod" title="Size Modifier" class="bg-slate-500/40 p-2 text-center rounded-sm">
				<p>{$currentAttributes.sizeMod}</p>
			</div>
			<input
				id="grappleMiscMod"
				class="input variant-form-material text-center arrow-hide"
				title="Miscellaneous Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAttack.grappleMiscMod}
			/>
		</div>
	</div>
</section>
