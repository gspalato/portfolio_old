import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
    prefix: 'gs',
    tokens: {
        colors: {
            $backgroundColor: '#010101',
            $defaultBorder: '1px solid #101010',
            $paragraphColor: '#eeeeee',

            $black: '#000000',
            $disabledgray: '#98989d',
            $vividblue: '#06f',
            $vividgreen: '#28cd41',

            $spectrumGradient: `
                linear-gradient(94.75deg,
                rgb(5, 157, 255) 0%,
                rgb(101, 73, 213) 43.66%,
                rgb(227, 63, 161) 64.23%,
                rgb(246, 79, 86) 80.09%,
                rgb(251, 83, 67) 83.76%,
                rgb(253, 123, 66) 100%)
            `,
        },
        fonts: {
            $paragraphFont: '$inter',

            $helveticaNeue: 'Helvetica Neue, apple-system, sans-serif',
            $inter: 'Inter, apple-system, sans-serif',
            $karla: 'Karla, apple-system, sans-serif',
            $montserrat: 'Montserrat, apple-system, sans-serif',
            $roboto: 'Roboto, apple-system, sans-serif',
        }
    },
    media: {
        'sm': '(min-width: 640px)',
        'md': '(min-width: 768px)',
        'lg': '(min-width: 1024px)',
    },
    utils: {
        linearGradient: (config) => (value) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),
    },
});

css.global({
    body: {
        backgroundColor: '$backgroundColor'
    }
});