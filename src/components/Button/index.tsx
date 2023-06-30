import { HTMLMotionProps, motion } from "framer-motion";

import classes from "@/lib/classes";
import { Link } from "react-router-dom";
import React from "react";

const ButtonVariants = {
    background: {
        fill: 'bg-shadowy',
        none: '',
        transparent: 'bg-transparent',
    }
};

interface IButtonProps extends HTMLMotionProps<'button'> {
    background?: keyof typeof ButtonVariants['background'];
	className?: string;
    link?: string;
	onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Component: React.FC<IButtonProps> = (props) => {
	const { background, children, className, ...rest } = props;

    const classNames = classes(
        `
        flex
        justify-center
        items-center
        bg-transparent
        p-2
        outline-none
        duration-100
        ease-in-out
        transition-all
        rounded-md
        z-[100]
        cursor-none
        text-sm
        font-display
        font-thin
        `,
        background ? ButtonVariants.background[background] : ButtonVariants.background.transparent,
        className
    );

    const Wrapper = props.link ? Link : React.Fragment;

    return (
        <Wrapper
            to={props.link ?? ''}
            target={props.link?.startsWith('/') ? '' : '_blank'}
            rel={props.link?.startsWith('/') ? '' : 'noopener noreferrer'}
            onClick={() => props.onClick?.()}
        >
            <motion.button
                className={classNames}
                whileHover={{ scale: 1.025 }}
                transformTemplate={({ scale }) => `scale(${scale})`}
                {...rest}
            >
                {children}
            </motion.button>
        </Wrapper>
    );
};

export default Component;
