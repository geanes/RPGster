<script lang="ts">
	import { toTitleCase } from '$lib/utils/utils';
	// import racedata from '$lib/systems/dnd3.5e/data/races.json';
	// import classdata from '$lib/systems/dnd3.5e/data/classes.json';
	// import alignmentdata from '$lib/systems/dnd3.5e/data/alignments.json';
	// import levels from '$lib/systems/dnd3.5e/data/levels.json';
	import {
		currentAttack,
		currentAttributes,
		currentHealth,
		currentSaves,
		modify
	} from '../storeCharacter';

	export let levels: any;
	export let races: any;
	export let classes: any;
	export let alignments: any;
	export let condensed: boolean = false;

	const findLevel = (xp: number): number => {
		let level = 0;
		for (let i = 0; i < levels.length; i++) {
			if (xp >= levels[i].min && xp <= levels[i].max) {
				level = i + 1;
				break;
			}
		}
		return level;
	};

	// const races = JSON.parse(JSON.stringify(racedata));
	// const classes = JSON.parse(JSON.stringify(classdata));
	// const alignments = JSON.parse(JSON.stringify(alignmentdata));
	const sizeList = [
		'Fine',
		'Diminutive',
		'Tiny',
		'Small',
		'Medium',
		'Large',
		'Huge',
		'Gargantuan',
		'Colossal'
	];
	const sizeModList = [8, 4, 2, 1, 0, -1, -2, -4, -8];

	const racesList = Object.keys(races).map((key, index) => {
		const race = races[key];
		return { race: race, index: index, id: key };
	});
	const classesList = Object.keys(classes).map((key, index) => {
		const chClass = classes[key];
		return { chClass: chClass, index: index, id: key };
	});
	const alignmentsList = Object.keys(alignments).map((key, index) => {
		const alignment = alignments[key];
		return { alignment: alignment, index: index, id: key };
	});
	const getBasesFromClass = (level: number, charClass: string) => {
		const llevel = `l${level}`;
		$currentAttack.bab = classes[charClass]?.levels[llevel]?.BAB ?? 0;
		$currentSaves.fortBase = classes[charClass]?.levels[llevel]?.fort ?? 0;
		$currentSaves.reflexBase = classes[charClass]?.levels[llevel]?.ref ?? 0;
		$currentSaves.willBase = classes[charClass]?.levels[llevel]?.will ?? 0;
	};
	$: $currentAttributes.level = findLevel($currentAttributes.xp);
	$: {
		$currentHealth.currentHP = $currentHealth.maxHP + $currentHealth.dmgBuff;
	}
	$: {
		getBasesFromClass($currentAttributes.level, $currentAttributes.class);
	}
</script>

<section
	class="card mx-auto mt-2 space-y-0 variant-glass-surface"
	class:variant-ringed-error={$modify}
