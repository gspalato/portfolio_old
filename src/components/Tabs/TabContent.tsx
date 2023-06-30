import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { v4 as uuid } from 'uuid';

import { useTabs } from './Tabs';

interface ITabContentProps extends React.PropsWithChildren {
	animate?: boolean;
}

const Component: React.FC<ITabContentProps> = (props) => {
	const { animate = true, children } = props;
	const { currentTab } = useTabs();

	return animate ? (
		<AnimatePresence mode='wait'>{children}</AnimatePresence>
	) : (
		<>{children}</>
	);
};

Component.displayName = 'TabContent';

export default Component;
