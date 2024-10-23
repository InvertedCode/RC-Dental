/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				colors: {
					'lightest': 'var(--color-lightest)',
					'lighter': 'var(--color-lighter)',
					'light': 'var(--color-light)',
					'medium-light': 'var(--color-medium-light)',
					'medium': 'var(--color-medium)',
					'medium-dark': 'var(--color-medium-dark)',
					'dark': 'var(--color-dark)',
					'darker': 'var(--color-darker)',
					'darkest': 'var(--color-darkest)',
					'almost-black': 'var(--color-almost-black)',
					'black': 'var(--color-black)',
				},
			}
		},
	},
	plugins: [],
}
