import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import classes from '@/lib/classes';

interface IMenuButtonProps {
	className?: string;
	isNavbarExpanded?: boolean;
	onClick?: () => void;
	[key: string]: any;
}

const Component: React.FC<IMenuButtonProps> = (props) => {
	const { className, isNavbarExpanded, onClick, ...moreProps } = props;

	const classNames = classes(
		`
        flex
        items-center
        align-center
        bg-transparent
        cursor-none
        border-none
        rounded-md
        text-white
        font-title
        font-bold
        text-md
        justify-center
        p-2
        tracking-tight
        min-h-[1.5rem]
        min-w-[1.5rem]
        text-center
        z-1
        `,
		className
	);

	return (
		<motion.button
			whileHover={{ scale: 1.125 }}
			whileTap={{ scale: 0.975 }}
			transition={{ duration: 0.2 }}
			className={classNames}
			onClick={() => onClick?.()}
			{...moreProps}
		>
			{isNavbarExpanded ? (
				<FontAwesomeIcon icon={faXmark} />
			) : (
				<FontAwesomeIcon icon={faBars} />
			)}
		</motion.button>
	);
};

export default Component;
