import { HTMLMotionProps, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import classes from '@/lib/classes';

interface INavbarLinkProps extends HTMLMotionProps<'h1'> {
	className?: string;
	link: string;
	name: string;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
	[key: string]: any;
}

const Component: React.FC<INavbarLinkProps> = (props) => {
	const { className, link, name, setState, ...moreProps } = props;

	const classNames = classes(
		`
		text-foreground
		w-auto
		text-center
		font-display
		text-5xl
		font-bold
		tracking-tight
		transition-colors
		duration-100
		ease-in-out
		hover:text-[#aaaaaa]
		focus:bg-transparent
		active:bg-transparent
		md:text-right
		`,
		className
	);

	return (
		<Link onClick={() => setState(false)} to={link}>
			<motion.h1 className={classNames} {...moreProps}>
				{name}
			</motion.h1>
		</Link>
	);
};

Component.displayName = 'NavbarLink';

export default Component;
