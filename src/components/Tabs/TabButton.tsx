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
		'rounded-md px-5 py-1 text-xs font-medium text-white transition-colors cursor-none @2xl:min-w-[90px] shadow-md',
		currentTab == value ? 'bg-background' : 'bg-overlay',
		className
	);

	return (
		<button className={classNames} onClick={() => setCurrentTab(value)}>
			<h2>{text}</h2>
		</button>
	);
};

Component.displayName = 'TabButton';

export default Component;