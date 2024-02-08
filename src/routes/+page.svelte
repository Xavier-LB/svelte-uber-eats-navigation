<script lang="ts">
	import { browser } from '$app/environment';

	let titleInFocus: string = '';
	let xScroll: HTMLElement;

	function enterViewPort(e: HTMLElement) {
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

<nav bind:this={xScroll}>
	{#each categories as cat}
		<button
			class:button-selected={titleInFocus === cat}
			id={`nav-${cat}`}
			on:click={() => {
				document?.getElementById(cat)?.scrollIntoView();
			}}>{cat}</button
		>
	{/each}
</nav>

<br />
<br />

<div>
	{#each categories as cat}
		<br />
		<h2 use:enterViewPort id={cat}>
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

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #5aa370;
		display: flex;
		overflow-x: scroll;
		padding: 0.5rem 1rem;
	}

	.button-selected {
		background-color: skyblue;
	}

	h2 {
		/* by default is set to 0, so after clicking it would endup behind the nav bar */
		scroll-margin: 60px;
	}
</style>
