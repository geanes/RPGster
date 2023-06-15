<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { triggerPlayerDrawer } from '$lib/utils/singletonDrawer';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import CharAvatar from './components/CharAvatar.svelte';
	import CharAbilities from './components/CharAbilities.svelte';
	import CharAttack from './components/CharAttack.svelte';
	import CharAttributes from './components/CharAttributes.svelte';
	import CharMisc from './components/CharMisc.svelte';
	import CharSaving from './components/CharSaving.svelte';
	import CharSkills from './components/CharSkills.svelte';
	import CharFeats from './components/CharFeats.svelte';
	import CharArmor from './components/CharArmor.svelte';
	import CharWeapons from './components/CharWeapons.svelte';
	import CharEquipment from './components/CharEquipment.svelte';
	import CharSpells from './components/CharSpells.svelte';
	import { currentAttributes, currentMetadata, currentState } from './storeCharacter';
	import Layout from '../+layout.svelte';

	export let data;
	const {
		levels,
		races,
		alignments,
		skills,
		classes,
		feats,
		protection,
		weapons,
		equipment,
		spells
	} = data;
	const { armor, shield, accessory } = protection;
	const armorList = [...armor, ...shield, ...accessory];
	const { melee, ranged } = weapons;
	const weaponList = [...melee, ...ranged];
	const { general } = equipment.gear;
	const gearList = [...general];

	let tabSet: number = 0;
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	padding="p-1"
	background="variant-glass-surface/0"
	shadow="shadow-xs"
>
	<svelte:fragment slot="lead">
		<span class="pl-2 text-slate-50/50 align-middle">
			<button class="btn-icon-xl hover:text-slate-100" on:click={triggerPlayerDrawer}>
				<iconify-icon icon="mdi:hamburger-menu" />
			</button>
		</span>
	</svelte:fragment>
	<!-- <span class="ml-20 text-xl font-extralight text-surface-100/60">{$currentMetadata.campaign}</span> -->
	<svelte:fragment slot="headline">
		<div class="p-0 ml-20 mr-32">
			<ProgressBar
				label="XP to next level"
				meter="bg-primary-500/50"
				value={$currentAttributes.xp}
				min={levels[$currentAttributes.level - 1].min}
				max={levels[$currentAttributes.level - 1].max}
			/>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="p-0 ml-20 mr-32">
			<label class="space-x-0">
				<input
					type="number"
					class="input arrow-hide variant-ringed text-end text-orange-400/70 w-24 border-0 font-bold"
					bind:value={$currentState.money}
				/>
				<span class="inline-block text-orange-400/70 p-[8px] pl-0 rounded-full font-bold">GP</span>
			</label>
		</div>
	</svelte:fragment>
</AppBar>

<CharAvatar />

<div class="mx-auto p-4 grid grid-cols-10 gap-2">
	<div class="col-span-10">
		<CharAttributes {levels} {races} {classes} {alignments} />
	</div>
</div>

<TabGroup justify="justify-center">
	<Tab bind:group={tabSet} name="tab1" value={0}>Main</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Skills & Feats</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>Armor & Weapons</Tab>
	<Tab bind:group={tabSet} name="tab4" value={3}>Gear</Tab>
	<Tab bind:group={tabSet} name="tab5" value={4}>Spells</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<!-- (tab panel 1 contents) -->
			<div class="mx-auto p-4 grid grid-flow-col-dense grid-cols-16 grid-rows-3 gap-4 max-w-max">
				<div class="col-span-10">
					<CharMisc />
				</div>
				<div class="col-span-5 row-span-2 row-start-1">
					<CharAbilities />
				</div>
				<div class="col-span-8">
					<CharSaving />
				</div>
				<div class="col-span-7">
					<CharAttack />
				</div>
			</div>
		{:else if tabSet === 1}
			<div class="mx-auto p-4 grid grid-cols-2 gap-4">
				<div class="col-span-1">
					<CharSkills {skills} {classes} />
				</div>
				<div class="col-span-1">
					<CharFeats {feats} />
				</div>
			</div>
		{:else if tabSet === 2}
			<div class="mx-auto p-4 grid grid-cols-2 gap-4">
				<div class="col-span-1">
					<CharArmor armor={armorList} />
				</div>
				<div class="col-span-1">
					<CharWeapons weapons={weaponList} />
				</div>
			</div>
		{:else if tabSet === 3}
			<div class="mx-auto p-4 grid grid-cols-2 gap-4">
				<div class="col-span-1">
					<CharEquipment gear={gearList} />
				</div>
			</div>
		{:else if tabSet === 4}
			<div class="mx-auto p-4 grid grid-cols-2 gap-4">
				<div class="col-span-2">
					<CharSpells {spells} />
				</div>
			</div>
		{/if}
	</svelte:fragment>
</TabGroup>
