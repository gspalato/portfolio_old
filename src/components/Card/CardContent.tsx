import classes from '@/lib/classes';

interface ICardContentProps extends React.PropsWithChildren {
	className?: string;
}

const Component: React.FC<ICardContentProps> = (props) => {
	const { children, className, ...rest } = props;

	const classNames = classes('mt-5 px-6 min-h-[10rem] flex-1', className);

	return <div className={classNames}>{props.children}</div>;
};

export default Component;
