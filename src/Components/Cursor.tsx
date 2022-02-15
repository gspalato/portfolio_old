import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor: React.FC = (props) => {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const auraX = useMotionValue(-100);
	const auraY = useMotionValue(-100);

	const auraXSpring = useSpring(auraX, { damping: 50, stiffness: 500 });
	const auraYSpring = useSpring(auraY, { damping: 50, stiffness: 500 });

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

			auraX.set(e.clientX - 10);
			auraY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

	return (
		<>
			<motion.div
    	  className="fixed top-0 left-0 h-[5px] w-[5px] rounded-full bg-scheme-offwhite pointer-events-none"
    	  style={{
    	    translateX: cursorX,
    	    translateY: cursorY,
    	  }}
    	/>
			<motion.div
				className="fixed top-0 left-0 h-[25px] w-[25px] rounded-full bg-scheme-offwhite opacity-10 pointer-events-none"
				style={{
					translateX: auraXSpring,
					translateY: auraYSpring,
				}}
				transition={{
					duration: 0.5
				}}
			/>
		</>
	)
}
