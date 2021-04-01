import { motion  } from 'framer-motion';
import classnames from 'classnames';
import styled from 'styled-components';

// Styles
export const Title = styled(motion.h1).attrs({
    className: classnames(
        "font-display",
        "font-semibold",
        "h-auto",
        "text-9xl",
        "text-white",
        "select-none",
    ),
})``;