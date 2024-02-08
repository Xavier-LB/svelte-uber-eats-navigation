<script>
	import StickyContent from './StickyContent.svelte';

	import { writable } from 'svelte/store';

	const count = writable(0);

	let stickToTop = true;
</script>

<main>
	{#each Array(5) as _, i}
		<StickyContent {stickToTop} id={i}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper, mi eu faucibus
				rutrum, quam mauris tempor eros, vitae tristique est sapien sed enim. Fusce sit amet
				interdum leo. Ut id eros convallis, tincidunt lacus commodo, sodales lorem. Sed turpis odio,
				blandit placerat nisl a, viverra scelerisque nisi. Maecenas efficitur arcu libero, eget
				viverra leo tempus non. Praesent venenatis lobortis cursus. Sed vitae est finibus, tincidunt
				est a, ultricies mauris. Praesent tempor consequat ante nec tristique. Sed non quam
				convallis, ultricies massa nec, tempus urna. Fusce tempor mi quis pharetra malesuada.
				Vivamus vitae metus ipsum.
			</p>
			<p>
				Phasellus lobortis molestie turpis, nec sodales tellus rhoncus non. Nulla a convallis ipsum.
				Duis in mauris gravida purus sagittis ultrices eget sit amet diam. Curabitur pharetra
				tincidunt nibh quis venenatis. Aenean diam diam, bibendum non nunc at, scelerisque accumsan
				libero. Aenean condimentum, ex id pulvinar posuere, purus urna ullamcorper metus, at pretium
				purus ante ut ex. Suspendisse quis pretium diam. Mauris et fringilla odio. Donec nec erat et
				purus congue sagittis vel in eros. Pellentesque pulvinar, enim et sagittis venenatis, odio
				risus finibus mi, quis gravida dui felis at purus. Nullam semper at sem ultrices eleifend.
				Cras tincidunt est neque, vitae porta risus suscipit sit amet. Curabitur ullamcorper a lacus
				vel scelerisque. Proin lobortis elit iaculis lacus efficitur tempor.
			</p>
		</StickyContent>
	{/each}
</main>

<style>
	.inputContainer {
		display: flex;
		align-items: baseline;
		margin-bottom: 1rem;
	}

	input {
		margin-right: 0.5rem;
	}

	main {
		max-width: 65rem;
		margin: 0 auto;
	}
</style>
