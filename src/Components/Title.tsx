import React from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
var STitle = styled(motion.h1, {
    color: '#ffffff',
    fontFamily: '$inter',
	fontSize: '4vw',
    fontWeight: 600,
    height: 'fit-content',
    marginBlockEnd: '0',
    marginBlockStart: '0',
    userSelect: 'none',
});

// Component
interface ITitleProps {
    style?: MotionStyle,
}

export const Title: React.FC<ITitleProps> = props => {
    return (
        <STitle style={{ ...props.style }}>
            {props.children}
        </STitle>
    );
}