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
	class="m-auto fixed inset-x-0 mx-auto bg-slate-200 flex overflow-x-scroll px-2 py-3"
	bind:this={xScroll}
>
	{#each categories as cat}
		<button
			class:underline={titleInFocus === cat}
			id={`nav-${cat}`}
			on:click={() => {
				document?.getElementById(cat)?.scrollIntoView();
			}}
			class="border-slate-500 border rounded-full px-2 mx-1">{cat}</button
		>
	{/each}
</nav>

<br />
<br />
<br />
<br />

<div class=" max-w-xl m-auto">
	{#each categories as cat}
		<br />
		<h2 class="text-2xl font-bold scroll-my-32" use:enterViewPort id={cat}>
			{cat}
		</h2>
		{#each dishes as dish}
			<p>{dish}</p>
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
