'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@/styles';
import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';

import Styles from './background.module.sass';

export enum ImageFit {
    cover = "object-cover",
    contain = "object-contain",
    fill = "object-fill",
    none = "object-none",
    scaleDown = "object-scale-down"
}

interface IBackgroundProps extends React.PropsWithChildren {
    children?: any;
    className?: string;
    fit?: ImageFit;
    darken?: boolean;
    src: any;
}

const Background: React.FC<IBackgroundProps> = (props) => {
    const {
        children,
        className,
        fit,
        darken,
        src
    } = props;

    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        setDomReady(true);
        return () => setDomReady(false);;
    });

    let objectFit: string = fit?.toString() ?? 'cover';

    const nodes = (
        <motion.div
            key={crypto.randomUUID()}
            
            style={{ position: 'absolute', height: '100%', width: '100%' }}

            initial={{ opacity: 0 }}
		    animate={{ opacity: 1, filter: "brightness(0.5)" }}
		    exit={{ opacity: 0 }}
		    transition={{ delay:.5, duration: 0.75 }}
        >
            {children}
            {darken && <div className={Styles.overlay} key="dark-overlay" /> }
            {
                React.createElement(motion(Image), {
                    className: className ?? "",
		    	    src: src,
                    alt: "",
                    quality: 50,
                    fill: true,
                    style: {
                        position: 'absolute',
                        filter: "blur(10px)",
                    },
                })
            }
        </motion.div>
    );

    return domReady ? ReactDOM.createPortal(nodes, document.getElementById("background")!) : null;
}

export default Background;