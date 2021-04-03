import { createCss } from '@stitches/react';

export const { styled, css } = createCss({
	theme: {
	  	colors: {
			gray500: 'hsl(206,10%,76%)',
			blue500: 'hsl(206,100%,50%)',
			purple500: 'hsl(252,78%,60%)',
			green500: 'hsl(148,60%,60%)',
			red500: 'hsl(352,100%,62%)',
	  	},
	  	space: {
			1: '5px',
			2: '10px',
			3: '15px',
	  	},
	  	fontSizes: {
			1: '12px',
			2: '13px',
			3: '15px',
	  	},
	  	fonts: {
			display: 'Inter, apple-system, sans-serif',
			body: 'Karla, apple-system, sans-serif',
	  	},
	},
  });