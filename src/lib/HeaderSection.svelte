<script lang="ts">
	import { browser } from '$app/environment';
	import { titleInFocus } from './store';

	export let id: string;
	export let title: string;

	let xScroll: HTMLElement;

	$: {
		if (browser) {
			let targetElement = document.getElementById(`nav-${$titleInFocus}`);
			let rect = targetElement?.getBoundingClientRect();
			xScroll?.scrollTo({ left: xScroll?.scrollLeft + rect?.left - 10, behavior: 'smooth' });
		}
	}
</script>

<section>
	<h2 bind:this={xScroll} class="text-2xl font-bold" {id}>
		{title}
	</h2>

	<slot />
</section>
