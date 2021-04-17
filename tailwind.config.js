module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false,
	theme: {
		colors: {
			white: '#ffffff',

			"black-25": '#010101',
			"neutral-gray-25": '#101010',
			"neutral-gray-50": 'rgb(21, 21, 21)',
			"neutral-gray-800": '#eeeeee',

			disabledgray: '#98989d',
			vividblue: '#06f',
			darkvividblue: '#0039ff',
			vividgreen: '#28cd41',

			spectrumGradient: `
				linear-gradient(94.75deg,
				rgb(5, 157, 255) 0%,
				rgb(101, 73, 213) 43.66%,
				rgb(227, 63, 161) 64.23%,
				rgb(246, 79, 86) 80.09%,
				rgb(251, 83, 67) 83.76%,
				rgb(253, 123, 66) 100%)
			`,
		},
		extend: {
			fontFamily: {
				display: 'Inter, apple-system, Helvetica Neue, sans-serif',
				body: 'Karla, apple-system, Helvetica, sans-serif',
			},
			fontSize: {

			},
			height: {
				fit: 'fit-content',
			},
			spacing: {

			},
			width: {
				fit: 'fit-content',
			}
		},
	},
	variants: {
		extend: {
			fill: ['hover'],
			padding: ['first', 'last'],
		},
	},
	plugins: [],
}