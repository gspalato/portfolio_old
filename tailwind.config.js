module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false,
	theme: {
		colors: {
			white: '#ffffff',
			red: '#ff0000',

			// Color Scheme
			"scheme-gray": "#050507",
			"scheme-lightgray": "#060609",
			"scheme-contrastgray": "0b0b0f",
			"scheme-disabledgray": "98989d",
			"scheme-darkblue": "0039ff",
			"scheme-blue": "0066ff",
			"scheme-green": "#28cd41",

			"scheme-background": "#050507",
			"scheme-overlay-transparent": "rgba(6, 6, 9, .5)",
			"scheme-overlay": "#060609",
			"scheme-contrast": "#0b0b0f",
			"scheme-contrast-transparent": "rgba(11, 11, 15, .5)",
			"scheme-disabled": "#98989d",
			"scheme-button": "#0039ff",
			"scheme-border": "rgba(21, 21, 32, 0.5)",
		},
		extend: {
			fontFamily: {
				display: 'Inter, apple-system, Helvetica Neue, sans-serif',
				body: 'Karla, apple-system, Helvetica, sans-serif',
				detail: 'Poppins, apple-system, Helvetica, sans-serif',
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