import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import tw from 'twin.macro';


// Main component
interface IGridProps {
    columns?: number,
    flow?: "column" | "row",
    gap?: string,

    css?: object,
};

export const Grid: React.FC<IGridProps> = props => {
    let flow = props.flow ?? "row";
    let gap = props.gap ?? "1rem";
    
    let classes = `grid-rows-${props.columns ?? 1} md:grid-cols-${props.columns ?? 1}`;

    const ComposedGrid = styled(motion.div, {
        ...tw`
            h-full
            grid   
        `,
    });

    return (
        <ComposedGrid className={classes} style={props.css}>
            {props.children}
        </ComposedGrid>
    );
};