import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import styled from 'styled-components';


// Styles
const SGridItem = styled(motion.div)``;

// Main component
interface IGridItemProps {
    columnEnd?: number | "auto";
    columnSpan?: number | "full" | "auto";
    columnStart?: number | "auto";

    rowEnd?: number | "auto";
    rowSpan?: number | "full" | "auto";
    rowStart?: number | "auto";

    style?: object;
};

export const GridItem: React.FC<IGridItemProps> = props => {
    let columnSpan: string = "";
    if (props.columnSpan && ["full", "auto"].includes(props.columnSpan as any))
        columnSpan = `col-${props.columnSpan}`;
    else if (props.columnSpan)
        columnSpan = `col-span-${props.columnSpan}`;

    let rowSpan: string = "";
    if (props.columnSpan && ["full", "auto"].includes(props.rowSpan as any))
        rowSpan = `row-${props.columnSpan}`;
    else if (props.columnSpan)
        rowSpan = `row-span-${props.columnSpan}`;

    const ComposedGridItem = styled(SGridItem).attrs({
        className: classnames(
            columnSpan,
            `col-start-${props.columnStart}`,
            `col-end-${props.columnEnd}`,
            rowSpan,
            `row-start-${props.rowStart}`,
            `row-end-${props.rowEnd}`,
        ),
    })``;

    return (
        <ComposedGridItem style={props.style}>
            {props.children}
        </ComposedGridItem>
    );
};