'use client';

import { AnimatePresence } from 'framer-motion';

const AnimateWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <AnimatePresence mode='wait'>
            {children}
        </AnimatePresence>
    );
}

export default AnimateWrapper;