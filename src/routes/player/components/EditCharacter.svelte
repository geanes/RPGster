<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import CharAbilities from './CharAbilities.svelte';
	import CharAttack from './CharAttack.svelte';
	import CharMisc from './CharMisc.svelte';
	import CharSaving from './CharSaving.svelte';
	import CharSkills from './CharSkills.svelte';
	import CharFeats from './CharFeats.svelte';
	import CharArmor from './CharArmor.svelte';
	import CharWeapons from './CharWeapons.svelte';
	import CharEquipment from './CharEquipment.svelte';
	import CharSpells from './CharSpells.svelte';

	export let data;

	const { skills, classes, feats, protection, weapons, equipment, spells } = data;
	const { armor, shield, accessory } = protection;
	const armorList = [...armor, ...shield, ...accessory];
	const { melee, ranged } = weapons;
	const weaponList = [...melee, ...ranged];
	const { general } = equipment.gear;
	const gearList = [...general];

	let tabSet: number = 0;
</script>

<section>
	<TabGroup justify="justify-center">
		<Tab bind:group={tabSet} name="tab1" value={0}>Abilities</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Skills & Feats</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Armor & Weapons</Tab>
		<Tab bind:group={tabSet} name="tab4" value={3}>Gear</Tab>
		<Tab bind:group={tabSet} name="tab5" value={4}>Spells</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<div class="mx-auto p-4 grid grid-flow-col-dense grid-cols-16 grid-rows-3 gap-4 mb-12">
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
</section>
