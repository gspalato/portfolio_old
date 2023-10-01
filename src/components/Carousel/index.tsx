import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import React, { useState } from 'react';

import classes from '@lib/classes';

interface ICarouselProps extends HTMLMotionProps<'div'> {
	children: React.ReactNode[];
	className?: string;
	data: any[];
}

const Component = (props: ICarouselProps) => {
	const { children, className, data } = props;

	const [current, setCurrent] = useState(0);

	return (
		<div className={Styles.container(className)}>
			<div className='flex h-full w-full flex-row items-center justify-center gap-8'>
				<button
					className='transition-200 aspect-square h-12 w-12 cursor-none rounded-full border text-xl transition-all hover:bg-white hover:text-[#000]'
					onClick={() =>
						setCurrent((p) => (p == 0 ? data.length - 1 : p - 1))
					}
				>
					🠔
				</button>
				<div className='flex h-full max-w-[90%] flex-1 flex-row'>
					<AnimatePresence mode='wait'>
						{
							<motion.div
								key={current}
								className='flex h-full w-full flex-1 items-center justify-center'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.1 }}
							>
								{children[current]}
							</motion.div>
						}
					</AnimatePresence>
				</div>
				<button
					className='transition-200 aspect-square h-12 w-12 cursor-none rounded-full border text-xl transition-all hover:bg-white hover:text-[#000]'
					onClick={() =>
						setCurrent((p) => (p == data.length - 1 ? 0 : p + 1))
					}
				>
					🠖
				</button>
			</div>
			<div className='flex h-8 w-full flex-row items-center justify-center gap-2 pt-2'>
				{data.map((_, i) => {
					return <div className={Styles.indicator(i == current)} />;
				})}
			</div>
		</div>
	);
};

Component.displayName = 'Carousel';

export default Component;

const Styles = {
	container: (className?: string) => classes('flex flex-col px-6', className),
	indicator: (selected?: boolean) =>
		classes(
			'transition-200 aspect-square h-3 w-3 rounded-full border transition-all',
			selected ? 'w-8 bg-white' : 'bg-transparent'
		),
};
