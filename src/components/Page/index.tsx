import { HTMLMotionProps, motion } from 'framer-motion';

import classes from '@lib/classes';

interface IPageProps extends HTMLMotionProps<'div'> {
	className?: string;
}

const Component: React.FC<IPageProps> = (props) => {
	const { children, className } = props;

	const classNames = classes(
		'h-full flex justify-center items-center gap-2',
		className
	);

	return (
		<motion.div
			className={classNames}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

Component.displayName = 'Page';

export default Component;
