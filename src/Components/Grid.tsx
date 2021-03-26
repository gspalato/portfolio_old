import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';


// Main component
interface IGridProps {
    columns?: number,
    flow?: "column" | "row",
    gap?: string,

    css?: object,
};

export const Grid: React.FC<IGridProps> = props => {
    let columns = props.columns ?? 1;
    let flow = props.flow ?? "row";
    let gap = props.gap ?? "1rem";

    const ComposedGrid = styled(motion.div, {
        display: 'grid',
        gap,
        gridAutoFlow: flow,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        height: '100%',
    });

    return (
        <ComposedGrid css={props.css}>
            {props.children}
        </ComposedGrid>
    );
};