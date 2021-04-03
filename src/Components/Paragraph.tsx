import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import tw from 'twin.macro';

// Styles
export const Paragraph = styled(motion.p, {
    ...tw`
        h-auto
        font-body
        leading-7
        my-2.5
        text-2xl
        text-white
        select-none
    `,
});