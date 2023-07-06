import { PropsWithChildren } from 'react';

import classes from '@lib/classes';

interface ICardProps extends PropsWithChildren {
	className?: string;
	style?: React.CSSProperties;
}

const Component: React.FC<ICardProps> = (props) => {
	const { children, className, ...rest } = props;

	const classNames = classes(
		'card',
		'flex min-h-[10rem] flex-col rounded-lg border border-ring bg-accents-1 pb-5 ring-1 ring-black',
		className
	);

	return (
		<div className={classNames} {...rest}>
			{children}
		</div>
	);
};

Component.displayName = 'Card';

export default Component;
