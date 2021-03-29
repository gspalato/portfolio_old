import { motion } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
export const Paragraph = styled(motion.p, {
    color: '$paragraphColor',
    fontFamily: '$karla',
	fontSize: '1.45rem',
    height: 'fit-content',
    margin: '0.6rem 0 ',
    userSelect: 'none',
});