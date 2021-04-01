import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import styled from 'styled-components';


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

    const ComposedGrid = styled(motion.div).attrs({
        className: classnames(
            "h-full",
            "grid",
            `grid-cols-${columns}`,
            //`grid-rows-${rows}`,
        ),
    })``;

    return (
        <ComposedGrid style={props.css}>
            {props.children}
        </ComposedGrid>
    );
};