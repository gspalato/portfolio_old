import { AnimatePresence } from 'framer-motion';

import { useTabs } from './Tabs';

import classes from '@/lib/classes';

interface ITabListProps extends React.PropsWithChildren {
	className?: string;
}

const Component: React.FC<ITabListProps> = (props) => {
	const { className, children } = props;

	const classNames = classes(
		'p-1 bg-secondary flex gap-2 rounded-md',
		className
	);

	return <div className={classNames}>{children}</div>;
};

export default Component;
