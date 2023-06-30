import { HTMLMotionProps, motion } from 'framer-motion';

import classes from '@/lib/classes';

interface ICardProps extends HTMLMotionProps<'div'> {
	className?: string;
}

const Component: React.FC<ICardProps> = (props) => {
	const { children, ...rest } = props;

	const classNames = classes(
		rest.className,
		'min-h-[10rem] rounded-lg border border-ring bg-accents-1 ring-1 ring-black flex flex-col pb-5'
	);

	return (
		<motion.div
			whileHover={{ size: 1.125 }}
			whileTap={{ size: 0.875 }}
			className={classNames}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export default Component;
