'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { v4 as uuid } from 'uuid';

import MenuButton from './MenuButton';
import NavbarLink from './NavbarLink';

import Styles from './navbar.module.sass';

import Routes from '@/constants/routes.json';

const WrapperVariants = {
    initial: {
        opacity: 0,
        y: -100,
        transition: {
            duration: .3
        }
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            delay: .3,
            duration: .3
        }
    }
}

const LinkVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.15 + .3
        }
    })
}

interface INavbarProps extends React.PropsWithChildren {
    className?: string;
}

const Navbar: React.FC<INavbarProps> = (props) => {
    const {
        className,
    } = props;

    const classNames = [Styles.navbarWrapper, className].join(' ');
    const [isExpanded, setIsExpanded] = React.useState(false);
    
    // Sequential animation. Doesn't work as intended.
    /*
    const wrapperAnimation = useAnimation();
    const linkAnimation = useAnimation();
  
    useEffect(() => {
        const openAnimation = async () => {
            await wrapperAnimation.start(WrapperVariants.animate);

            await linkAnimation.start(LinkVariants.animate);
        }

        const closeAnimation = async () => {
            await linkAnimation.start(LinkVariants.initial);

            await wrapperAnimation.start(WrapperVariants.initial);
        }

        if (isExpanded)
            openAnimation()
        else
            closeAnimation()
    }, [isExpanded, linkAnimation, wrapperAnimation])
    */

    return (
        <>
            <motion.nav className={classNames}>
                <div className={Styles.navbarInner}>
                    <img src='/favicon.ico' alt="" height={30} width={30} style={{ filter: 'invert(0)' }} />
                    <MenuButton isNavbarExpanded={isExpanded} onClick={(() => setIsExpanded(!isExpanded))}/>
                </div>
            </motion.nav>
            <AnimatePresence mode='wait'>
            {
                isExpanded && (
                    <motion.div
                        className={Styles.navbarContent}

                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={WrapperVariants}

                        style={{
                            pointerEvents: isExpanded ? 'all' : 'none',
                            backdropFilter: isExpanded ? 'blur(7px)' : 'blur(0px)',
                        }}
                    >
                        <motion.div className={Styles.navbarItemContainer}>
                        {
                            Routes.routes.map((route, i) => (
                                <NavbarLink
                                    link={route.link}
                                    name={route.name}
                                    setState={setIsExpanded}

                                    key={uuid()}
                                    custom={i}
                                    initial="initial"
                                    animate="animate"
                                    exit="initial"
                                    variants={LinkVariants}
                                />
                            ))
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