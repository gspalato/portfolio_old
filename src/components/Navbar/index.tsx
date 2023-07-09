import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { v4 as uuid } from 'uuid';

import classes from '@lib/classes';
import { useLayout } from '@lib/layout';

import MenuButton from './MenuButton';
import NavbarLink from './NavbarLink';

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
	const { defaultNavbarEnabled, navbarBlurEnabled, setNavbarBlurEnabled } =
		useLayout();

	const classNames = classes(
		'absolute z-[101] flex h-20 w-[calc(100%-5px)] overflow-hidden transition-all duration-200',
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
						onClick={() => {
							setNavbarBlurEnabled(isExpanded);
							setIsExpanded(!isExpanded);
						}}
					/>
				</div>
			</motion.nav>
			<AnimatePresence mode='wait'>
				{isExpanded && (
					<motion.div
						className='optimize absolute z-[100] mx-auto flex h-screen min-h-screen w-screen items-center justify-center bg-[#000a] backdrop-blur-lg ease-in-out md:justify-end'
						initial='initial'
						animate='animate'
						exit='exit'
						variants={WrapperVariants}
						style={{ pointerEvents: isExpanded ? 'all' : 'none' }}
					>
						<motion.div className='flex h-fit w-fit flex-col gap-4 px-20'>
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

Component.displayName = 'Navbar';

export default Component;
