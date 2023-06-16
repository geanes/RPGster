const system = 'dnd3.5e';
const dataPath = `/systems/${system}/data`;

export const load = async ({ fetch }) => {
	const levels = async () => {
		const res = await fetch(`${dataPath}/levels.json`);
		return await res.json();
	};
	const races = async () => {
		const res = await fetch(`${dataPath}/races.json`);
		return await res.json();
	};
	const alignments = async () => {
		const res = await fetch(`${dataPath}/alignments.json`);
		return await res.json();
	};
	const skills = async () => {
		const res = await fetch(`${dataPath}/skills.json`);
		return await res.json();
	};
	const classes = async () => {
		const res = await fetch(`${dataPath}/classes.json`);
		return await res.json();
	};
	const feats = async () => {
		const res = await fetch(`${dataPath}/feats.json`);
		return await res.json();
	};
	const protection = async () => {
		const res = await fetch(`${dataPath}/protection.json`);
		return await res.json();
	};
	const weapons = async () => {
		const res = await fetch(`${dataPath}/weapons.json`);
		return await res.json();
	};
	const equipment = async () => {
		const res = await fetch(`${dataPath}/equipment.json`);
		return await res.json();
	};
	const spells = async () => {
		const res = await fetch(`${dataPath}/spells.json`);
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
