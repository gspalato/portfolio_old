/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
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
					0: 'rgb(6, 6, 7)',
					1: 'rgb(12, 12, 14)',
					2: 'rgb(28, 28, 30)',
					3: 'rgb(44, 44, 46)',
					4: 'rgb(58, 58, 60)',
					5: 'rgb(72, 72, 74)',
					6: 'rgb(99, 99, 102)',
					7: 'rgb(142, 142, 147)',
				},
				overlays: {
					0: '#ffffff09',
					1: '#ffffff0a',
					2: '#ffffff0c',
					3: '#ffffff0e',
					4: '#ffffff0f',
					5: '#ffffff11',
					6: '#ffffff22',
					7: '#ffffff33',
					8: '#ffffff44',
				},

				white: 'fafafa',

				ring: '#ffffff11',

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
			},
			backgroundImage: {
				shadowy: 'linear-gradient(180deg, #fafafa, #adadad)',
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
