import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import styled from 'styled-components';


// Styles
let StyledFlexRow = styled(motion.div)`
    display: flex;
`;


// Main component
interface IFlexGridProps extends ExtraProps {
    flow?: "col" | "row",
    spaced?: true,
};

interface IFlexColumnProps extends ExtraProps {
    collapsable?: true,
    size?: number,
};

interface IFlexRowProps extends ExtraProps { };

export const FlexGrid: React.FC<IFlexGridProps> = props => {
    let StyledFlexGrid = styled(motion.div).attrs({
        className: `grid ${props.flow ? 'grid-flow-'+props.flow : 'grid-flow-row'}`,
    })``;

    return (
        <StyledFlexGrid
            {...props}
        >
            {props.children}
        </StyledFlexGrid>
    );
};

export const FlexColumn: React.FC<IFlexColumnProps> = props => {
    let StyledFlexColumn = styled(motion.div).attrs({

    })`
        flex: ${props.size ?? 1};
    `;

    return (
        <StyledFlexColumn
            {...props}
        >
            {props.children}
        </StyledFlexColumn>
    );
}

export const FlexRow: React.FC<IFlexRowProps> = props => (
    <StyledFlexRow {...props}>{props.children}</StyledFlexRow>
);