import React, { PropsWithChildren, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';


// Component
interface IPageProps extends PropsWithChildren {
    className?: string;
    compensateNavbar?: boolean;
}

const Page: React.FC<IPageProps> = ({ className, children, compensateNavbar, ...props }) => {
    return (
        <motion.div {...props}
        className={`w-full bg-[#000] overflow-x-hidden ${className ?? ""} h-full`}
        key={uuid()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}>
            {children}
        </motion.div>
    );
}

export default Page;