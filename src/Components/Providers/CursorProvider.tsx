import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { styled } from "../../stitches.config";


// Styles
let CursorComponent = styled(motion.div, {
    background: '#ffffff',
    borderRadius: '50%',
    height: '10px',
    pointerEvents: 'none',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: '10px',
    zIndex: 1000,
});

// Main component
type CursorHandler = (cursorType: string | boolean) => void;

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left'];

export const CursorContext = React.createContext<CursorHandler | null>(null);

const CursorProvider: React.FC = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursor, setCursor] = useState<string | boolean>(false);

    const onMouseMove = (event: MouseEvent) => {
        const { pageX, pageY } = event;
        setMousePosition({ x: pageX, y: pageY });
    };

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    });

    const { x, y } = mousePosition;

    const onCursor = (cursorType: string | boolean) => {
        cursorType = (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
        setCursor(cursorType);
    };

    return (
        <CursorContext.Provider value={onCursor}>
            <CursorComponent
                animate={{
                    left: x,
                    top: y,
                }}
                transition={{
                    duration: .0015,
                }}
            />
            {children}
        </CursorContext.Provider>
    );
};

export default CursorProvider;
