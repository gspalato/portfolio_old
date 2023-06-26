import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import classes from '@/lib/classes';

import Styles from './gradient.module.sass';

interface IGradientButtonProps extends React.PropsWithChildren {
	className?: string;
	text: string;
	link?: string;
	onClick?: () => void;
	background: string;
	backgroundHover?: string;
	backgroundPress?: string;
	overlay?: string;
	overlayHover?: string;
	textColor?: string;
	textHover?: string;
	type?: 'button' | 'submit' | 'reset';
	[key: string]: any;
}

const ButtonComponent: React.FC<IGradientButtonProps> = (props) => {
	const {
		children,
		className,
		text,
		link,
		onClick,
		background,
		backgroundHover,
		backgroundPress,
		overlay,
		overlayHover,
		textColor,
		textHover,
		type = 'button',
		...rest
	} = props;

	const classNames = classes(Styles.buttonInner, className);

	return (
		<motion.button
			whileHover={{
				scale: 1,
				background: props.backgroundHover ?? background,
			}}
			whileTap={{
				scale: 0.975,
				background: props.backgroundPress ?? background,
			}}
			transition={{
				duration: 0.075,
			}}
			className={Styles.buttonOuter}
			style={{ background }}
			onClick={() => onClick?.()}
			type={type}
			{...rest}
		>
			<motion.h1
				initial={{
					background: props.overlay ?? '#000',
				}}
				whileHover={{
					background: props.overlayHover ?? '#00000000',
					color: props.textHover ?? '#000',
				}}
				transition={{
					duration: 0.1,
					ease: [0.53, -0.01, 0.44, 1.02],
				}}
				className={classNames}
				style={{
					color: props.textColor ?? '#fff',
					transition: 'background 0.1s',
				}}
			>
				{text}
				{children}
			</motion.h1>
		</motion.button>
	);
};

const ButtonWithLinkComponent: React.FC<IGradientButtonProps> = ({
	className,
	text,
	link,
	onClick,
	children,
	...props
}) => {
	return link ? (
		<Link to={link}>
			<ButtonComponent
				className={className}
				text={text}
				onClick={onClick}
				{...props}
			>
				{children}
			</ButtonComponent>
		</Link>
	) : (
		<ButtonComponent
			className={className}
			text={text}
			onClick={onClick}
			{...props}
		>
			{children}
		</ButtonComponent>
	);
};

export default ButtonWithLinkComponent;
