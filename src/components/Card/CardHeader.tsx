import classes from '@lib/classes';

import Styles from './card.module.sass';

interface ICardHeaderProps extends React.PropsWithChildren {
	className?: string;
	separate?: boolean;
}

const Component: React.FC<ICardHeaderProps> = (props) => {
	const { children, className, separate = true, ...rest } = props;

	const classNames = classes(
		Styles.gradientBorder,
		'flex items-center justify-between px-6 py-5 md:min-h-[80px]',
		separate
			? 'rounded-t-lg !border-l-0 !border-r-0 !border-t-0 border-b'
			: '!border-none',
		className
	);

	return <div className={classNames}>{props.children}</div>;
};

Component.displayName = 'CardHeader';

export default Component;
