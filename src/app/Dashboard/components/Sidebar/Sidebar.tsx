import {
	faArrowRightFromBracket,
	faBolt,
	faClock,
	faCompass,
	faDroplet,
	faHouse,
	faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import classes from '@/lib/classes';

import PolygonIcon from '@/assets/img/Polygon.svg';

import { SidebarButton } from '.';

interface SidebarProps extends React.PropsWithChildren {
	className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
	const { children, className } = props;

	const classNames = classes(
		'flex h-full w-[12rem] flex-col bg-accents-0 border-r border-overlays-0',
		className
	);

	return (
		<div className={classNames}>
			<div className='flex h-[3rem] flex-row items-center justify-between border-b border-overlays-0 pl-4 pr-2'>
				<img src={PolygonIcon} height={25} width={25} className=' rounded-full'></img>
				<Link
					to='/'
					className='z-10 flex h-4 w-4 cursor-none items-center justify-center p-4 text-[#ffffff22] transition-colors duration-100 hover:text-[#ffffff55]'
				>
					<FontAwesomeIcon
						icon={faArrowRightFromBracket}
						style={{ color: 'inherit' }}
					/>
				</Link>
			</div>
			<h3 className='ml-4 w-full py-2 pt-6 font-display text-sm font-regular text-accents-4'>
				Foundation
			</h3>
			<SidebarButton
				text='Overview'
				value='Overview'
				icon={faHouse}
			/>
			<SidebarButton
				text='Service Catalog'
				value='Service Catalog'
				icon={faCompass}
			/>
			<SidebarButton text='Flow' value='Flow' icon={faBolt} />
			<SidebarButton text='Deploys' value='Deploys' icon={faRocket} />
			<SidebarButton text='Cron Jobs' value='Cron Jobs' icon={faClock} />
			<div className='h-4'/>
			<h3 className='ml-4 w-full py-2 font-display text-sm font-regular text-accents-4'>
				Projects
			</h3>
			<SidebarButton
				text='UPx Refill Station'
				value='UPx Refill Station'
				icon={faDroplet}
			/>
			{children}
		</div>
	);
};

export default Sidebar;
