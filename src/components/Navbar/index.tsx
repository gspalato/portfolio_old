'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion, useAnimate, useAnimation, usePresence } from 'framer-motion';
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

    const [isPresent, safeToRemove] = usePresence()
    
    const navigationAnimation = useAnimation();
    const linkAnimation = useAnimation();
  
    useEffect(() => {
        if (isExpanded) {
            const enterAnimation = async () => {
                linkAnimation.start((i) => ({
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.1 }
                }));
            }
            enterAnimation()
        } else {
            const exitAnimation = async () => {
                linkAnimation.start((i) => ({
                    opacity: 0,
                    x: 200,
                    transition: { delay: i * 0.1 }
                }));
            }
            exitAnimation()
        }
    }, [isExpanded])

    return (
        <>
        <motion.nav className={classNames}>
            <div className={Styles.navbarInner}>
                <Image src='/favicon.ico' alt="" height={30} width={30} style={{ filter: 'invert(0)' }} />
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
                            transition: {
                                type: 'tween',
                                ease: 'easeInOut',
                                damping: 10,
                                duration: .5,
                            }
                        }}
                        exit={{
                            opacity: 0,
                            pointerEvents: 'none',
                            transition: {
                                type: 'tween',
                                ease: 'easeInOut',
                                damping: 10,
                                duration: .5,
                            }
                        }}

                        style={{
                            backdropFilter: isExpanded ? 'blur(7px)' : 'blur(0px)',
                        }}
                    >
                        <motion.div className={Styles.navbarItemContainer}>
                        {
                            Routes.routes.map((route, i) => (
                                    <NavbarLink
                                        link={route.link}
                                        name={route.name}

                                        key={window.crypto.randomUUID()}
                                        custom={i}
                                        initial={{ x: 200, opacity: 0 }}
                                        animate={linkAnimation}
                                    />
                                )
                            )
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