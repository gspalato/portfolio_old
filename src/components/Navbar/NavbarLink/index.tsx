'use client';

import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import Link from 'next/link';

import Styles from './navbarLink.module.sass';

interface INavbarLinkProps extends HTMLMotionProps<'h1'> {
    className?: string;
    link: string;
    name: string;
    [key: string]: any;
}

const NavbarLink: React.FC<INavbarLinkProps> = (props) => {
    const {
        className,
        link,
        name,
        ...moreProps
    } = props;

    const classNames = [Styles.link, className].join(' ');

    return (
        <Link href={link}>
            <motion.h1 className={classNames} {...moreProps}>
                {name}
            </motion.h1>
        </Link>
    );
}

export default NavbarLink;