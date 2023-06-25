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

interface ICarouselProps extends HTMLMotionProps<'div'> {
	children?: React.ReactNode;
	className?: string;
	scrollWidthSetter?: (width: number) => void;
}

const Component = (props: ICarouselProps) => {
	const { children, ...rest } = props;

	const carousel = useRef<HTMLDivElement | null>(null);
	const innerCarousel = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState(0);

	const controls = useDragControls();

	const startDrag = (e: any) => {
		controls.start(e);
	};

	useEffect(() => {
		const handleWidth = () => {
			console.log(carousel.current);

			if (!carousel.current) return;

			setWidth(carousel.current.scrollWidth);
			rest.scrollWidthSetter?.(carousel.current.scrollWidth);
			console.log(width);
		};

		window.addEventListener('resize', handleWidth);
		handleWidth();

		return () => window.removeEventListener('resize', handleWidth);
	}, []);

	return (
		<motion.div ref={carousel} className={props.className}>
			<motion.div
				ref={innerCarousel}
				dragConstraints={{ right: 0, left: -width }}
				className={classes(
					'inner-carousel flex h-full w-min items-center justify-center gap-8 overflow-hidden'
				)}
				onPointerDown={startDrag}
			>
				{React.Children.map(children, (child, index) => (
					<motion.div
						className='carousel-item'
						key={index}
						whileHover={{ size: 1.125 }}
					>
						{child}
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Component;
