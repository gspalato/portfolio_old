import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'node-uuid';


// Component
interface IPageProps {
    className?: string;
    compensateNavbar?: boolean;
}

export const Page: React.FC<IPageProps> = ({ className, children, compensateNavbar, ...props }) => {
    return (
        <motion.div {...props}
        className={`w-full bg-[#000] overflow-x-hidden ${className ?? ""}
        ${compensateNavbar ? "h-[calc(100vh-17rem)] max-h-max" : "h-screen"}`}
        key={uuid()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}>
            {children}
        </motion.div>
    );
}