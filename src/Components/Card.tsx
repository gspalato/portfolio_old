import React, { useCallback, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { CursorContext } from './Providers/CursorProvider';
import { FlexGrid, FlexColumn, FlexRow } from './FlexGrid';
import { GridItem } from './GridItem';
import { Paragraph } from './Paragraph';
import { Title } from './Title';
import { BaseButton } from './BaseButton';


// Main component
interface ICardContainerProps extends ExtraProps {
	image?: string,
};

const Container: React.FC<ICardContainerProps> = props => {
	const [isBeingPressed, setIsBeingPressed] = useState(false);

	const StyledCardContainer = styled(motion.div).attrs({
		className: "bg-center bg-no-repeat bg-cover border-defaultBorder h-60 w-120 rounded-md relative text-5xl",
	})`
		background: rgba(255, 255, 255, .05);
		border: 1px solid rgb(26, 26, 26);
		cursor: pointer;
	`;

	return (
		<StyledCardContainer layout whileTap={{ scale: .975 }}>
			<motion.div layout
				animate={{ backdropFilter: isBeingPressed ? 'blur(5px)' : 'none' }}
				style={{ borderRadius: 'inherit', height: '100%', width: '100%' }}
			>
				{props.children}
			</motion.div>
		</StyledCardContainer>
	);
};

interface ICardInfo {
	name: string;
	description?: string;
}

export const Info: React.FC<ICardInfo> = ({ name, description }) => {
	let ComposedFlexGrid = styled(FlexGrid).attrs({
		className: "bottom-0 h-auto absolute w-full"
	})`
		background: transparent;
	`;
	
	return (
		<ComposedFlexGrid>
			<FlexRow>
				<FlexColumn spaced style={{ padding: '0 1vw' }}>
					<Title style={{ fontSize: '3vw' }}>{name}</Title>
					<Paragraph style={{ fontSize: '.9vw', marginBottom: '1vw' }}>{description}</Paragraph>
				</FlexColumn>
			</FlexRow>
		</ComposedFlexGrid>
	);
}

export const Card = { Container, Info };