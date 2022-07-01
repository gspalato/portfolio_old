module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		colors: {
			white: '#ffffff',
			red: '#ff0000',

			// Color Scheme
			"gray-100": "#050507",
			"gray-200": "#060609",
			"gray-300": "#0b0b0f",
			"gray-400": "#151520",
			"gray-500": "#222233",
			"gray-600": "#50506d",
			"gray-700": "#475569",
			"gray-900": "#98989d",
			"darkblue": "#0039ff",
			"blue": "#0066ff",
			"green": "#28cd41",
			"offwhite": "#f8f8fc",
			"subwhite": "#747474",

			"background": "#060609",
			"overlay-transparent": "rgba(6, 6, 9, .5)",
			"overlay": "#0b0b0f",
			"contrast": "#151520",
			"contrast-transparent": "rgba(11, 11, 15, .5)",
			"disabled": "#98989d",
			"button": "#0039ff",
			"border": "rgba(21, 21, 32)",
		},
		extend: {
			animation: {
				grow: 'grow 3s ease-in-out infinite',
				marquee: 'marquee 2.5s linear infinite',
			},
			keyframes: {
				grow: {
					from: {
						transform: "scale(1)",
					},
					'50%': {
						transform: 'scale(1.025)',
					},
					to: {
						transform: 'scale(1)',
					}
				},
				marquee: {
					'0%': {
					  transform: 'translate(0, 0)'
					},
					'100%': {
					  transform: 'translate(-100%, 0)'
					}
				},
			},
			fontFamily: {
				display: 'Inter, apple-system, Helvetica Neue, sans-serif',
				body: 'Karla, apple-system, Helvetica, sans-serif',
				detail: 'Epilogue, apple-system, Helvetica, sans-serif',
			},
			fontSize: {

			},
			gridAutoColumns: {
				'min-max-5': 'minmax(1, 5fr)'
			},
			height: {
				fit: 'fit-content',
			},
			screens: {
				'v': [{ raw: '(orientation: portrait)' }, { min: '640px' }],
			},
			spacing: {

			},
			width: {
				fit: 'fit-content',
			},
		},
	},
	plugins: []
}