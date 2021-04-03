import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import tw from 'twin.macro';

import { FlexGrid, FlexColumn, FlexRow } from './FlexGrid';
import { Paragraph } from './Paragraph';
import { Title } from './Title';


// Main component
interface ICardContainerProps extends ExtraProps {
	image?: string,
};

const Container: React.FC<ICardContainerProps> = props => {
	const [isBeingPressed, setIsBeingPressed] = useState(false);

	const StyledCardContainer = styled(motion.div, {
		...tw`
			bg-center
			bg-no-repeat
			bg-cover
			border
			border-gray-900
			h-60
			w-1/3
			rounded-md
			relative
			text-5xl
		`,

		background: 'rgba(255, 255, 255, .05)',
		border: '1px solid rgb(26, 26, 26)',
		cursor: 'pointer',
	});

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
	let ComposedFlexGrid = styled(FlexGrid, {
		...tw`
			bottom-0
			h-auto
			absolute
			w-full
		`,

		background: 'transparent',
	});
	
	return (
		<ComposedFlexGrid>
			<FlexRow>
				<FlexColumn spaced style={{ padding: '0 1rem' }}>
					<Title style={{ fontSize: '3vw', textAlign: 'left' }}>{name}</Title>
					<Paragraph style={{ fontSize: '.9vw', marginBottom: '1vw' }}>{description}</Paragraph>
				</FlexColumn>
			</FlexRow>
		</ComposedFlexGrid>
	);
}

export const Card = { Container, Info };