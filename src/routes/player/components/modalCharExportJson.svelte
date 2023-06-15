<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import {
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
	} from '../storeCharacter';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	const exportCharacterJson = () => {
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
	};

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<!-- <article>{$modalStore[0].body ?? '(body missing)'}</article> -->
		<div class="modal-form {cForm} max-h-[720px] overflow-auto">
			<CodeBlock language="json" code={`${exportCharacterJson()}`} />
		</div>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonPositive}" on:click={parent.onClose}>Close</button>
        </footer>
	</div>
{/if}
