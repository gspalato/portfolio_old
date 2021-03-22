import { motion } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
export const Section = styled(motion.div, {
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