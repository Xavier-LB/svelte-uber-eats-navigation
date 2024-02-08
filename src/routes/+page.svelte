<script lang="ts">
	import { browser } from '$app/environment';

	let titleInFocus: string = '';

	export function enterViewPort(e: HTMLElement) {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				titleInFocus = e.id;
			}
		});

		observer.observe(e);
	}

	const categories = [
		'Dishes',
		'Drinks',
		'Desserts',
		'Snacks',
		'Sauces',
		'Spices',
		'Breads',
		'Salads',
		'Soups',
		'Sides',
		'Appetizers',
		'Entrees',
		'Breakfast',
		'Lunch',
		'Dinner',
		'Brunch',
		'Dessert',
		'Snack',
		'Sauce'
	];

	const dishes = [
		'Pizza',
		'Pasta',
		'Burgers',
		'Sandwiches',
		'Tacos',
		'Burritos',
		'Sushi',
		'Ramen',
		'Pho',
		'Curry',
		'Stir Fry',
		'Fried Rice',
		'Noodles',
		'Salmon',
		'Steak',
		'Chicken',
		'Pork'
	];

	let xScroll: HTMLElement;
	$: {
		if (browser) {
			let targetElement = document.getElementById(`nav-${titleInFocus}`);
			let rect = targetElement?.getBoundingClientRect();
			if (rect) {
				xScroll?.scrollTo({ left: xScroll?.scrollLeft + rect?.left - 10, behavior: 'smooth' });
			}
		}
	}
</script>

<nav
	class="m-auto fixed inset-x-0 mx-auto bg-[#3d9a1e] flex overflow-x-scroll px-2 py-3"
	bind:this={xScroll}
>
	{#each categories as cat}
		<button
			class:selected-button={titleInFocus === cat}
			id={`nav-${cat}`}
			on:click={() => {
				document?.getElementById(cat)?.scrollIntoView();
			}}
			class=" text-white bg-[#ffffff22] rounded-full px-3 py-2 mx-1">{cat}</button
		>
	{/each}
</nav>

<br />
<br />
<br />
<br />

<div class=" max-w-xl m-auto font-mono text-[#1c1c1ce4]">
	<h1 class="m-1 font-bold text-3xl">Uber Like Navigation <br /> in Svelte</h1>
	<div class="bg-[#F6F6F6] p-3 py-4 m-1 rounded">
		Scroll down to see the navigation in action, or click on the buttons to scroll to the section.
		<br />
		<br />
		<p>
			See <a href="https://lebaux.co/blog/svelte-uber-eats" target="_blank" class="underline"
				>blog post</a
			> for more details on the implementation.
		</p>
	</div>
	{#each categories as cat}
		<br />
		<h2 class="m-1 text-2xl font-bold scroll-my-32" use:enterViewPort id={cat}>
			{cat}
		</h2>
		{#each dishes as dish}
			<div class="flex justify-between bg-[#F6F6F6] hover:bg-[#ececec] p-3 m-1 rounded">
				<p>{dish}</p>
				<p class=" italic">$7.50</p>
			</div>
		{/each}
	{/each}
</div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<style>
	.selected-button {
		background-color: #ffffff55;
	}
</style>
