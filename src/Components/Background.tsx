import React from 'react';
import {createPortal} from 'react-dom';
import { HTMLMotionProps, motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

interface IBackgroundProps {
    children?: any;
    src: any;
    darkOverlay: boolean;
}

const Background: React.FC<IBackgroundProps> = ({ src, darkOverlay, children }) => {
    const [domReady, setDomReady] = React.useState(false);

    React.useEffect(() => {
        setDomReady(true);
    });

    const nodes = (
        <>
            <motion.img
                className="absolute md:w-full h-full w-auto object-cover"
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