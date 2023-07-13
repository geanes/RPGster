<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import {
		stringifiedCharacter,
		shortCharacterDescription,
		currentMetadata
	} from '$lib/stores/storeCharacter';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$shortCharacterDescription}</header>
		<!-- <header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header> -->
		<!-- <article>{$modalStore[0].body ?? '(body missing)'}</article> -->
		<div class="modal-form {cForm} max-h-[720px] overflow-auto">
			<CodeBlock language="json" code={$stringifiedCharacter} />
		</div>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonPositive}" on:click={parent.onClose}>Close</button>
        </footer>
	</div>
{/if}
