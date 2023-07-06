import classes from '@lib/classes';

interface ITabListProps extends React.PropsWithChildren {
	className?: string;
	width?: string;
}

const Component: React.FC<ITabListProps> = (props) => {
	const { className, children, width } = props;

	const classNames = classes(
		'p-1 bg-overlays-0 flex gap-2 rounded-md shadow-md',
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
