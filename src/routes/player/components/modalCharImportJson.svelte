<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import { loadCharacter } from '$lib/utils/characterUtils';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	let charJson = '';

	const importCharacterJson = () => {
		loadCharacter({ char: charJson });
		modalStore.close();
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
			<textarea
				class="textarea"
				rows="20"
				placeholder="Character sheet JSON goes here..."
				bind:value={charJson}
			/>
		</div>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
			<button class="btn {parent.buttonPositive}" on:click={importCharacterJson}>Import</button>
        </footer>
	</div>
{/if}
