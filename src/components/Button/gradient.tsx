'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Styles from './gradient.module.sass';

interface IGradientButtonProps extends React.PropsWithChildren {
    className?: string;
    text: string;
    link?: string;
    onClick?: () => void;
    background: string;
    backgroundHover?: string;
    backgroundPress?: string;
    overlay?: string;
    overlayHover?: string;
    textColor?: string;
    textHover?: string;
    [key: string]: any;
}

const ButtonComponent: React.FC<IGradientButtonProps> = (props) => {
    const {
        children,
        className,
        text,
        link,
        onClick,
        background,
        backgroundHover,
        backgroundPress,
        overlay,
        overlayHover,
        textColor,
        textHover,
        ...moreProps
    } = props;

    const classNames = [Styles.buttonInner, className].join(' ');

    return (
        <motion.div
            whileHover={{
                scale: 1,
                background: props.backgroundHover ?? background
            }}
            whileTap={{
                scale: 0.975,
                background: props.backgroundPress ?? background
            }}
            transition={{
                duration: 0.2 
            }}

            className={Styles.buttonOuter}
            style={{ background }}
            onClick={(() => onClick?.())}
            {...moreProps}
        >
            <motion.h1
                initial={{
                    background: props.overlayHover ?? '#000'
                }}
                whileHover={{
                    background: props.overlayHover ?? '#00000000',
                    color: props.textHover ?? '#000',
                }}
                transition={{
                    duration: 0.1, ease: [.53, -0.01, .44, 1.02]
                }}

                className={classNames}
                style={{
                    color: props.textColor ?? '#fff',
                    transition: 'background 0.1s',
                }}
            >
                {text}{children}
            </motion.h1>
        </motion.div>
    );
}

const ButtonWithLinkComponent: React.FC<IGradientButtonProps> = ({ className, text, link, onClick, children, ...props }) => {
    return link ? (
        <Link href={link!}>
            <ButtonComponent className={className} text={text} onClick={onClick} {...props}>
                {children}
            </ButtonComponent>
        </Link>
    ) : (
        <ButtonComponent className={className} text={text} onClick={onClick} {...props}>
            {children}
        </ButtonComponent>
    );
}

export default ButtonWithLinkComponent;