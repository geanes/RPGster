import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import {
	defaultCharacter,
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
} from '$lib/stores/storeCharacter';

export const loadCharacter = ({
	char = get(defaultCharacter),
	nav = false
}: {
	char?: string;
	nav?: boolean;
}) => {
	const character = JSON.parse(char);
	currentMetadata.set(character.metadata);
	currentState.set(character.state);
	currentAvatar.set(character.avatar);
	currentAttributes.set(character.attributes);
	currentHealth.set(character.health);
	currentAbilities.set(character.abilities);
	currentSaves.set(character.saves);
	currentAttack.set(character.attack);
	currentMisc.set(character.misc);
	currentSkills.set(character.skills);
	currentFeats.set(character.feats);
	currentGear.set(character.gear);
	currentSpells.set(character.spells);
	if (nav) goto('./player');
};
