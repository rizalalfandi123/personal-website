/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ["'Inter Variable'", 'monospace']
		},
		extend: {
			colors: {
				'secondary-background': '#171c28',
				'primary-background': '#1d2433',
				'primary-foreground': '#a2aabc'
			},
			backgroundImage: {
				'cursor-gradient': `linear-gradient(90deg, #eb3434, #eb5e34, #eb8334, #eba434, #ebcc34, #ebeb34, #c3eb34, #89eb34, #58eb34, #34eb52, #34ebcc, #34d5eb, #34a8eb, #346beb, #3734eb, #7734eb, #a834eb, #eb34c3, #eb3489, #eb3461)`
			}
		}
	},
	plugins: []
};
