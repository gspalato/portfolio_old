import { Variants } from 'framer-motion';

export const defaultFadeInLeftVariants: Variants = {
  start: {
    opacity: 0,
    translateX: 50
  },
  end: (i: number) => ({
    opacity: 1,
    translateX: 0,
    transition: {
      ease: "easeInOut",
      duration: .75,
      delay: i * 0.3
    },
  }),
}

export const defaultFadeInDownVariants: Variants = {
  start: {
    opacity: 0,
    translateY: -50
  },
  end: (i: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      ease: "easeInOut",
      duration: .75,
      delay: i * 0.3
    },
  }),
}

export const mobileNavbarVariants = {
	open: {
		translateX: '0',
		opacity: 1,
	},
	closed: {
		translateX: '-100%',
		opacity: 0,
	}
}