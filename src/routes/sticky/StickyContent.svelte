<script lang="ts">
	import sticky from './sticky.js';

	let stickToTop = true;
	export let id: number;

	let isStuck = false;
</script>

<section>
	<h2 class="sticky" class:isStuck data-position={'top'} use:sticky {id}>
		I use position: sticky!
	</h2>

	<slot />
</section>

<style>
	h2 {
		margin: 0;
	}

	.sticky {
		position: sticky;
		padding: 1rem;
		background: mintcream;
		transition: all 0.3s;
	}

	.sticky[data-position='top'] {
		top: 1rem;
	}

	.sticky.isStuck {
		background: mintcream;
		box-shadow:
			0px 0px 1px 0px rgba(0, 0, 0, 0.2),
			0px 0px 6px 0px rgba(0, 0, 0, 0.3);
	}

	section {
		border: 1px solid lightskyblue;
		border-radius: 5px;
		padding: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
