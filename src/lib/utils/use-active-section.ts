import { onMount } from 'svelte';

interface GetActiveSectionArgs {
	sectionQuerySelector: string;
	changeCallback: (newValue: string) => void;
}

export const useActiveSection = ({ sectionQuerySelector, changeCallback }: GetActiveSectionArgs) => {
	onMount(() => {
		const scrollSections = document.querySelectorAll(sectionQuerySelector);

		const changeActiveSection = () => {
			const currentSection = Array.from(scrollSections).find((section) => section.getBoundingClientRect().bottom > 0);

			if (currentSection) {
				changeCallback(currentSection.id);
			}
		};

		window.addEventListener('scroll', changeActiveSection);

		return () => {
			window.removeEventListener('scroll', changeActiveSection);
		};
	});
};
