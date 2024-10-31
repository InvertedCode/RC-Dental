import typography from '@tailwindcss/typography'

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
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-200%)' },
				},
				carouselScroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				scroll: 'scroll 50s linear infinite',
				carouselScroll: 'carouselScroll 130s linear infinite',
			},
			transitionProperty: {
				'transform-opacity': 'transform, opacity',
			},
			transitionTimingFunction: {
				'in-out-ease': 'ease-in-out',
				},
		},
	},
	plugins: [typography],
}