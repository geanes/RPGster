<script lang="ts">
	export let role: string = 'player';
</script>

<div
	class="card variant-ringed-surface flex-none flex-nowrap p-1 border border-slate-900/50 hover:borderhover:shadow-xl"
	class:hover:border-primary-500={role === 'player'}
	class:hover:border-tertiary-500={role === 'gm'}
>
	<header class="card-header text-lg text-slate-300/90 whitespace-nowrap">
		<slot name="header" />
	</header>
	<section class="p-2 text-slate-300/80">
		<slot />
	</section>
	<footer class="card-footer text-sm text-slate-400/70 whitespace-nowrap">
		<slot name="footer" />
	</footer>
</div>
