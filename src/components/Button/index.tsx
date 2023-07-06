import { VariantProps, cva } from 'class-variance-authority';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import classes from '@lib/classes';

import { NotOptional } from '@/types/NotOptional';

type ComponentVariants = NotOptional<
	VariantProps<typeof BaseClasses>,
	'background'
>;

const BaseClasses = cva(
	[
		'flex',
		'justify-center',
		'items-center',
		'bg-transparent',
		'p-2',
		'outline-none',
		'duration-100',
		'ease-in-out',
		'transition-all',
		'rounded-md',
		'z-[10]',
		'!cursor-none',
		'text-sm',
		'font-display',
		'font-thin',
	],
	{
		variants: {
			background: {
				transparent: 'bg-transparent',
				bare: 'bg-transparent border-2 border-ring',
				primary: 'bg-shadowy',
			},
		},
	}
);

interface IButtonProps extends HTMLMotionProps<'button'> {
	className?: string;
	link?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	variant: ComponentVariants;
}

const Component: React.FC<IButtonProps> = (props) => {
	const { children, className, variant, ...rest } = props;

	const classNames = classes(BaseClasses(variant), className);

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
