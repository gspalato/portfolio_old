import { motion } from 'framer-motion';

import { useTabs } from './Tabs';

import classes from '@/lib/classes';

interface ITabButtonProps {
	className?: string;
	text: string;
	value: string;
}

const Component: React.FC<ITabButtonProps> = (props) => {
	const { className, text, value } = props;
	const { currentTab, setCurrentTab } = useTabs();

	const classNames = classes(
		'rounded-md px-5 py-1 text-sm font-medium text-white transition-colors border border-border cursor-none',
		currentTab == value ? 'bg-background' : '#fff',
		className
	);

	return (
		<button className={classNames} onClick={() => setCurrentTab(value)}>
			<h2>{text}</h2>
		</button>
	);
};

export default Component;
