import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

import Styles from './cursor.module.sass';

const Component: React.FC = () => {
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const auraX = useMotionValue(-100);
	const auraY = useMotionValue(-100);

	const auraXSpring = useSpring(auraX, { damping: 50, stiffness: 500 });
	const auraYSpring = useSpring(auraY, { damping: 50, stiffness: 500 });

	useEffect(() => {
		setIsTouchDevice(
			'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				window.matchMedia('(any-pointer: coarse)').matches
		);
	});

	const [beingClicked, setBeingClicked] = useState(false);

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX);
			cursorY.set(e.clientY);

			auraX.set(e.clientX - 10);
			auraY.set(e.clientY - 10);
		};

		const mouseDownCursor = () => {
			setBeingClicked(true);
		};

		const mouseUpCursor = () => {
			setBeingClicked(false);
		};

		window.addEventListener('mousemove', moveCursor);
		window.addEventListener('mousedown', mouseDownCursor);
		window.addEventListener('mouseup', mouseUpCursor);

		return () => {
			window.removeEventListener('mousemove', moveCursor);
			window.removeEventListener('mousedown', mouseDownCursor);
			window.removeEventListener('mouseup', mouseUpCursor);
		};
	});

	return isTouchDevice ? null : (
		<>
			<motion.div
				className={Styles.cursorInner}
				style={{
					display: isTouchDevice ? 'none' : 'block',
					translateX: cursorX,
					translateY: cursorY,
				}}
			/>
			<motion.div
				className={Styles.cursorOuter}
				style={{
					display: isTouchDevice ? 'none' : 'block',
					translateX: auraXSpring,
					translateY: auraYSpring,
					backgroundColor: beingClicked ? '#066ff' : '',
				}}
				animate={{
					scale: beingClicked ? 0.8 : 1,
				}}
				transition={{
					duration: 0.025,
				}}
			/>
		</>
	);
};

Component.displayName = 'Cursor';

export default Component;
