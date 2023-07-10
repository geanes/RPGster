<script lang="ts">
	import {
		currentAttributes,
		currentAbilities,
		currentMisc,
		currentHealth,
		currentAbilityModifiers,
		currentACTotals,
		modify
	} from '../storeCharacter';
</script>

<section class="card variant-glass-surface min-w-max" class:variant-ringed-error={$modify}>
	<h2 class="pb-0 p-4 text-slate-50/80">Misc</h2>
	<div class="pt-1 p-4 space-y-2">
		<div
			class="grid grid-cols-10 grid-rows-2 gap-y-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"
		>
			<span class="col-start-2 row-start-2">Speed</span>
			<span class="col-start-3 row-start-1">Temp</span>
			<span class="col-start-3 row-start-2">Speed</span>
			<span class="col-start-5 row-start-2">Touch</span>
			<span class="col-start-6 row-start-1">Flat</span>
			<span class="col-start-6 row-start-2">Footed</span>
			<span class="col-start-8 row-start-1">Non-Lethal</span>
			<span class="col-start-8 row-start-2">Damage</span>
			<span class="col-start-9 row-start-1">Damage</span>
			<span class="col-start-9 row-start-2">Reduction</span>
			<span class="col-start-10 row-start-1">Maximum</span>
			<span class="col-start-10 row-start-2">Hit Points</span>
		</div>
		<div class="grid grid-cols-10 gap-2">
			<button
				id="speed"
				class="button col-span-1 h-10 self-end bg-surface-900/60 p-0 text-center rounded-sm"
				class:variant-outline-warning={$currentMisc.speedTemp}
				on:click={() => ($currentMisc.speedTemp = !$currentMisc.speedTemp)}
			>
				Speed
			</button>
			<input
				id="speed"
				title="Speed"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="300"
				bind:value={$currentMisc.speed}
				disabled={$currentMisc.speedTemp}
			/>
			<input
				id="speedTempValue"
				class="input variant-form-material text-center arrow-hide"
				title="Temporary Speed"
				type="number"
				min="-0"
				max="300"
				bind:value={$currentMisc.speedTempValue}
				disabled={!$currentMisc.speedTemp}
			/>
			<div
				id="touch"
				title="Touch AC"
				class="col-start-5 bg-slate-500/40 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.dex.temp}
			>
				<p>{$currentACTotals.touch}</p>
			</div>
			<div
				id="flatFooted"
				title="Flat Footed AC"
				class="col-start-6 bg-slate-500/40 p-2 text-center rounded-sm"
			>
				<p>{$currentACTotals.flatFooted}</p>
			</div>
			<input
				id="dmgNonLethal"
				class="input variant-form-material col-start-8 text-center arrow-hide"
				title="Non-Lethal Damage"
				type="number"
				min="-0"
				max="300"
				bind:value={$currentHealth.dmgNonLethal}
			/>
			<input
				id="dmgReduction"
				class="input variant-form-material col-start-9 text-center arrow-hide"
				title="Damage Reduction"
				type="number"
				min="-0"
				max="300"
				bind:value={$currentMisc.dmgReduction}
			/>
			<input
				id="maxHP"
				class="input variant-form-material col-start-10 text-center arrow-hide"
				title="Maximum Hit Points"
				type="number"
				min="-0"
				max="300"
				bind:value={$currentHealth.maxHP}
			/>
		</div>
		<hr />
		<!-- Armor Class -->
		<div
			class="grid grid-cols-10 grid-rows-2 gap-y-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"
		>
			<span class="col-start-2 row-start-2"><strong>Total</strong></span>
			<span class="col-start-3 row-start-2">Base</span>
			<span class="col-start-4 row-start-1">Armor</span>
			<span class="col-start-4 row-start-2">Bonus</span>
			<span class="col-start-5 row-start-1">Shield</span>
			<span class="col-start-5 row-start-2">Bonus</span>
			<span class="col-start-6 row-start-1">DEX</span>
			<span class="col-start-6 row-start-2">Modifier</span>
			<span class="col-start-7 row-start-1">Size</span>
			<span class="col-start-7 row-start-2">Modifier</span>
			<span class="col-start-8 row-start-1">Natural</span>
			<span class="col-start-8 row-start-2">Armor</span>
			<span class="col-start-9 row-start-1">Deflection</span>
			<span class="col-start-9 row-start-2">Modifier</span>
			<span class="col-start-10 row-start-1">Misc</span>
			<span class="col-start-10 row-start-2">Modifier</span>
		</div>
		<div class="grid grid-cols-10 gap-2">
			<button
				id="ac"
				title="Armor Class"
				class="button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm"
			>
				AC
			</button>
			<div
				id="acTotal"
				title="Armor Class Total"
				class="bg-slate-500/40 p-2 text-center rounded-full"
			>
				<p>{$currentACTotals.acTotal}</p>
			</div>
			<div id="acBase" title="AC Base" class="bg-slate-500/40 p-2 text-center rounded-sm">
				<p>{$currentMisc.acBase}</p>
			</div>
			<div id="armorBonus" title="Armor Bonus" class="bg-slate-500/40 p-2 text-center rounded-sm">
				<p>{$currentMisc.armorBonus}</p>
			</div>
			<div id="shieldBonus" title="Shield Bonus" class="bg-slate-500/40 p-2 text-center rounded-sm">
				<p>{$currentMisc.shieldBonus}</p>
			</div>
			<div
				id="acAbilMod"
				title="Dexterity Modifier"
				class="bg-slate-500/40 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.dex.temp}
			>
				<p>{$currentAbilityModifiers.activeDexMod}</p>
			</div>
			<div id="sizeMod" title="Size Modifier" class="bg-slate-500/40 p-2 text-center rounded-sm">
				<p>{$currentAttributes.sizeMod}</p>
			</div>
			<input
				id="naturalArmor"
				title="Natural Armor"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentMisc.naturalArmor}
			/>
			<input
				id="deflectMod"
				title="Deflection Modifier"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentMisc.deflectMod}
			/>
			<input
				id="miscMod"
				title="Misc Modifier"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentMisc.acMiscMod}
			/>
		</div>
	</div>
</section>
