import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    theme: {
      colors: {
        foreground: "#000",
        background: "#111",
        backgroundStart: "rgb(214, 219, 220)",
        backgroundEnd: "rgb(255, 255, 255)",

        primaryGlow: `radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))`,
        secondaryGlow: `linear-gradient(
          to bottom right,
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0.3)
        )`,

        tileStart: "rgb(239, 245, 249)",
        tileEnd: "rgb(228, 232, 233)",
        tileBorder: `conic-gradient(
            #00000080,
            #00000040,
            #00000030,
            #00000020,
            #00000010,
            #00000010,
            #00000080
          );`,

        callout: "rgb(238, 240, 241)",
        calloutBorder: "rgb(172, 175, 176)",
        card: "rgb(180, 185, 188)",
        cardBorder: "rgb(131, 134, 135)",

        blue: "#0022ff",
        border: "rgba(255, 255, 255, 0.05)",
      },
      space: {
        maxWidth: "1100px",
      },
      fonts: {
        mono: "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;",
        
        inter: "Inter, sans-serif",
        karla: "Karla, sans-serif",
        space: "Space Grotesk, sans-serif",

        display: "$space",
        title: "$inter",
        body: "$karla",
      },
      fontSizes: {
  
      },
      radii: {
        borderRadius: "12px",
      }
    },
    media: {
      bp1: '(min-width: 480px)',
    },
    utils: {
      marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
    },
});