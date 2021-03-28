import React from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { styled } from '../stitches.config';

// Styles
let StyledButton = styled(motion.button, {
	alignItems: 'center',
	background: 'transparent',
	border: '1px solid $vividblue',
	borderRadius: '4px',
	color: '$vividblue',
	display: 'inline-flex',
	fontFamily: '$inter',
	fontSize: '.675vw',
	fontWeight: 500,
	justifyContent: 'center',
	lineHeight: '2.375rem',
	padding: '0 1rem',
	textAlign: 'center',
	textDecoration: 'none',
	transition: '.07s linear',
	userSelect: 'none',
	verticalAlign: 'middle',

	'&:active': {
		filter: 'brightness(60%)',
	},
	'&:focus': {
		outline: 'none',
	},

	variants: {
		mode: {
			disabled: {
				borderColor: '$disabledgray',
				color: '$disabledgray',
				cursor: 'default',

				'&:active': {
					filter: 0,
				}
			},
			success: {
				borderColor: '$vividgreen',
				color: '$vividgreen',
			}
		}
	}
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
			mode={(props.isSuccessful && "success" ) || (isDisabled() && "disabled") || undefined}
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