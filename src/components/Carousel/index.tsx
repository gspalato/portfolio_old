import { HTMLMotionProps, motion, useDragControls } from 'framer-motion';
import React, {
	Ref,
	RefObject,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from 'react';

import classes from '@/lib/classes';
import { v4 as uuid } from 'uuid';

interface ICarouselProps extends HTMLMotionProps<'div'> {
	children?: React.ReactNode;
	className?: string;
	scrollWidthSetter?: (width: number) => void;
}

const Component = (props: ICarouselProps) => {
	const { children, ...rest } = props;

	const carousel = useRef<HTMLDivElement | null>(null);

	const controls = useDragControls();
	const startDrag = (e: any) => {
		controls.start(e);
	};

	return (
		<motion.div ref={carousel} className={props.className}>
			<motion.div
				drag='x'
				dragConstraints={carousel}
				dragControls={controls}
				className={classes(
					'inner-carousel optimize flex h-full w-min items-center justify-center gap-8 overflow-hidden'
				)}
				onPointerDown={startDrag}
			>
				{React.Children.map(children, (child, index) => (
					<motion.div
						className='carousel-item z-[1000]'
						key={index}
						whileHover={{ size: 2 }}
					>
						{child}
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Component;
