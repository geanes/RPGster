const system = 'dnd3.5e';

export const load = async ({ fetch }) => {
	const levels = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/levels.json`);
		return await res.json();
	};
	const races = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/races.json`);
		return await res.json();
	};
	const alignments = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/alignments.json`);
		return await res.json();
	};
	const skills = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/skills.json`);
		return await res.json();
	};
	const classes = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/classes.json`);
		return await res.json();
	};
	const feats = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/feats.json`);
		return await res.json();
	};
	const protection = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/protection.json`);
		return await res.json();
	};
	const weapons = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/weapons.json`);
		return await res.json();
	};
	const equipment = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/equipment.json`);
		return await res.json();
	};
	const spells = async () => {
		const res = await fetch(`src/lib/systems/${system}/data/spells.json`);
		return await res.json();
	};

	return {
		levels: levels(),
		races: races(),
		alignments: alignments(),
		skills: skills(),
		classes: classes(),
		feats: feats(),
		protection: protection(),
		weapons: weapons(),
		equipment: equipment(),
		spells: spells()
	};
};
