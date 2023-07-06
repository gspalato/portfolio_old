import { HTMLMotionProps, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Styles from './navbarLink.module.sass';

interface INavbarLinkProps extends HTMLMotionProps<'h1'> {
	className?: string;
	link: string;
	name: string;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
	[key: string]: any;
}

const Component: React.FC<INavbarLinkProps> = (props) => {
	const { className, link, name, setState, ...moreProps } = props;

	const classNames = [Styles.link, className].join(' ');

	return (
		<Link onClick={() => setState(false)} to={link}>
			<motion.h1 className={classNames} {...moreProps}>
				{name}
			</motion.h1>
		</Link>
	);
};

export default Component;
