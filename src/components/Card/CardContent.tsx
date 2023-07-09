import classes from '@lib/classes';

interface ICardContentProps extends React.PropsWithChildren {
	className?: string;
}

const Component: React.FC<ICardContentProps> = (props) => {
	const { children, className, ...rest } = props;

	const classNames = classes('mt-5 min-h-[10rem] flex-1 px-6', className);

	return <div className={classNames}>{props.children}</div>;
};

Component.displayName = 'CardContent';

export default Component;
