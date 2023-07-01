import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

import MenuButton from './MenuButton';
import NavbarLink from './NavbarLink';

import classes from '@/lib/classes';
import { useLayout } from '@/lib/layout';

const WrapperVariants = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			delay: 0.3,
			duration: 0.3,
		},
	},
};

const LinkVariants = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.15 + 0.3,
		},
	}),
};

const Routes = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'About',
		path: '/about',
	},
	{
		name: 'Projects',
		path: '/projects',
	},
];

interface INavbarProps extends React.PropsWithChildren {
	className?: string;
}

const Component: React.FC<INavbarProps> = (props) => {
	const { className } = props;

	const [isExpanded, setIsExpanded] = React.useState(false);
	const { defaultNavbarEnabled, navbarBlurEnabled } = useLayout();

	const classNames = classes(
		'flex h-20 w-[calc(100%-5px)] absolute overflow-hidden z-[101] transition-all duration-200',
		navbarBlurEnabled && 'backdrop-blur-md',
		className
	);

	return defaultNavbarEnabled ? (
		<>
			<motion.nav id='navbar' className={classNames}>
				<div className='mx-auto flex w-full items-center justify-between px-[2.23rem]'>
					<img
						src='/favicon.ico'
						alt=''
						height={35}
						width={35}
						style={{ filter: 'invert(0)' }}
					/>
					<MenuButton
						isNavbarExpanded={isExpanded}
						onClick={() => setIsExpanded(!isExpanded)}
					/>
				</div>
			</motion.nav>
			<AnimatePresence mode='wait'>
				{isExpanded && (
					<motion.div
						className='absolute z-[100] mx-auto flex h-screen min-h-screen w-screen items-center justify-center bg-[#0001] backdrop-blur-lg ease-in-out md:justify-end'
						initial='initial'
						animate='animate'
						exit='exit'
						variants={WrapperVariants}
						style={{ pointerEvents: isExpanded ? 'all' : 'none' }}
					>
						<motion.div className='flex h-fit w-fit flex-col px-20'>
							{Routes.map((route, i) => (
								<NavbarLink
									link={route.path}
									name={route.name}
									setState={setIsExpanded}
									key={uuid()}
									custom={i}
									initial='initial'
									animate='animate'
									exit='initial'
									variants={LinkVariants}
								/>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	) : null;
};

export default Component;
