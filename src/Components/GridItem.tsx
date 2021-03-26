import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import { stopAnimation } from 'framer-motion/types/render/utils/animation';


// Styles
export const SGridItem = styled(motion.div, {

});

// Main component
interface IGridItemProps {
    columnEnd?: number | "auto";
    columnSpan?: number | "full" | "auto";
    columnStart?: number | "auto";

    rowEnd?: number | "auto";
    rowSpan?: number | "full" | "auto";
    rowStart?: number | "auto";

    css?: object;
};

export const GridItem: React.FC<IGridItemProps> = props => {
    let columnSpan: string;
    if (props.columnSpan == "full")
        columnSpan = "1 / -1";
    else if (props.columnSpan == "auto")
        columnSpan = "auto";
    else
        columnSpan = `span ${props.columnSpan} / span ${props.columnSpan}`;

    let rowSpan: string;
    if (props.rowSpan == "full")
        rowSpan = "1 / -1";
    else if (props.rowSpan == "auto")
        rowSpan = "auto";
    else
        rowSpan = `span ${props.rowSpan} / span ${props.rowSpan}`;

    const ComposedGridItem = styled(SGridItem, {
        gridColumn: columnSpan,
        gridColumnStart: props.columnStart,
        gridColumnEnd: props.columnEnd,

        gridRow: rowSpan,
        gridRowStart: props.rowStart,
        gridRowEnd: props.rowEnd,
    });

    return (
        <ComposedGridItem css={props.css}>
            {props.children}
        </ComposedGridItem>
    );
};