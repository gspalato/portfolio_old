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
					0: '#060607',
					1: '#121213',
					2: '#1e1e1f',
					3: '#232324',
					4: '#373738',
				},
				borders: {
					0: '#1c1c1d',
					1: '#262627',
					2: '#333334',
					3: '#474748',
					4: '#79797a',
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
					9: '#ffffff55',
				},

				white: '#ccc',

				ring: 'rgb(28, 28, 29)',
			},
			backgroundImage: {
				shadowy: 'linear-gradient(180deg, #fafafa, #aaaaaa)',
			},
			boxShadow: {},
			borderRadius: {},
			fontSize: {},
			fontFamily: {
				display: 'Space Grotesk',
				mono: 'Space Mono',
				title: 'Inter',
				body: 'Space Mono',
				exotic: 'Syne',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/container-queries'),
	],
};
