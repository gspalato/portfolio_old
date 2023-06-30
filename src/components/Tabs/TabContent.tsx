import { AnimatePresence } from 'framer-motion';
import React from 'react';

interface ITabContentProps extends React.PropsWithChildren {
	animate?: boolean;
}

const Component: React.FC<ITabContentProps> = (props) => {
	const { animate = true, children } = props;

	return animate ? (
		<AnimatePresence mode='wait'>{children}</AnimatePresence>
	) : (
		<>{children}</>
	);
};

Component.displayName = 'TabContent';

export default Component;
