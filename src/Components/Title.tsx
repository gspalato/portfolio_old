import { motion  } from 'framer-motion';
import { styled } from '../stitches.config';
import tw from 'twin.macro';

// Styles
interface ITitleProps extends ExtraProps {
    main?: true;

    style?: object;
}

export const Title: React.FC<ITitleProps> = ({ children, main, ...rest }) => {
    let classes = `
        font-display
        font-semibold
        h-auto
        ${main && "text-7xl md:text-xxl"}
        ${!main && "text-5x1 md:text-7xl"}
        text-center
        text-white
        select-none
    `;

    return (
        <motion.h1 className={classes} {...rest}>
            {children}
        </motion.h1>
    );
}