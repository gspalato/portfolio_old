module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		colors: {
			white: '#ffffff',
			red: '#ff0000',

			// Color Scheme
			"scheme-gray-100": "#050507",
			"scheme-gray-200": "#060609",
			"scheme-gray-300": "#0b0b0f",
			"scheme-gray-400": "#252533",
			"scheme-gray-500": "#50506d",
			"scheme-gray-700": "#475569",
			"scheme-gray-900": "#98989d",
			"scheme-darkblue": "#0039ff",
			"scheme-blue": "#0066ff",
			"scheme-green": "#28cd41",
			"scheme-offwhite": "#f8f8fc",

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
			animation: {
				marquee: 'marquee 2.5s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': {
					  transform: 'translate(0, 0)'
					},
					'100%': {
					  transform: 'translate(-100%, 0)'
					}
				}
			},
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
	plugins: [],
}