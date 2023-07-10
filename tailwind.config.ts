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
					0: '#1c1c1c',
					1: '#262626',
					2: '#333333',
					3: '#474747',
					4: '#797979',
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

				white: '#ccc',

				ring: 'rgb(28, 28, 30)',
			},
			backgroundImage: {
				shadowy: 'linear-gradient(180deg, #fafafa, #aaaaaa)',
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
