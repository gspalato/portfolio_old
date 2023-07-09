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

				white: '#eee',

				ring: 'rgb(28, 28, 30)',
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
