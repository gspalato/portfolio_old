import { HTMLMotionProps, motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

import { useTabs } from './Tabs';

import classes from '@/lib/classes';

interface ITabProps extends HTMLMotionProps<'div'> {
	className?: string;
	value: string;
}

const TabVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Component: React.FC<ITabProps> = (props) => {
	const { children, className, value } = props;
	const { currentTab } = useTabs();

	const classNames = classes('', className);

	return value == currentTab ? (
		<motion.div
			initial='hidden'
			animate='visible'
			exit='hidden'
			variants={TabVariants}
			key={uuid()}
			className={classNames}
		>
			{children}
		</motion.div>
	) : null;
};

Component.displayName = 'Tab';

export default Component;
