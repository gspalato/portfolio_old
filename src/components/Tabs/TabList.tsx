import classes from '@lib/classes';

interface ITabListProps extends React.PropsWithChildren {
	className?: string;
	width?: string;
}

const Component: React.FC<ITabListProps> = (props) => {
	const { className, children, width } = props;

	const classNames = classes(
		'flex gap-2 rounded-md border border-ring bg-transparent p-1 shadow-black/50 drop-shadow',
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
