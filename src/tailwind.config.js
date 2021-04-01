module.exports = {
  	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  	darkMode: 'class',
  	theme: {
		color: {
			backgroundColor: '#010101',
			defaultBorder: '1px solid #101010',
			paragraphColor: '#e1e5eb',

			disabledgray: '#98989d',
			vividblue: '#06f',
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
		fontFamily: {
			display: 'Inter, apple-system, sans-serif',
			body: 'Karla, apple-system, sans-serif',
		},
		extend: {
			spacing: {
				content: '18.75rem',
				section: '7.5rem',
			},
		},
  	},
  	variants: {
		extend: {},
  	},
  	plugins: [],
}
