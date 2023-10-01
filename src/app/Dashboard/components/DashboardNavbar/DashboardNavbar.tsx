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
import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from '@/lib/classes';
import { useScreenSize } from '@/lib/layout';

import PolygonIcon from '@/assets/img/Polygon.svg';

import Stylesheet from './DashboardNavbar.module.sass';

import { DashboardNavbarButton } from '.';

type DashboardNavbarPosition = 'side' | 'bottom';

type DashboardNavbarProps = {
	className?: string;
	position?: DashboardNavbarPosition;
} & React.PropsWithChildren;

const DashboardNavbar: React.FC<DashboardNavbarProps> = (props) => {
	const { children, className, position } = props;

	const navbar = useRef<any>();
	const { width } = useScreenSize();
	const [isNavbarOverflowing, setNavbarOverflowing] =
		useState<boolean>(false);

	const buttonMode = position == 'side' ? 'list' : 'block';
	const logoSize = position == 'side' ? 25 : 35;

	useLayoutEffect(() => {
		if (position == 'bottom') {
			const navbarWidth = navbar.current.scrollWidth;
			setNavbarOverflowing(navbarWidth > width);
		}
	}, [width]);

	return (
		<div
			className={Styles.container(
				isNavbarOverflowing,
				position,
				className
			)}
			ref={navbar}
		>
			<div className={Styles.infoGroupContainer(position)}>
				<Link
					to='/'
					className='z-10 flex aspect-square h-full cursor-none items-center justify-center text-[#ffffff22] transition-colors duration-100 hover:text-[#ffffff55]'
				>
					<img
						src={PolygonIcon}
						height={logoSize}
						width={logoSize}
						className='rounded-full'
					></img>
				</Link>
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
			<div className={Styles.tabGroupContainer(position)}>
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
			<div
				className={classes(
					Styles.tabGroupContainer(position),
					'border-l border-overlays-0'
				)}
			>
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

const Styles = {
	container: (
		isNavbarOverflowing: boolean,
		position?: DashboardNavbarPosition,
		className?: string
	) =>
		classes(
			'flex border-r border-overlays-0 bg-accents-0',
			position == 'side' && 'side h-full w-[13rem] flex-col',
			position == 'bottom' &&
				'bottom h-[4rem] w-[100vw] max-w-[100vw] flex-row overflow-x-scroll sm:justify-center',
			position == 'bottom' && Stylesheet.hideScrollbar,
			position == 'bottom' && !isNavbarOverflowing && 'justify-center',
			className
		),
	infoGroupContainer: (position?: DashboardNavbarPosition) =>
		classes(
			'flex flex-row items-center justify-between border-overlays-0 pl-4 pr-2',
			position == 'side' && 'h-[3rem] border-b',
			position == 'bottom' &&
				'!aspect-square h-full w-auto !justify-center border-r !p-0'
		),
	tabGroupContainer: (position?: DashboardNavbarPosition) =>
		classes(
			'flex w-fit',
			position == 'side' && 'flex-col',
			position == 'bottom' && 'flex-row'
		),
};
