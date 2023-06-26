/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				accents: {
					1: '#111',
					2: '#333',
					3: '#555',
					4: '#777',
					5: '#999',
					6: '#BBB',
					7: '#DDD',
					8: '#FFF',
				},

				background: '#09090b',
				foreground: '#fafafa',
				muted: '#27272a',
				mutedForeground: '#a1a1aa',
				popover: '#09090b',
				popoverForeground: '#fafafa',
				card: '#09090b',
				cardForeground: '#fafafa',
				border: '#27272a',
				input: '#27272a',
				primary: '#fafafa',
				primaryForeground: '#18181b',
				secondary: '#27272a',
				secondaryForeground: '#fafafa',
				accent: '#27272a',
				accentForeground: '#fafafa',
				destructive: '#7f1d1d',
				destructiveForeground: '#fef2f2',
				ring: '#27272a',
				overlay: '#ffffff09',
			},
			boxShadow: {},
			borderRadius: {},
			fontSize: {},
			fontFamily: {
				display: 'Space Grotesk',
				title: 'Inter',
				body: 'Karla',
				exotic: 'Syne',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/container-queries'),
	],
};
