import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import tw from 'twin.macro';


// Styles
let StyledFlexRow = styled(motion.div, {
	...tw`flex`,
});


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
	let flows = {
		col: tw`grid-flow-col`,
		row: tw`grid-flow-row`,
	};

    let StyledFlexGrid = styled(motion.div, {
        ...tw`
            grid
        `,
		...flows[props.flow ?? "row"]
    });

    return (
        <StyledFlexGrid {...props}>
            {props.children}
        </StyledFlexGrid>
    );
};

export const FlexColumn: React.FC<IFlexColumnProps> = props => {
    let StyledFlexColumn = styled(motion.div, {
		flex: props.size ?? 1,
	});

    return (
        <StyledFlexColumn {...props}>
            {props.children}
        </StyledFlexColumn>
    );
}

export const FlexRow: React.FC<IFlexRowProps> = props => (
    <StyledFlexRow {...props}>{props.children}</StyledFlexRow>
);