import { writable } from 'svelte/store';

export const titleInFocus = writable('');

export function enterViewPort(e: HTMLElement) {
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			titleInFocus.set(e.id);
		}
	});

	observer.observe(e);
}
