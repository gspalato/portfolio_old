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
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import '@lib/utils/array.extensions';

import { useAuth } from '@/lib/auth';
import classes from '@/lib/classes';
import { useWindowSize } from '@/lib/layout';

import PolygonIcon from '@/assets/img/Polygon.svg';

import Styles from './DashboardNavbar.module.sass';

import { SubpageDefinition, Subpages } from '../../subpages';

import { DashboardNavbarButton } from '.';

interface DashboardNavbarProps extends React.PropsWithChildren {
	className?: string;
	position?: 'side' | 'bottom';
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = (props) => {
	const { children, className, position } = props;

	const { user } = useAuth();

	const navbar = useRef<any>();
	const { width } = useWindowSize();

	const [baseSubpages, setBaseSubpages] = useState<SubpageDefinition[]>([]);
	const [projectSubpages, setProjectSubpages] = useState<SubpageDefinition[]>([]);
	const [isNavbarOverflowing, setNavbarOverflowing] =
		useState<boolean>(false);

	const buttonMode = position == 'side' ? 'list' : 'block';
	const logoSize = position == 'side' ? 25 : 35;

	useLayoutEffect(() => {
		if (position == 'bottom') {
			const navbarWidth = navbar.current.scrollWidth;
			setNavbarOverflowing(navbarWidth >= (width ?? 0));
		} else {
			setNavbarOverflowing(false);
		}
	}, []);

	useLayoutEffect(() => {
		if (position == 'bottom') {
			const navbarWidth = navbar.current.scrollWidth;
			setNavbarOverflowing(navbarWidth >= (width ?? 0));
		} else {
			setNavbarOverflowing(false);
		}
	}, [width]);

	const BaseSubpages = useMemo(() => Subpages.base.filter((subpage) =>
		subpage.roles.intersects(user.Roles)
	), [Subpages]);

	const ProjectSubpages = useMemo(() => Subpages.project.filter((subpage) =>
		subpage.roles.intersects(user.Roles)
	), [Subpages]);

	const classNames = classes(
		'flex border-r border-overlays-0 bg-accents-0',
		position == 'side' && 'side h-full w-[13rem] flex-col',
		position == 'bottom' &&
			'bottom h-[4rem] w-[100vw] max-w-[100vw] flex-row overflow-x-scroll',
		position == 'bottom' && Styles.hideScrollbar,
		position == 'bottom' && !isNavbarOverflowing && 'justify-center',
		className
	);

	const infoClassNames = classes(
		'flex flex-row items-center justify-between border-overlays-0 px-2',
		position == 'side' && 'h-[3rem] border-b',
		position == 'bottom' &&
			'!aspect-square h-full w-auto !justify-center border-r !p-0'
	);

	const groupClassNames = classes(
		'flex',
		position == 'side' && 'w-full flex-col',
		position == 'bottom' && 'flex-row'
	);

	return (
		<div className={classNames} ref={navbar}>
			<div className={infoClassNames}>
				<Link
					to='/'
					className='z-10 flex aspect-square h-full cursor-none items-center justify-center text-[#ffffff22] transition-colors duration-100 hover:text-[#ffffff55]'
				>
					<img
						src={PolygonIcon}
						height={logoSize}
						width={logoSize}
						className='rounded-full'
					/>
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
			<div className={groupClassNames}>
				{position == 'side' && BaseSubpages.length > 0 && (
					<h3 className='font-regular w-full py-2 pl-6 pt-6 font-display text-sm text-accents-4'>
						Foundation
					</h3>
				)}
				{/*
				<DashboardNavbarButton
					text='Overview'
					value='Overview'
					icon={faHouse}
					mode={buttonMode}
				/>
				<DashboardNavbarButton
					text='Service Catalog'
					value='ServiceCatalog'
					icon={faLayerGroup}
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
					value='CronJobs'
					icon={faClock}
					mode={buttonMode}
				/>
				*/}
				{
					BaseSubpages.map((subpage) => {
						return (
							<DashboardNavbarButton
								text={subpage.name}
								value={subpage.id}
								icon={subpage.icon}
								mode={buttonMode}
								key={`${subpage.id}|NavbarButton`}
							/>
						);
					})
				}
			</div>
			<div
				className={classes(
					groupClassNames,
					'border-l border-overlays-0'
				)}
			>
				{position == 'side' && ProjectSubpages.length > 0 && (
					<h3 className='font-regular w-full py-2 pl-6 font-display text-sm text-accents-4'>
						Projects
					</h3>
				)}
				{/*
				<DashboardNavbarButton
					text='UPx Refill Station'
					value='UPxRefillStation'
					icon={faDroplet}
					mode={buttonMode}
				/>
				*/}
				{
				ProjectSubpages.map((subpage) => {
					console.log(`Added ${subpage.name} to navbar.`);
					return (
						<DashboardNavbarButton
							text={subpage.name}
							value={subpage.id}
							icon={subpage.icon}
							mode={buttonMode}
							key={`${subpage.id} | Navbar Button`}
						/>
					);
				})
				}
			</div>
			{children}
		</div>
	);
};

export default DashboardNavbar;
