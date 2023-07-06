import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import classes from '@lib/classes';

import { NotOptional } from '@/types/NotOptional';
import { VariantType } from '@/types/VariantType';

const Variants = {
	background: {
		transparent: 'bg-transparent',
		bare: 'bg-transparent border-2 border-ring',
		primary: 'bg-shadowy',
	},
};

type Variants = VariantType<typeof Variants> &
	NotOptional<VariantType<typeof Variants>, 'background'>;

interface IButtonProps extends HTMLMotionProps<'button'> {
	className?: string;
	link?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	variant: Variants;
}

const Component: React.FC<IButtonProps> = (props) => {
	const { children, className, variant, ...rest } = props;

	const classNames = classes(
		'z-[10] flex !cursor-none items-center justify-center rounded-md bg-transparent p-2 font-display text-sm font-thin outline-none transition-all duration-100 ease-in-out',
		variant.background ?? Variants.background.transparent,
		className
	);

	const Wrapper = props.link ? Link : React.Fragment;

	return (
		<Wrapper
			to={props.link ?? ''}
			target={props.link?.startsWith('/') ? '' : '_blank'}
			rel={props.link?.startsWith('/') ? '' : 'noopener noreferrer'}
			onClick={() => props.onClick?.()}
		>
			<motion.button
				className={classNames}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ duration: 0.025 }}
				transformTemplate={({ scale }) => `scale(${scale})`}
				{...rest}
			>
				{children}
			</motion.button>
		</Wrapper>
	);
};

export default Component;
