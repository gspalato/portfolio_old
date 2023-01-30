import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

export enum ImageFit {
    cover = "object-cover",
    contain = "object-contain",
    fill = "object-fill",
    none = "object-none",
    scaleDown = "object-scale-down"
}

interface IBackgroundProps {
    children?: any;
    className?: string;
    fit?: ImageFit;
    darkOverlay?: boolean;
    src: any;
}

const Background: React.FC<IBackgroundProps> = ({ children, className, fit, darkOverlay, src }) => {
    const [domReady, setDomReady] = React.useState(false);

    React.useEffect(() => {
        setDomReady(true);

        return () => setDomReady(false);
    });

    const nodes = (
        <>
            <motion.img
                className={`absolute md:w-full h-full w-auto ${fit ?? "object-cover"} ${className}`}
		    	src={src}
                key={uuid()}

                initial={{ opacity: 0 }}
		    	animate={{ opacity: 1, filter: "brightness(0.5)" }}
		    	exit={{ opacity: 0 }}
		    	transition={{ delay:.5, duration: 0.75 }}
            />
            {darkOverlay ? <div className="absolute w-full h-full bg-overlay-transparent" /> : null}
            {children}
        </>
    );

    return domReady ? createPortal(nodes, document.getElementById("background")!) : null;
}

export default Background;