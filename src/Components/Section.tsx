import classnames from 'classnames';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { styled } from '../stitches.config';

// Styles
export const SSection = styled(motion.div, {
    height: '100vh',
    width: '100%',

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

export const SectionContent = styled(motion.div, {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '10vh auto 0 auto',
    width: '80%',
});

export const InnerSpacing = styled(motion.div, {
    height: 'auto',
    flexGrow: 1,
    margin: '10vh 0 0 0',
    width: '100%',
});


// Main component
interface ISectionProps {
    isFocused?: boolean;
    onSectionFocus?: () => void;

    [key: string]: any;
};

export const Section: React.FC<ISectionProps> = ({ children, isFocused, onSectionFocus, ...rest }) => {
    useEffect(() => {
        if (isFocused)
            onSectionFocus?.();
    }, [isFocused]);

    return (
        <SSection {...rest}>
            {children}
        </SSection>
    );
};