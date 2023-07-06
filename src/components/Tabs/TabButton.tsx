import classes from '@lib/classes';

import { useTabs } from './Tabs';

interface ITabButtonProps {
	className?: string;
	text: string;
	value: string;
}

const Component: React.FC<ITabButtonProps> = (props) => {
	const { className, text, value } = props;
	const { currentTab, setCurrentTab } = useTabs();

	const classNames = classes(
		'cursor-none rounded-md px-5 py-1 text-[.65rem] font-medium text-white shadow-md transition-colors @2xl:min-w-[90px]',
		currentTab == value ? 'bg-accents-1' : 'bg-overlays-0',
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
