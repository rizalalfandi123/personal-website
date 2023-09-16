import type { Experience } from '$lib/types';

export const experiences: Array<Experience> = [
	{
		company: 'Zahir',
		companyWebsite: 'https://zahiraccounting.com/',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
		duration: 'Dec 2021 - Jan 2023',
		position: 'Frontend Web Developer',
		products: [
			{ link: 'https://go.zahironline.com/', name: 'Zahir Online' },
			{ link: 'https://assetmanagement.zahirerp.com', name: 'Zahir Asset Management' }
		],
		skills: ['React Js', 'React Native', 'MUI', 'Typescript', 'Emotion js', 'Rest API']
	},
	{
		company: 'MD Media',
		companyWebsite: 'https://www.mdmedia.co.id/',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
		duration: 'Jan 2023 - Jun 2023',
		position: 'Frontend Web Developer',
		products: [],
		skills: ['React Js', 'Tailwind CSS', 'Capacitor', 'Svelte Js', 'Typescript', 'Graph QL']
	},
    {
		company: 'Komerce',
		companyWebsite: 'https://komerce.id/',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
		duration: 'Jun 2023 - Present',
		position: 'Frontend Web Developer',
		products: [],
		skills: ['Vue Js', 'Tailwind CSS', 'Angular', 'Typescript', 'Rest API', 'Material Design']
	}
];
