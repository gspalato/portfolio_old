import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTabs } from '@/components/Tabs';

import classes from '@lib/classes';
import { CSSProperties } from 'react';

interface IDashboardNavbarButtonProps {
	className?: string;
	icon: IconProp;
	iconStyle?: CSSProperties;
	mode: 'list' | 'block';
	text: string;
	value: string;
}

const Component: React.FC<IDashboardNavbarButtonProps> = (props) => {
	const { className, icon, iconStyle, mode, text, value } = props;
	const { currentTab, setCurrentTab } = useTabs();

	const isSelected = currentTab == value;

	const classNames = classes(
		'flex cursor-none items-center justify-center font-display text-[0.75rem] font-normal leading-[16px] text-white transition-colors',
		currentTab == value ? 'bg-overlays-5' : 'bg-transparent',
		mode == 'list' && 'rounded-[0.3rem] px-4 py-[.175rem] md:py-1 mx-2 !justify-start !text-start text-sm font-medium',
		mode == 'block' && '!mx-0 !rounded-none !aspect-square !w-[3.75rem]',
		className
	);

	return (
		<button className={classNames} onClick={() => setCurrentTab(value)}>
			<FontAwesomeIcon
				icon={icon}
				size={mode == 'list' ? 'sm' : '2xl'}
				color={mode == 'list' ? '#eeeeee' : (isSelected ? '#eeeeee' : '#ffffff44')}
				style={{
					paddingRight: mode == 'list' ? '10px' : '0px',
					width: mode == 'list' ? '1rem' : '1.5rem',
					transition: '0.2s ease-in-out',
					...iconStyle
				}}
			/>
			{ mode == 'list' && <h2 style={{ fontFamily: 'inherit' }}>{text}</h2> }
		</button>
	);
};

Component.displayName = 'DashboardNavbarButton';

export default Component;
