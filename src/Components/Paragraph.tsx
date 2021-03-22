import { motion } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
export const Paragraph = styled(motion.p, {
    color: '#ffffff',
    fontFamily: '$karla',
	fontSize: 'max(1.125rem, 1.05vw)',
    //fontWeight: 500,
    margin: '1vh 0 1vh 0',
    userSelect: 'none',
});