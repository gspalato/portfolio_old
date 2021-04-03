import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import tw from 'twin.macro';

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

    let classes = `
        ${columnSpan}
        col-start-${props.columnStart}
        col-end-${props.columnEnd}
        ${rowSpan}
        row-start-${props.rowStart}
        row-end-${props.rowEnd}
    `;

    return (
        <motion.div className={classes} style={props.style}>
            {props.children}
        </motion.div>
    );
};