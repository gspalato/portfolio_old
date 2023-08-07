import {
	faArrowRightFromBracket,
	faBolt,
	faClock,
	faCompass,
	faDroplet,
	faHouse,
	faLayerGroup,
	faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import classes from '@/lib/classes';

import PolygonIcon from '@/assets/img/Polygon.svg';

import Styles from './DashboardNavbar.module.sass';

import { DashboardNavbarButton } from '.';

interface DashboardNavbarProps extends React.PropsWithChildren {
	className?: string;
	position?: 'side' | 'bottom';
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = (props) => {
	const { children, className, position } = props;

	const buttonMode = position == 'side' ? 'list' : 'block';
	const logoSize = position == 'side' ? 25 : 35;
	const isInStandaloneMode = (): boolean => ('standalone' in window.navigator) && (!!window.navigator.standalone);

	const classNames = classes(
		'flex w-[12rem] border-r border-overlays-0 bg-accents-0',
		position == 'side' && 'h-full w-[12rem] flex-col side',
		position == 'bottom' &&
			'h-[4rem] w-[100vw] max-w-[100vw] flex-row overflow-x-scroll bottom sm:justify-center',
		position == 'bottom' && Styles.hideScrollbar,
		className
	);

	const infoClassNames = classes(
		'flex flex-row items-center justify-between border-overlays-0 pl-4 pr-2',
		position == 'side' && 'h-[3rem] border-b',
		position == 'bottom' &&
			'!aspect-square h-full w-auto !justify-center border-r !pl-2'
	);

	const groupClassNames = classes(
		'flex w-fit',
		position == 'side' && 'flex-col',
		position == 'bottom' && 'flex-row'
	);

	return (
		<div className={classNames}>
			<div className={infoClassNames}>
				<img
					src={PolygonIcon}
					height={logoSize}
					width={logoSize}
					className='rounded-full'
				></img>
				{position == 'side' && (
					<Link
						to='/'
						className='z-10 flex h-4 w-4 cursor-none items-center justify-center p-4 text-[#ffffff22] transition-colors duration-100 hover:text-[#ffffff55]'
					>
						<FontAwesomeIcon
							icon={faArrowRightFromBracket}
							style={{ color: 'inherit' }}
						/>
					</Link>
				)}
			</div>
			<div className={groupClassNames}>
				{position == 'side' && (
					<h3 className='font-regular ml-4 w-full py-2 pt-6 font-display text-sm text-accents-4'>
						Foundation
					</h3>
				)}
				<DashboardNavbarButton
					text='Overview'
					value='Overview'
					icon={faHouse}
					mode={buttonMode}
				/>
				<DashboardNavbarButton
					text='Service Catalog'
					value='Service Catalog'
					icon={faCompass}
					mode={buttonMode}
				/>
				<DashboardNavbarButton
					text='Flow'
					value='Flow'
					icon={faBolt}
					mode={buttonMode}
				/>
				<DashboardNavbarButton
					text='Deploys'
					value='Deploys'
					icon={faRocket}
					mode={buttonMode}
				/>
				<DashboardNavbarButton
					text='Cron Jobs'
					value='Cron Jobs'
					icon={faClock}
					mode={buttonMode}
				/>
				<DashboardNavbarButton
					text='Environments'
					value='Environments'
					icon={faLayerGroup}
					mode={buttonMode}
				/>
			</div>
			<div className={classes(groupClassNames, 'border-l border-overlays-0')}>
				{position == 'side' && (
					<h3 className='font-regular ml-4 w-full py-2 font-display text-sm text-accents-4'>
						Projects
					</h3>
				)}
				<DashboardNavbarButton
					text='UPx Refill Station'
					value='UPx Refill Station'
					icon={faDroplet}
					mode={buttonMode}
				/>
			</div>
			{children}
		</div>
	);
};

export default DashboardNavbar;
