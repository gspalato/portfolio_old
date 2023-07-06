import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';

import classes from '@lib/classes';

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
        align-center
        text-md
        z-1
        flex
        min-h-[1.5rem]
        min-w-[1.5rem]
        cursor-none
        items-center
        justify-center
        rounded-md
        border-none
        bg-transparent
        p-2
        text-center
        font-title
        font-bold
        tracking-tight
        text-white
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
