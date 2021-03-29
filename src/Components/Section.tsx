import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
export const StyledSection = styled(motion.section, {
    height: '100vh',
    width: '100%',

    margin: '-2.5rem 0 0 0',

    position: 'relative',

    variants: {
        display: {
            flex: {
                display: 'flex',
            }
        },
        direction: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            }
        },
        justify: {
            start: {
                justifyContent: 'flex-start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'flex-end',
            }
        },
        align: {
            start: {
                alignItems: 'flex-start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'flex-end',
            }
        }
    }
});

const Content = styled(motion.div, {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '$sectionMargin $contentMargin 0 $contentMargin',
    width: 'auto',
});

const Spacing = styled(motion.div, {
    height: 'auto',
    flexGrow: 1,
    margin: '$sectionMargin 0 0 0',
    width: '100%',
});


// Main component
interface ISectionContainerProps {
    hero?: true,

    isFocused?: boolean;
    onSectionFocus?: () => void;

    [key: string]: any;
};

export const Container: React.FC<ISectionContainerProps> = ({ children, isFocused, onSectionFocus, ...rest }) => {
    useEffect(() => {
        if (isFocused)
            onSectionFocus?.();
    }, [isFocused]);

    return (
        <StyledSection css={{ margin: rest.hero ? '0' : '' }}  {...rest}>
            {children}
        </StyledSection>
    );
};

export const Section = {
    Container,
    Content,
    Spacing,
};