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

				tremor: {
					brand: {
						faint: '#0B1229', // custom
						muted: '#172554', // blue-950
						subtle: '#1e40af', // blue-800
						DEFAULT: '#3b82f6', // blue-500
						emphasis: '#60a5fa', // blue-400
						inverted: '#030712', // gray-950
					},
					background: {
						muted: '#131A2B', // custom
						subtle: '#1f2937', // gray-800
						DEFAULT: '#09090b', // gray-900
						emphasis: '#d1d5db', // gray-300
					},
					border: {
						DEFAULT: '#27272a',
					},
					ring: {
						DEFAULT: '#27272a',
					},
					content: {
						subtle: '#ffffff33', // gray-600
						DEFAULT: '#ffffff88',
						emphasis: '#ffffff', // gray-200
						strong: '#f9fafb', // gray-50
						inverted: '#000000', // black
					},
				},
			},
			boxShadow: {
				'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'tremor-card':
					'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'tremor-dropdown':
					'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
			},
			borderRadius: {
				'tremor-small': '0.375rem',
				'tremor-default': '0.5rem',
				'tremor-full': '9999px',
			},
			fontSize: {
				'tremor-label': ['0.75rem'],
				'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
				'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
				'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
			},
			fontFamily: {
				display: 'Space Grotesk',
				title: 'Inter',
				body: 'Karla',
				exotic: 'Syne',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
