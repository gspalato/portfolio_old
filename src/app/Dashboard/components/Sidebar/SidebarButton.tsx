import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTabs } from '@/components/Tabs';

import classes from '@lib/classes';
import { CSSProperties } from 'react';

interface ISidebarButtonProps {
	className?: string;
	icon: IconProp;
	iconStyle?: CSSProperties;
	text: string;
	value: string;
}

const Component: React.FC<ISidebarButtonProps> = (props) => {
	const { className, icon, iconStyle, text, value } = props;
	const { currentTab, setCurrentTab } = useTabs();

	const classNames = classes(
		'flex cursor-none items-center justify-center rounded-[0.3rem] px-4 py-[.175rem] font-display text-[0.75rem] font-normal leading-[16px] text-white transition-colors md:py-1',
		currentTab == value ? 'bg-overlays-5' : 'bg-transparent',
		'mx-2 !justify-start rounded-[3px] !text-start text-sm font-medium',
		className
	);

	return (
		<button className={classNames} onClick={() => setCurrentTab(value)}>
			<FontAwesomeIcon icon={icon} size='sm' color='#eeeeee' style={{ paddingRight: '10px', width: '1rem', ...iconStyle }} />
			<h2 style={{ fontFamily: 'inherit' }}>{text}</h2>
		</button>
	);
};

Component.displayName = 'SidebarButton';

export default Component;
