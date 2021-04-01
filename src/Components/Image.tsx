import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import styled from 'styled-components';

// Styles
const SImage = styled(motion.img)`
    border: 0;
    outline: 0;
    &:before {
        content: "";
    }
`;

// Main component
interface IImageProps extends HTMLMotionProps<"img"> { };

export const Image: React.FC<IImageProps> = props => (
    <SImage {...props} />
);