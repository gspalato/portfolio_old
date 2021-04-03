import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { styled } from "../../stitches.config";
import tw from 'twin.macro';


// Styles
let CursorComponent = styled(motion.div, {
    ...tw`
        absolute
        bg-white
        h-2
        pointer-events-none
        rounded-full
        transform
        -translate-x-2/4
        -translate-y-2/4
        w-2
        z-10
    `,
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
