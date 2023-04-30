'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import Styles from './menuButton.module.sass';


interface IMenuButtonProps {
    className?: string;
    isNavbarExpanded?: boolean;
    onClick?: () => void;
    [key: string]: any;
}

const MenuButtonComponent: React.FC<IMenuButtonProps> = (props) => {
    const {
        className,
        isNavbarExpanded,
        onClick,
        ...moreProps
    } = props;

    const classNames = [Styles.button, className].join(' ');

    return (
        <motion.button
            whileHover={{
                scale: 1.125,
            }}
            whileTap={{
                scale: 0.975
            }}
            transition={{
                duration: 0.2
            }}

            className={classNames}
            onClick={(() => onClick?.())}
            {...moreProps}
        >
            <AnimatePresence>
                {
                    isNavbarExpanded
                    ? ( <FontAwesomeIcon icon={faXmark} /> )
                    : ( <FontAwesomeIcon icon={faBars} /> )
                }
            </AnimatePresence>
        </motion.button>
    );
}

export default MenuButtonComponent;