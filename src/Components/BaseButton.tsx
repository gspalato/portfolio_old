import React from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { styled } from '../stitches.config';
import tw from 'twin.macro';

// Styles
let StyledButton = styled(motion.button, {
	...tw`
		align-middle
		bg-transparent
		border
		border-vividblue
		font-inter
		font-semibold
		items-center
		inline-flex
		justify-center
		leading-loose
		no-underline
		py-4
		rounded-sm
		select-none
		text-sm
		text-vividblue
	`,

	'&:active': {
		filter: 'brightness(60%)',
	},

	'&:focus': {
		outline: 'none',
	},
});

// Component
interface IBaseButtonProps extends ExtraProps {
	id?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	isSuccessful?: boolean;
	label?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const BaseButton: React.FC<IBaseButtonProps> = props => {
	const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

	function isDisabled(): boolean {
		let { isDisabled, isLoading } = props;
		return !!(isDisabled || isLoading);
	}

	return (
		<StyledButton
			id={props.id}
			disabled={isDisabled()}
			onClick={props.onClick}
			whileTap={ !isDisabled() ? { scale: .97 } : {} }
			transition={{ easing: "spring", duration: .0 }}
			ref={buttonRef}
			{...props}
		>
			{props.label || props.children}
		</StyledButton>
	);
}