>
	<!-- <h2 class="p-4 text-slate-50/80">Attributes</h2> -->
	<!-- <button
		class="btn-icon btn-icon-sm variant-filled-surface absolute -top-4 -left-1"
		class:variant-filled-error={$modify}
		on:click={() => ($modify = !$modify)}
	>
		<iconify-icon icon="uil:edit" />
	</button> -->
	<div class="p-4 space-y-2">
		<div class="grid grid-cols-10 gap-2">
			{#if !condensed}
				<label class="label col-span-2">
					<span class="text-xs text-slate-50/50">Character Name</span>
					<input
						id="cName"
						class="input variant-form-material"
						type="text"
						placeholder="Character Name"
						bind:value={$currentAttributes.name}
					/>
				</label>
				<label class="label col-span-2">
					<span class="text-xs text-slate-50/50">Race</span>
					<select
						id="cRace"
						class="select variant-form-material"
						bind:value={$currentAttributes.race}
					>
						<option value="" disabled selected>Race</option>
						{#each racesList as item}
							<option value={item.id}>{item.race.name}</option>
						{/each}
					</select>
				</label>
				<label class="label col-span-2">
					<span class="text-xs text-slate-50/50">Class</span>
					<select
						id="cClass"
						class="select variant-form-material"
						bind:value={$currentAttributes.class}
					>
						<option value="" disabled selected>Class</option>
						{#each classesList as item}
							<option value={item.id}>{item.chClass.name}</option>
						{/each}
					</select>
				</label>
			{:else}
				<div class="col-span-6 flex gap-4 items-end pb-4 text-slate-200/90">
					<span
						class="text-4xl font-light tracking-tight font-sans decoration-0 underline underline-offset-8"
					>
						{$currentAttributes.name}
					</span>
					<span class="text-2xl font-thin tracking-tight">
						{toTitleCase($currentAttributes.race)}
					</span>
					<span class="text-2xl font-thin tracking-tight">
						{toTitleCase($currentAttributes.class)}
					</span>
				</div>
			{/if}

			<label class="label col-start-7">
				<span class="text-xs text-slate-50/50">XP</span>
				<input
					id="cLevel"
					class="input rounded-full text-center arrow-hide"
					title="Level"
					type="number"
					min="0"
					max="200000"
					bind:value={$currentAttributes.xp}
				/>
			</label>
			<label class="label">
				<span class="text-xs text-slate-50/50">Level</span>
				<input
					id="cLevel"
					class="input rounded-full font-bold text-center arrow-hide"
					title="Level"
					type="number"
					min="1"
					max="20"
					bind:value={$currentAttributes.level}
				/>
			</label>

			<button
				id="hp"
				title="Hit Points"
				class="button bg-slate-900/40 p-2 text-center rounded-full"
				on:click={() => ($currentHealth.dmgBuff = 0)}
			>
				<span>{$currentHealth.currentHP} / {$currentHealth.maxHP}</span>
			</button>
			<label class="label col-span-1">
				<span class="text-xs text-slate-50/50">Damage</span>
				<input
					id="dmgBuff"
					class="input variant-form-material text-center arrow-hide"
					title="Damage or Buff"
					type="number"
					min="-20"
					max="20"
					bind:value={$currentHealth.dmgBuff}
				/>
			</label>
		</div>

		{#if !condensed}
			<div class="grid grid-cols-10 gap-2">
				<label class="label col-span-2">
					<span class="text-xs text-slate-50/50">Alignment</span>
					<select
						id="cAlignment"
						class="select variant-form-material"
						bind:value={$currentAttributes.alignment}
					>
						<option value="" disabled selected>Alignment</option>
						{#each alignmentsList as item}
							<option value={item.id}>{item.alignment.name}</option>
						{/each}
					</select>
				</label>
				<label class="label col-span-2">
					<span class="text-xs text-slate-50/50">Deity</span>
					<input
						id="cDeity"
						class="input variant-form-material"
						type="text"
						placeholder="Deity"
						bind:value={$currentAttributes.deity}
					/>
				</label>
				<label class="label col-span-2">
					<span class="text-xs text-slate-50/50">Size</span>
					<select
						id="cSize"
						class="select variant-form-material"
						bind:value={$currentAttributes.sizeMod}
					>
						<!-- <option value="" disabled selected>Size</option> -->
						{#each sizeList as item, index}
							<option value={sizeModList[index]}>{item}</option>
						{/each}
					</select>
				</label>
				<label class="label col-span-1">
					<span class="text-xs text-slate-50/50">Height</span>
					<input
						id="cHeight"
						class="input variant-form-material"
						type="text"
						placeholder="Height"
						bind:value={$currentAttributes.height}
					/>
				</label>
				<label class="label col-span-1">
					<span class="text-xs text-slate-50/50">Weight</span>
					<input
						id="cWeight"
						class="input variant-form-material"
						type="text"
						placeholder="Weight"
						bind:value={$currentAttributes.weight}
					/>
				</label>
				<label class="label">
					<span class="text-xs text-slate-50/50">Age</span>
					<input
						id="cAge"
						class="input text-center arrow-hide"
						title="Age"
						type="number"
						min="0"
						max="1000"
						bind:value={$currentAttributes.age}
					/>
				</label>
				<label class="label col-span-1">
					<span class="text-xs text-slate-50/50">Gender</span>
					<input
						id="cGender"
						class="input variant-form-material"
						type="text"
						placeholder="Gender"
						bind:value={$currentAttributes.gender}
					/>
				</label>
			</div>
		{/if}
	</div>
</section>
