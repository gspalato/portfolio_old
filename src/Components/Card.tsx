import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';

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

    const containerElement = React.useRef().current;

    const StyledCardContainer = styled(motion.div, {
        background: `linear-gradient(0deg, #000, rgba(0, 0, 0, 0) 100%) url(${props.image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: '1px solid rgb(26, 26, 26)',
        borderRadius: '10px',
        cursor: 'pointer',
        height: '15vw',
        minHeight: '290px',
        minWidth: '485px',
        position: 'relative',
        width: '25vw',

        '&::after': {
            backdropFilter: isBeingPressed ? 'blur(5px)' : '',
            content: '',
            height: '100%',
            position: 'absolute',
            width: '100%',
            zIndex: 2,
        },
    });

    let onCursor = useContext(CursorContext);
    return (
        <StyledCardContainer
            onMouseEnter={() => onCursor?.('pointer')}
            onMouseLeave={() => onCursor?.(false)}
            whileTap={{ scale: .97 }}

            css={{  }}
        >
            {props.children}
        </StyledCardContainer>
    );
};

interface ICardInfo {
    name: string;
    description?: string;
}

export const Info: React.FC<ICardInfo> = ({ name, description }) => {
    let ComposedFlexGrid = styled(FlexGrid, {
        background: 'transparent',
        bottom: '0px',
        height: 'fit-content',
        position: 'absolute',
        width: '100%',
        zIndex: 3,
    });
    
    return (
        <ComposedFlexGrid>
            <FlexRow>
                <FlexColumn spaced css={{ padding: '0 1vw' }}>
                    <Title css={{ fontSize: '3vw' }}>{name}</Title>
                    <Paragraph css={{ fontSize: '.9vw', marginBottom: '1vw' }}>{description}</Paragraph>
                </FlexColumn>
            </FlexRow>
        </ComposedFlexGrid>
    );
}

export const Card = { Container, Info };