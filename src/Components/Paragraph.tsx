import { motion } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
export const Paragraph = styled(motion.p, {
    color: '$paragraphColor',
    fontFamily: '$karla',
	fontSize: 'max(1.125rem, 1.4vw)',
    height: 'fit-content',
    margin: '0.6rem 0 ',
    userSelect: 'none',
});