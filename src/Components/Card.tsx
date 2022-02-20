import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

// Styles
let Container = `flex flex-col justify-center items-center
backdrop-blur-md bg-overlay-transparent
border border-solid border-border/50
p-6 left-4 rounded-xl min-h-[20rem] w-[15rem]`;

// Component
interface ICardProps extends HTMLMotionProps<"div"> {
    className?: string,
    image: any,
    title: string,
    description: string,
}

export const Card: React.FC<ICardProps> = ({ className, image, title, description, children, ...props }) => {
    return (
        <motion.div className={`${Container} ${className ?? ""}`} {...props}>
            <img src={image} className="rounded-full h-24 w-24"/>
            <h1 className="text-offwhite font-display text-2xl
            font-bold my-4 active:brightness-75
            transition-all">
                {title}
            </h1>
            <div className="flex justify-center items-center flex-1 w-full">
                <p className="text-offwhite
                font-body text-base text-center mb-6 break-words">
                    {description}
                </p>
            </div>
            {children}
        </motion.div>
    );
}