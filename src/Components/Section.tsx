import React, { useEffect } from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styles
const Content = styled(motion.div).attrs({
    className: classnames(
        "flex",
        "flow-col",
        "h-full",
        "mt-28",
        "w-auto"
    ),
})``;

const Spacing = styled(motion.div).attrs({
    className: classnames(
        "h-auto",
        "flex-grow",
        "my-28",
        "w-full",
    ),
})``;


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
    const StyledSection = styled(motion.section).attrs({
        className: classnames(
            rest.flex ? "flex" : "initial",
            "h-auto",
            { [`items-${rest.align}`]: !!rest.align },
            { [`grid-flow-${rest.direction}`]: !!rest.direction },
            { [`justify-${rest.justify}`]: !!rest.justify },
            "mx-72",
            "relative",
            "w-auto",
        )
    })``;

    useEffect(() => {
        if (isFocused)
            onSectionFocus?.();
    }, [isFocused]);

    return (
        <StyledSection style={{ height: rest.hero ? '100vh' : '', margin: rest.hero ? '0' : '' }} {...rest}>
            {children}
        </StyledSection>
    );
};

export const Section = {
    Container,
    Content,
    Spacing,
};