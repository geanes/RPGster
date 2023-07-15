import { writable, readable, derived } from '@svelte-kits/store';
import { toTitleCase } from '$lib/utils/utils';
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
	campaign: 'New Campaign',
	naddr: '',
	uid: ''
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
	fortBase: 0,
	fortMagicMod: 0,
	fortMiscMod: 0,
	fortTempMod: 0,
	fortTemp: false,
	reflexBase: 0,
	reflexMagicMod: 0,
	reflexMiscMod: 0,
	reflexTempMod: 0,
	reflexTemp: false,
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
	grappleMiscMod: 0
});
// Misc
export const currentMisc = writable(<CharacterMisc>{
	speed: 30,
	speedTempValue: 30,
	speedTemp: false,
	initTotal: null,
	initMiscMod: 0,
	acBase: 10,
	armorBonus: 0,
	shieldBonus: 0,
	naturalArmor: 0,
	deflectMod: 0,
	acMiscMod: 0,
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

// Default (empty) Character
export const defaultCharacter = readable(
	'{"metadata":{"campaign":"New Campaign", "naddr":""},"state":{"carryWeight":0,"skillPoints":0,"featTokens":0,"money":0},"avatar":{"link":"","eyes":"#000000","hair":"#000000","skin":"#FDA23A","bgColor":"#000000","customSeed":""},"attributes":{"name":"","race":"","class":"","level":1,"xp":0,"alignment":"","deity":"","size":"","sizeMod":0,"age":20,"gender":"","height":"","weight":""},"health":{"maxHP":0,"currentHP":0,"dmgBuff":0,"dmgNonLethal":0},"abilities":{"str":{"score":10,"mod":0,"scoreTemp":0,"modTemp":0,"temp":false},"dex":{"score":10,"mod":0,"scoreTemp":0,"modTemp":0,"temp":false},"con":{"score":10,"mod":0,"scoreTemp":0,"modTemp":0,"temp":false},"int":{"score":10,"mod":0,"scoreTemp":0,"modTemp":0,"temp":false},"wis":{"score":10,"mod":0,"scoreTemp":0,"modTemp":0,"temp":false},"cha":{"score":10,"mod":0,"scoreTemp":0,"modTemp":0,"temp":false}},"saves":{"fortTotal":0,"fortBase":0,"fortMagicMod":0,"fortMiscMod":0,"fortTempMod":0,"fortTemp":false,"reflexTotal":0,"reflexBase":0,"reflexMagicMod":0,"reflexMiscMod":0,"reflexTempMod":0,"reflexTemp":false,"willTotal":0,"willBase":0,"willMagicMod":0,"willMiscMod":0,"willTempMod":0,"willTemp":false},"attack":{"bab":0,"spellResist":0,"grappleTotal":0,"grappleMiscMod":0},"misc":{"speed":30,"speedTempValue":30,"speedTemp":false,"initTotal":null,"initMiscMod":0,"acTotal":10,"acBase":10,"armorBonus":0,"shieldBonus":0,"naturalArmor":0,"deflectMod":0,"acMiscMod":0,"touch":10,"flatFooted":10,"maxHP":0,"dmgReduction":0},"skills":{"skills":[{"id":"appraise","name":"Appraise","ability":"int","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/appraise.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"autohypnosis","name":"Autohypnosis","ability":"wis","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/autohypnosis.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"balance","name":"Balance","ability":"dex","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/balance.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"bluff","name":"Bluff","ability":"cha","trained":false,"magic":false,"psi":false,"synergy":["diplomacy","disguise","intimidate","sleight_of_hand"],"ref":"https://www.d20srd.org/srd/skills/bluff.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"climb","name":"Climb","ability":"str","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/climb.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"concentration","name":"Concentration","ability":"con","trained":false,"magic":true,"psi":true,"synergy":["autohypnosis"],"ref":"https://www.d20srd.org/srd/skills/concentration.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"control_shape","name":"Control Shape","ability":"wis","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/controlShape.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"decipher_script","name":"Decipher Script","ability":"int","trained":true,"magic":false,"psi":false,"synergy":["use_magic_device"],"ref":"https://www.d20srd.org/srd/skills/decipherScript.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"diplomacy","name":"Diplomacy","ability":"cha","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/diplomacy.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"disable_device","name":"Disable Device","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/disableDevice.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"disguise","name":"Disguise","ability":"cha","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/disguise.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"escape_artist","name":"Escape Artist","ability":"dex","trained":false,"magic":false,"psi":false,"synergy":["use_rope"],"ref":"https://www.d20srd.org/srd/skills/escapeArtist.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"forgery","name":"Forgery","ability":"int","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/forgery.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"gather_information","name":"Gather Information","ability":"cha","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/gatherInformation.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"handle_animal","name":"Handle Animal","ability":"cha","trained":true,"magic":false,"psi":false,"synergy":["ride"],"ref":"https://www.d20srd.org/srd/skills/handleAnimal.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"heal","name":"Heal","ability":"wis","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/heal.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"hide","name":"Hide","ability":"dex","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/hide.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"intimidate","name":"Intimidate","ability":"cha","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/intimidate.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"jump","name":"Jump","ability":"str","trained":false,"magic":false,"psi":false,"synergy":["tumble"],"ref":"https://www.d20srd.org/srd/skills/jump.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"listen","name":"Listen","ability":"wis","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/listen.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"move_silently","name":"Move Silently","ability":"dex","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/moveSilently.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"open_lock","name":"Open Lock","ability":"dex","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/openLock.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"psicraft","name":"Psicraft","ability":"int","trained":true,"magic":false,"psi":true,"synergy":["use_psionic_device"],"ref":"https://www.d20srd.org/srd/skills/psicraft.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"ride","name":"Ride","ability":"dex","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/ride.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"search","name":"Search","ability":"int","trained":false,"magic":false,"psi":false,"synergy":["survival"],"ref":"https://www.d20srd.org/srd/skills/search.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"sense_motive","name":"Sense Motive","ability":"wis","trained":false,"magic":false,"psi":false,"synergy":["diplomacy"],"ref":"https://www.d20srd.org/srd/skills/senseMotive.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"sleight_of_hand","name":"Sleight of Hand","ability":"dex","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/sleightOfHand.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"spellcraft","name":"Spellcraft","ability":"int","trained":true,"magic":true,"psi":false,"synergy":["use_magic_device"],"ref":"https://www.d20srd.org/srd/skills/spellcraft.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"spot","name":"Spot","ability":"wis","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/spot.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"survival","name":"Survival","ability":"wis","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/survival.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"swim","name":"Swim","ability":"str","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/swim.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"tumble","name":"Tumble","ability":"dex","trained":true,"magic":false,"psi":false,"synergy":["balance","jump"],"ref":"https://www.d20srd.org/srd/skills/tumble.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"use_magic_device","name":"Use Magic Device","ability":"cha","trained":true,"magic":true,"psi":false,"synergy":["spellcraft"],"ref":"https://www.d20srd.org/srd/skills/useMagicDevice.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"use_psionic_device","name":"Use Psionic Device","ability":"cha","trained":true,"magic":false,"psi":true,"synergy":["psicraft"],"ref":"https://www.d20srd.org/srd/skills/usePsionicDevice.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"use_rope","name":"Use Rope","ability":"dex","trained":false,"magic":false,"psi":false,"synergy":["climb","escape_artist"],"ref":"https://www.d20srd.org/srd/skills/useRope.htm","ranks":0,"miscMod":0,"category":"general"},{"id":"knowledge_arcana","name":"Arcana","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(Arcana).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_architecture_and_engineering","name":"Architecture and engineering","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(ArchitectureAndEngineering).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_dungeoneering","name":"Dungeoneering","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(Dungeoneering).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_geography","name":"Geography","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(Geography).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_history","name":"History","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(History).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_local","name":"Local","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(Local).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_nature","name":"Nature","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(Nature).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_nobility_and_royalty","name":"Nobility and royalty","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(NobilityAndRoyalty).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_religion","name":"Religion","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(Religion).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"knowledge_the_planes","name":"The Planes","ability":"int","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/knowledge(ThePlanes).htm","ranks":0,"miscMod":0,"category":"knowledge"},{"id":"perform","name":"General","ability":"cha","trained":false,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/perform.htm","ranks":0,"miscMod":0,"category":"perform"},{"id":"profession","name":"General","ability":"wis","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/profession.htm","ranks":0,"miscMod":0,"category":"profession"},{"id":"speak_language","name":"Speak Common","ability":"","trained":true,"magic":false,"psi":false,"synergy":[],"ref":"https://www.d20srd.org/srd/skills/speakLanguage.htm","ranks":0,"miscMod":0,"category":"language"},{"id":"craft","name":"General","ability":"int","trained":false,"magic":false,"psi":false,"synergy":["appraise"],"ref":"https://www.d20srd.org/srd/skills/craft.htm","ranks":0,"miscMod":0,"category":"craft"}],"userSkills":[]},"feats":{"feats":[],"userFeats":[]},"gear":{"armor":[],"userArmor":[],"weapons":[],"userWeapons":[],"equipment":[],"userEquipment":[]},"spells":{"spells":[],"userSpells":[]}}'
);

// Short description of the character
export const shortCharacterDescription = derived([currentAttributes], ([$currentAttributes]) => {
	const level = $currentAttributes.level;
	const race = $currentAttributes.race ? toTitleCase($currentAttributes.race) : '';
	const cclass = $currentAttributes.class ? toTitleCase($currentAttributes.class) : '';
	return `Level ${level} ${race} ${cclass}`;
});

// Calculate current ability modifiers
export const currentAbilityModifiers = derived([currentAbilities], ([$currentAbilities]) => {
	const { str, dex, con, int, wis, cha } = $currentAbilities;
	const activeStrMod = str.temp ? str.modTemp : str.mod;
	const activeDexMod = dex.temp ? dex.modTemp : dex.mod;
	const activeConMod = con.temp ? con.modTemp : con.mod;
	const activeIntMod = int.temp ? int.modTemp : int.mod;
	const activeWisMod = wis.temp ? wis.modTemp : wis.mod;
	const activeChaMod = cha.temp ? cha.modTemp : cha.mod;
	return { activeStrMod, activeDexMod, activeConMod, activeIntMod, activeWisMod, activeChaMod };
});

// Calculate current AC totals
export const currentACTotals = derived(
	[currentMisc, currentAttributes, currentAbilityModifiers],
	([$currentMisc, $currentAttributes, $currentAbilityModifiers]) => {
		const { acBase, armorBonus, shieldBonus, naturalArmor, deflectMod, acMiscMod } = $currentMisc;
		const { activeDexMod } = $currentAbilityModifiers;
		const { sizeMod } = $currentAttributes;
		const acTotal =
			acBase +
			armorBonus +
			shieldBonus +
			activeDexMod +
			sizeMod +
			naturalArmor +
			deflectMod +
			acMiscMod;
		const touch = acBase + activeDexMod + sizeMod + deflectMod + acMiscMod;
		const flatFooted = acBase + armorBonus + sizeMod + naturalArmor + deflectMod + acMiscMod;
		return { acTotal, touch, flatFooted };
	}
);

// Calculate current save totals
export const currentSaveTotals = derived(
	[currentSaves, currentAbilityModifiers],
	([$currentSaves, $currentAbilityModifiers]) => {
		const {
			fortBase,
			fortMagicMod,
			fortMiscMod,
			fortTemp,
			fortTempMod,
			reflexBase,
			reflexMagicMod,
			reflexMiscMod,
			reflexTemp,
			reflexTempMod,
			willBase,
			willMagicMod,
			willMiscMod,
			willTemp,
			willTempMod
		} = $currentSaves;
		const { activeConMod, activeDexMod, activeWisMod } = $currentAbilityModifiers;
		const includeFortTemp = $currentSaves.fortTemp ? $currentSaves.fortTempMod : 0;
		const includeReflexTemp = $currentSaves.reflexTemp ? $currentSaves.reflexTempMod : 0;
		const includeWillTemp = $currentSaves.willTemp ? $currentSaves.willTempMod : 0;
		const fortTotal = fortBase + fortMagicMod + fortMiscMod + includeFortTemp + activeConMod;
		const reflexTotal =
			reflexBase + reflexMagicMod + reflexMiscMod + includeReflexTemp + activeDexMod;
		const willTotal = willBase + willMagicMod + willMiscMod + includeWillTemp + activeWisMod;
		return { fortTotal, reflexTotal, willTotal };
	}
);

// Calculate current attack totals
export const currentAttackTotals = derived(
	[currentAttack, currentAttributes, currentAbilityModifiers],
	([$currentAttack, $currentAttributes, $currentAbilityModifiers]) => {
		const { bab, grappleMiscMod } = $currentAttack;
		const { activeStrMod } = $currentAbilityModifiers;
		const { sizeMod } = $currentAttributes;
		const grappleTotal = bab + activeStrMod + sizeMod + grappleMiscMod;
		return { grappleTotal };
	}
);

// Stringified Character for export
export const stringifiedCharacter = derived(
	[
		currentMetadata,
		currentState,
		currentAvatar,
		currentAttributes,
		currentHealth,
		currentAbilities,
		currentSaves,
		currentAttack,
		currentMisc,
		currentSkills,
		currentFeats,
		currentGear,
		currentSpells
	],
	([
		$currentMetadata,
		$currentState,
		$currentAvatar,
		$currentAttributes,
		$currentHealth,
		$currentAbilities,
		$currentSaves,
		$currentAttack,
		$currentMisc,
		$currentSkills,
		$currentFeats,
		$currentGear,
		$currentSpells
	]) => {
		const character = {
			metadata: { ...$currentMetadata },
			state: { ...$currentState },
			avatar: { ...$currentAvatar },
			attributes: { ...$currentAttributes },
			health: { ...$currentHealth },
			abilities: { ...$currentAbilities },
			saves: { ...$currentSaves },
			attack: { ...$currentAttack },
			misc: { ...$currentMisc },
			skills: { ...$currentSkills },
			feats: { ...$currentFeats },
			gear: { ...$currentGear },
			spells: { ...$currentSpells }
		};
		return JSON.stringify(character);
	}
);
