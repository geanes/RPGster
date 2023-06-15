// import { writable } from 'svelte/store';
// Safe Store
import { writable } from '@svelte-kits/store';
import type {
	CharacterMetadata,
	CharacterAvatar,
	CharacterAttributes,
	CharacterHealth,
	CharacterAbilities,
	CharacterSaves,
	CharacterAttack,
	CharacterMisc,
	CharacterSkills,
	CharacterFeats,
	CharacterGear,
	CharacterSpells
} from '$lib/types/interfaceCharacter';

// Modify
export const modify = writable(false);

// Metadata
export const currentMetadata = writable(<CharacterMetadata>{
	campaign: 'New Campaign'
});
export const currentState = writable({
	carryWeight: 0,
	skillPoints: 0,
	featTokens: 0,
	money: 0
});
// Avatar
export const currentAvatar = writable(<CharacterAvatar>{
	link: '',
	eyes: '#000000',
	hair: '#000000',
	skin: '#FDA23A',
	bgColor: '#000000',
	customSeed: ''
});
// Attributes
export const currentAttributes = writable(<CharacterAttributes>{
	name: '',
	race: '',
	class: '',
	level: 1,
	xp: 0,
	alignment: '',
	deity: '',
	size: '',
	sizeMod: 0,
	age: 20,
	gender: '',
	height: '',
	weight: ''
});
// Health
export const currentHealth = writable(<CharacterHealth>{
	maxHP: 0,
	currentHP: 0,
	dmgBuff: 0,
	dmgNonLethal: 0
});
// Abilities
export const currentAbilities = writable(<CharacterAbilities>{
	str: {
		score: 10,
		mod: 0,
		scoreTemp: 0,
		modTemp: 0,
		temp: false
	},
	dex: {
		score: 10,
		mod: 0,
		scoreTemp: 0,
		modTemp: 0,
		temp: false
	},
	con: {
		score: 10,
		mod: 0,
		scoreTemp: 0,
		modTemp: 0,
		temp: false
	},
	int: {
		score: 10,
		mod: 0,
		scoreTemp: 0,
		modTemp: 0,
		temp: false
	},
	wis: {
		score: 10,
		mod: 0,
		scoreTemp: 0,
		modTemp: 0,
		temp: false
	},
	cha: {
		score: 10,
		mod: 0,
		scoreTemp: 0,
		modTemp: 0,
		temp: false
	}
});
// Saves
export const currentSaves = writable(<CharacterSaves>{
	fortTotal: null,
	fortBase: 0,
	fortMagicMod: 0,
	fortMiscMod: 0,
	fortTempMod: 0,
	fortTemp: false,
	reflexTotal: null,
	reflexBase: 0,
	reflexMagicMod: 0,
	reflexMiscMod: 0,
	reflexTempMod: 0,
	reflexTemp: false,
	willTotal: null,
	willBase: 0,
	willMagicMod: 0,
	willMiscMod: 0,
	willTempMod: 0,
	willTemp: false
});
// Attack
export const currentAttack = writable(<CharacterAttack>{
	bab: 0,
	spellResist: 0,
	grappleTotal: null,
	grappleMiscMod: 0
});
// Misc
export const currentMisc = writable(<CharacterMisc>{
	speed: 30,
	speedTempValue: 30,
	speedTemp: false,
	initTotal: null,
	initMiscMod: 0,
	acTotal: null,
	acBase: 10,
	armorBonus: 0,
	shieldBonus: 0,
	naturalArmor: 0,
	deflectMod: 0,
	acMiscMod: 0,
	touch: 0,
	flatFooted: 0,
	maxHP: 0,
	dmgReduction: 0
});
// Skills
export const currentSkills = writable(<CharacterSkills>{
	skills: [],
	userSkills: []
});
// Feats
export const currentFeats = writable(<CharacterFeats>{
	feats: [],
	userFeats: []
});
// Gear Armor Weapons
export const currentGear = writable(<CharacterGear>{
	armor: [],
	userArmor: [],
	weapons: [],
	userWeapons: [],
	equipment: [],
	userEquipment: []
});
// Spells
export const currentSpells = writable(<CharacterSpells>{
	spells: [],
	userSpells: []
});
