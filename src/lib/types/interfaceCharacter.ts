// Metadata
export interface CharacterMetadata {
	campaign: string;
	naddr?: string;
}
// Avatar
export interface CharacterAvatar {
	link: string;
	eyes: string;
	hair: string;
	skin: string;
	bgColor: string;
	customSeed: string;
}
// Attributes
export interface CharacterAttributes {
	name: string;
	race: string;
	class: string;
	level: number;
	xp: number;
	alignment: string;
	deity: string;
	size: string;
	sizeMod: 8 | 4 | 2 | 1 | 0 | -1 | -2 | -4 | -8;
	age: number;
	gender: string;
	height: string;
	weight: string;
}
// Health
export interface CharacterHealth {
	maxHP: number;
	currentHP: number;
	dmgBuff: number;
	dmgNonLethal: number;
}
// Abilities
export interface Ability {
	[key: string]: number | boolean | (number & boolean);
	score: number;
	mod: number;
	scoreTemp: number;
	modTemp: number;
	temp: boolean;
}
export interface CharacterAbilities {
	[key: string]: Ability;
	str: Ability;
	dex: Ability;
	con: Ability;
	int: Ability;
	wis: Ability;
	cha: Ability;
}
// Saves
export interface CharacterSaves {
	fortTotal: number | null;
	fortBase: number;
	fortMagicMod: number;
	fortMiscMod: number;
	fortTempMod: number;
	fortTemp: boolean;
	reflexTotal: number | null;
	reflexBase: number;
	reflexMagicMod: number;
	reflexMiscMod: number;
	reflexTempMod: number;
	reflexTemp: boolean;
	willTotal: number | null;
	willBase: number;
	willMagicMod: number;
	willMiscMod: number;
	willTempMod: number;
	willTemp: boolean;
}
// Attack
export interface CharacterAttack {
	bab: number;
	spellResist: number;
	grappleTotal: number | null;
	grappleMiscMod: number;
}
// Misc
export interface CharacterMisc {
	speed: number;
	speedTempValue: number;
	speedTemp: boolean;
	initTotal: number | null;
	initMiscMod: number;
	acTotal: number | null;
	acBase: number;
	armorBonus: number;
	shieldBonus: number;
	naturalArmor: number;
	deflectMod: number;
	acMiscMod: number;
	touch: number;
	flatFooted: number;
	maxHP: number;
	dmgReduction: number;
}
// Skills
export interface Skill {
	id: string;
	name: string;
	tag?: string | undefined;
	category?: string;
	ability?: string;
	trained?: boolean;
	magic?: boolean;
	psi?: boolean;
	synergy?: string[];
	ref?: string;
	ranks: number;
	miscMod: number;
}
export interface CharacterSkills {
	skills: Skill[];
	userSkills: Skill[];
}
// Feats
export interface Feat {
	[key: string]: string | undefined;
	id: string;
	name?: string;
	longText?: string;
	shortText?: string;
	prerequisites?: string;
	type?: string;
	ref?: string;
}
export interface CharacterFeats {
	feats: string[];
	userFeats: Feat[];
}
// Armor
// export interface Armor {
// 	[key: string]: string | number | undefined;
// 	id: string;
// 	name: string;
// 	price: string;
// 	weight: number;
// 	size: string;
// 	armorBonus: number;
// 	checkPenalty: number;
// 	maxDex: number;
// 	arcaneSpellFailure: number;
// 	speed_20: number;
// 	speed_30: number;
// 	type: string;
// }
// export interface CharacterArmor {
// 	armor: Armor[];
// 	userArmor: Armor[];
// }
// // Weapons
// export interface Weapon {
// 	[key: string]: string | number | undefined;
// 	id: string;
// 	name: string;
// 	price: string;
// 	weight: number;
// }
// export interface CharacterWeapons {
// 	weapons: Weapon[];
// 	userWeapons: Weapon[];
// }
// // Gear
// export interface Equipment {
// 	[key: string]: string | number | undefined;
// 	id: string;
// 	name: string;
// 	price: string;
// 	weight: number;
// }
// export interface CharacterEquipment {
// 	equipment: Equipment[];
// 	userEquipment: Equipment[];
// }
export interface CharacterGear {
	armor: any[];
	userArmor: any[];
	weapons: any[];
	userWeapons: any[];
	equipment: any[];
	userEquipment: any[];
}
// Spells
export interface CharacterSpells {
	spells: any[];
	userSpells: any[];
}
