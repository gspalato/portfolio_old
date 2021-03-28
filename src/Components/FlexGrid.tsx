import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';


// Styles
let StyledFlexRow = styled(motion.div, {
    display: 'flex',
});


// Main component
interface IFlexGridProps extends ExtraProps {
    spaced?: true,
};

interface IFlexColumnProps extends ExtraProps {
    collapsable?: true,
    size?: number,
};

interface IFlexRowProps extends ExtraProps { };

export const FlexGrid: React.FC<IFlexGridProps> = props => {
    let StyledFlexGrid = styled(motion.div, {
        justifyContent: props.spaced && 'space-between',
    });

    return (
        <StyledFlexGrid
            {...props}
        >
            {props.children}
        </StyledFlexGrid>
    );
};

export const FlexColumn: React.FC<IFlexColumnProps> = props => {
    let StyledFlexColumn = styled(motion.div, {
        flex: props.size ?? 1,

        variants: {
            display: {
                show: {

                },
                collapsed: {
                    display: 'none',
                }
            }
        }
    });

    return (
        <StyledFlexColumn
            display={{
                initial: 'show',
            }}
            {...props}
        >
            {props.children}
        </StyledFlexColumn>
    );
}

export const FlexRow: React.FC<IFlexRowProps> = props => (
    <StyledFlexRow {...props}>{props.children}</StyledFlexRow>
);