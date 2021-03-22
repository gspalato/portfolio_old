import { motion } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
export const Card = styled(motion.div, {
    border: '1px solid rgb(16, 16, 16)',
    borderRadius: '10px',
    height: '15vw',
    width: '25vw',
});