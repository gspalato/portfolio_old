import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';


// Styles
const Content = styled(motion.div)`
    ${tw`
        flex
        flex-col
        h-full
        justify-center
        md:mt-28
        md:w-full
    `}
`;

const Spacing = styled(motion.div)`
    ${tw`
        h-auto
        flex-grow
        md:my-28
        w-full
    `}
`;


// Main component
interface ISectionContainerProps {
    hero?: true;

    align?: "start" | "center" | "end" | "baseline" | "stretch";
    flex?: true;
    direction?: "col" | "row";
    justify?: "start" | "center" | "end";

    isFocused?: boolean;
    onSectionFocus?: () => void;

    [key: string]: any;
};

export const Container: React.FC<ISectionContainerProps> = ({ children, isFocused, onSectionFocus, ...rest }) => {
    let classes = `
        ${rest.flex ? "flex" : "initial"}
        ${rest.hero ? "h-screen" : "h-auto"}
        ${!!rest.align && `items-${rest.align}`}
        ${!!rest.direction && `grid-flow-${rest.direction}`}
        ${!!rest.justify && `justify-${rest.justify}`}
        mx-auto md:mx-72
        px-10 md:p-0
        relative
        w-auto
    `;

    return (
        <motion.section className={classes} style={{ margin: rest.hero ? '0' : '' }} {...rest}>
            {children}
        </motion.section>
    );
};

export const Section = {
    Container,
    Content,
    Spacing,
};