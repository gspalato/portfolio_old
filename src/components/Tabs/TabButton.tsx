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
		'cursor-none rounded-[0.3rem] px-5 py-[.175rem] text-[.65rem] font-medium text-white transition-colors @2xl:min-w-[90px] md:py-1',
		currentTab == value ? 'bg-overlays-5' : 'bg-transparent',
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
