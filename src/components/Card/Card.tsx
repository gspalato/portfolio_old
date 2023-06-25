import { motion } from 'framer-motion';

import classes from '@/lib/classes';

import Styles from './card.module.sass';

interface ICardProps extends React.PropsWithChildren {
	className?: string;
}

const Component: React.FC<ICardProps> = (props) => {
	const { children, ...rest } = props;

	const classNames = classes(
		Styles.card,
		rest.className,
		'h-[23rem] w-[23rem] rounded-lg border border-border bg-background ring-1 ring-black flex flex-col pb-5'
	);

	return (
		<motion.div
			whileHover={{ size: 1.125 }}
			whileTap={{ size: 0.875 }}
			className={classNames}
		>
			{children}
		</motion.div>
	);
};

export default Component;
