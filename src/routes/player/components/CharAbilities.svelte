<script lang="ts">
	import { currentAbilities, modify } from '$lib/stores/storeCharacter';
</script>

<section class="card variant-glass-surface min-w-max" class:variant-ringed-error={$modify}>
	<h2 class="pb-0 p-4 text-slate-50/80">Abilities</h2>
	<div class="pt-1 p-4 space-y-2">
		<div
			class="grid grid-cols-5 grid-rows-2 gap-y-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"
		>
			<span class="col-start-4 row-start-1">Temp</span>
			<span class="col-start-5 row-start-1">Temp</span>
			<span class="col-start-2 row-start-2">Score</span>
			<span class="col-start-3 row-start-2">Modifier</span>
			<span class="col-start-4 row-start-2">Score</span>
			<span class="col-start-5 row-start-2">Modifier</span>
		</div>

		<!-- Strength -->
		<div class="grid grid-cols-5 gap-2">
			<button
				id="str"
				title="Strength"
				class="button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.str.temp}
				on:click={() => ($currentAbilities.str.temp = !$currentAbilities.str.temp)}
			>
				STR
			</button>
			<input
				id="strScore"
				title="Strength Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.str.score}
				disabled={$currentAbilities.str.temp}
			/>
			<input
				id="strMod"
				class="input variant-form-material text-center arrow-hide"
				title="Strength Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.str.mod}
				disabled={$currentAbilities.str.temp}
			/>
			<input
				id="strScoreTmp"
				title="Temporary Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.str.scoreTemp}
				disabled={!$currentAbilities.str.temp}
			/>
			<input
				id="strModTmp"
				class="input variant-form-material text-center arrow-hide"
				title="Temporary Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.str.modTemp}
				disabled={!$currentAbilities.str.temp}
			/>
		</div>
		<!-- Dexterity -->
		<div class="grid grid-cols-5 gap-2">
			<button
				id="dex"
				title="Dexterity"
				class="button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.dex.temp}
				on:click={() => ($currentAbilities.dex.temp = !$currentAbilities.dex.temp)}
			>
				DEX
			</button>
			<input
				id="dexScore"
				title="Dexterity Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.dex.score}
				disabled={$currentAbilities.dex.temp}
			/>
			<input
				id="dexMod"
				class="input variant-form-material text-center arrow-hide"
				title="Dexterity Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.dex.mod}
				disabled={$currentAbilities.dex.temp}
			/>
			<input
				id="dexScoreTmp"
				title="Temporary Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.dex.scoreTemp}
				disabled={!$currentAbilities.dex.temp}
			/>
			<input
				id="dexModTmp"
				class="input variant-form-material text-center arrow-hide"
				title="Temporary Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.dex.modTemp}
				disabled={!$currentAbilities.dex.temp}
			/>
		</div>
		<!-- Constitution -->
		<div class="grid grid-cols-5 gap-2">
			<button
				id="con"
				title="Constitution"
				class="button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.con.temp}
				on:click={() => ($currentAbilities.con.temp = !$currentAbilities.con.temp)}
			>
				CON
			</button>
			<input
				id="conScore"
				title="Constitution Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.con.score}
				disabled={$currentAbilities.con.temp}
			/>
			<input
				id="conMod"
				class="input variant-form-material text-center arrow-hide"
				title="Constitution Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.con.mod}
				disabled={$currentAbilities.con.temp}
			/>
			<input
				id="conScoreTmp"
				title="Temporary Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.con.scoreTemp}
				disabled={!$currentAbilities.con.temp}
			/>
			<input
				id="conModTmp"
				class="input variant-form-material text-center arrow-hide"
				title="Temporary Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.con.modTemp}
				disabled={!$currentAbilities.con.temp}
			/>
		</div>
		<!-- Intelligence -->
		<div class="grid grid-cols-5 gap-2">
			<button
				id="int"
				title="Intelligence"
				class="button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.int.temp}
				on:click={() => ($currentAbilities.int.temp = !$currentAbilities.int.temp)}
			>
				INT
			</button>
			<input
				id="intScore"
				title="Intelligence Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.int.score}
				disabled={$currentAbilities.int.temp}
			/>
			<input
				id="intMod"
				class="input variant-form-material text-center arrow-hide"
				title="Intelligence Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.int.mod}
				disabled={$currentAbilities.int.temp}
			/>
			<input
				id="intScoreTmp"
				title="Temporary Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.int.scoreTemp}
				disabled={!$currentAbilities.int.temp}
			/>
			<input
				id="intModTmp"
				class="input variant-form-material text-center arrow-hide"
				title="Temporary Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.int.modTemp}
				disabled={!$currentAbilities.int.temp}
			/>
		</div>
		<!-- Wisdom -->
		<div class="grid grid-cols-5 gap-2">
			<button
				id="wis"
				title="Wisdom"
				class="button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.wis.temp}
				on:click={() => ($currentAbilities.wis.temp = !$currentAbilities.wis.temp)}
			>
				WIS
			</button>
			<input
				id="wisScore"
				title="Wisdom Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.wis.score}
				disabled={$currentAbilities.wis.temp}
			/>
			<input
				id="wisMod"
				class="input variant-form-material text-center arrow-hide"
				title="Wisdom Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.wis.mod}
				disabled={$currentAbilities.wis.temp}
			/>
			<input
				id="wisScoreTmp"
				title="Temporary Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.wis.scoreTemp}
				disabled={!$currentAbilities.wis.temp}
			/>
			<input
				id="wisModTmp"
				class="input variant-form-material text-center arrow-hide"
				title="Temporary Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.wis.modTemp}
				disabled={!$currentAbilities.wis.temp}
			/>
		</div>
		<!-- Charisma -->
		<div class="grid grid-cols-5 gap-2">
			<button
				id="cha"
				title="Charisma"
				class="button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm"
				class:variant-outline-warning={$currentAbilities.cha.temp}
				on:click={() => ($currentAbilities.cha.temp = !$currentAbilities.cha.temp)}
			>
				CHA
			</button>
			<input
				id="chaScore"
				title="Charisma Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.cha.score}
				disabled={$currentAbilities.cha.temp}
			/>
			<input
				id="chaMod"
				class="input variant-form-material text-center arrow-hide"
				title="Charisma Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.cha.mod}
				disabled={$currentAbilities.cha.temp}
			/>
			<input
				id="chaScoreTmp"
				title="Temporary Score"
				class="input variant-form-material text-center arrow-hide"
				type="number"
				min="0"
				max="20"
				bind:value={$currentAbilities.cha.scoreTemp}
				disabled={!$currentAbilities.cha.temp}
			/>
			<input
				id="chaModTmp"
				class="input variant-form-material text-center arrow-hide"
				title="Temporary Modifier"
				type="number"
				min="-20"
				max="20"
				bind:value={$currentAbilities.cha.modTemp}
				disabled={!$currentAbilities.cha.temp}
			/>
		</div>
	</div>
</section>
