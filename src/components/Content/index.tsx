import { AnimatePresence } from 'framer-motion';
import React from 'react';

import classes from '@lib/classes';
import { useLayout } from '@lib/layout';

const Component: React.FC<React.PropsWithChildren> = (props) => {
	const { contentScrollable } = useLayout();

	const classNames = classes(
		'relative z-[1] h-full w-full',
		contentScrollable && 'overflow-y-scroll'
	);

	return (
		<div id='wrapper' className='relative h-full w-full'>
			<main id='content' className={classNames}>
				<AnimatePresence mode='wait'>{props.children}</AnimatePresence>
			</main>
		</div>
	);
};

export default Component;
