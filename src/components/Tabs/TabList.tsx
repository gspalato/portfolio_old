import classes from '@lib/classes';

import Styles from './TabList.module.sass';

interface ITabListProps extends React.PropsWithChildren {
	className?: string;
	width?: string;
}

const Component: React.FC<ITabListProps> = (props) => {
	const { className, children, width } = props;

	const classNames = classes(
		Styles.tabList,
		'flex gap-2 rounded-md bg-transparent p-1 shadow-black/50 drop-shadow',
		className
	);

	return (
		<div className={classNames} style={{ width }}>
			{children}
		</div>
	);
};

Component.displayName = 'TabList';

export default Component;
