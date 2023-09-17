import type { Experience } from '$lib/types';

export const experiences: Array<Experience> = [
	{
		company: 'Zahir',
		companyWebsite: 'https://zahiraccounting.com/',
		description:
			'My team and I developed a web-based accounting software that will be used by more than 50,000 users. The application is made using React Js and MUI. We work using egile methodology, collaborate well, and communicate clearly.',
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
			'I developed an internal company application using Next Js, Typescript and Tailwind CSS. This application will be used for operational and administrative activities.',
		duration: 'Jan 2023 - Jun 2023',
		position: 'Frontend Web Developer',
		products: [],
		skills: ['Next Js', 'Tailwind CSS', 'Capacitor', 'Svelte Js', 'Typescript']
	},
	{
		company: 'Komerce',
		companyWebsite: 'https://komerce.id/',
		description: 'Develop an e commerce enabler application that will be used by many users in helping their business. The stack used is Vue Js, Typescript, and Tailwind CSS.',
		duration: 'Jun 2023 - Present',
		position: 'Frontend Web Developer',
		products: [{ link: 'https://partner.komerce.id/', name: 'Komship' }],
		skills: ['Vue Js', 'Tailwind CSS', 'Angular', 'Typescript', 'Rest API']
	},
	{
		company: 'Komerce',
		companyWebsite: 'https://komerce.id/',
		description: 'Develop an e commerce enabler application that will be used by many users in helping their business. The stack used is Vue Js, Typescript, and Tailwind CSS.',
		duration: 'Jun 2023 - Present',
		position: 'Frontend Web Developer',
		products: [{ link: 'https://partner.komerce.id/', name: 'Komship' }],
		skills: ['Vue Js', 'Tailwind CSS', 'Angular', 'Typescript', 'Rest API']
	}
];
