import { motion  } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
export const Title = styled(motion.h1, {
    color: '#ffffff',
    fontFamily: '$inter',
	fontSize: '4vw',
    fontWeight: 600,
    height: 'fit-content',
    marginBlockEnd: '0',
    marginBlockStart: '0',
    userSelect: 'none',
});