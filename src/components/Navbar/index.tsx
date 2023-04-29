'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Bare as Button } from '@/components/Button';
import MenuButton from './MenuButton';
import NavbarLink from './NavbarLink';

import Styles from './navbar.module.sass';

import Routes from '@/constants/routes.json';

interface INavbarProps extends React.PropsWithChildren {
    className?: string;
}

const Navbar: React.FC<INavbarProps> = (props) => {
    const {
        children,
        className,
    } = props;

    const classNames = [Styles.navbarWrapper, className].join(' ');
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <>
        <motion.nav className={classNames}>
            <div className={Styles.navbarInner}>
                <Image src='/vercel.svg' alt="" height={100} width={100} style={{ filter: 'invert(1)' }} />
                <MenuButton isNavbarExpanded={isExpanded} onClick={(() => setIsExpanded(!isExpanded))}/>
            </div>
        </motion.nav>
        <AnimatePresence mode='wait'>
            {
                isExpanded && (
                    <motion.div
                        className={Styles.navbarContent}

                        initial={{
                            display: 'none',
                            opacity: 0,
                            pointerEvents: 'none',
                        }}
                        animate={{
                            display: 'flex',
                            opacity: 1,
                            pointerEvents: 'all',
                        }}
                        exit={{
                            opacity: 0,
                            pointerEvents: 'none',
                        }}

                        style={{
                            backdropFilter: isExpanded ? 'blur(5px)' : 'blur(0px)',
                        }}
                    >
                        <motion.div className={Styles.navbarItemContainer}>
                        {
                            Routes.routes.map((route, _) => {
                                return (
                                    <NavbarLink
                                        link={route.link}
                                        name={route.name}

                                        initial={{
                                            opacity: 0,
                                            x: 100,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: 100,
                                        }}
                                    />
                                );
                            })
                        }
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    </>
    );
}

export default Navbar;