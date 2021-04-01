import { motion } from 'framer-motion';
import classnames from 'classnames';
import styled from 'styled-components';

// Styles
export const Paragraph = styled(motion.p).attrs({
    className: classnames(
        "h-auto",
        "font-body",
        "leading-7",
        "my-2.5",
        "text-2xl",
        "text-white",
        "select-none",
    ),
})``;