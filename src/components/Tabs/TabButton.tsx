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
		'flex cursor-none items-center justify-center rounded-[0.3rem] px-5 py-[.175rem] font-display text-[0.75rem] font-normal leading-[16px] text-white transition-colors md:py-1',
		currentTab == value ? 'bg-overlays-5' : 'bg-transparent',
		className
	);

	return (
		<button className={classNames} onClick={() => setCurrentTab(value)}>
			<h2 style={{ fontFamily: 'inherit' }}>{text}</h2>
		</button>
	);
};

Component.displayName = 'TabButton';

export default Component;
