import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import classes from '@/lib/classes';

interface IButtonProps extends React.PropsWithChildren {
	className?: string;
	text: string;
	link?: string;
	onClick?: () => void;
	transparent?: boolean;
	type?: 'button' | 'submit' | 'reset';
	[key: string]: any;
}

const ButtonComponent: React.FC<IButtonProps> = (props) => {
	const {
		children,
		className,
		text,
		link,
		onClick,
		transparent,
		type = 'button',
		...rest
	} = props;

	const classNames = classes(
		`
		flex
		align-center
		items-center
		bg-transparent
		border
		border-border
		text-border
		font-display
		font-bold
		p-2
		text-center
		min-h-[1.5rem]
		min-w-[1.5rem]
		letter-spacing-[-0.025rem]
		text-sm
		rounded-lg
		`,
		className
	);

	return (
		<motion.button
			whileHover={{
				scale: 1.125,
			}}
			whileTap={{
				scale: 0.975,
			}}
			transition={{
				duration: 0.075,
			}}
			className={classNames}
			onClick={() => onClick?.()}
			type={type}
			{...rest}
		>
			{text}
			{children}
		</motion.button>
	);
};

const ButtonWithLinkComponent: React.FC<IButtonProps> = ({
	children,
	link,
	...props
}) => {
	return link ? (
		<Link to={link}>
			<ButtonComponent {...props}>{children}</ButtonComponent>
		</Link>
	) : (
		<ButtonComponent {...props}>{children}</ButtonComponent>
	);
};

export default ButtonWithLinkComponent;
