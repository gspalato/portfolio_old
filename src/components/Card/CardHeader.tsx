import classes from '@lib/classes';

interface ICardHeaderProps extends React.PropsWithChildren {
	className?: string;
	separate?: boolean;
}

const Component: React.FC<ICardHeaderProps> = (props) => {
	const { children, className, separate = true, ...rest } = props;

	const classNames = classes(
		'py-5 flex items-center justify-between px-6 md:min-h-[80px]',
		separate ? 'border-b border-ring' : '',
		className
	);

	return <div className={classNames}>{props.children}</div>;
};

export default Component;
