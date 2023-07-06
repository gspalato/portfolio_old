import classes from '@lib/classes';

interface ITabListProps extends React.PropsWithChildren {
	className?: string;
	width?: string;
}

const Component: React.FC<ITabListProps> = (props) => {
	const { className, children, width } = props;

	const classNames = classes(
		'flex gap-2 rounded-md bg-overlays-0 p-1 shadow-md',
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
