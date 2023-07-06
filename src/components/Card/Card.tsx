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
		'min-h-[10rem] rounded-lg border border-ring bg-accents-1 ring-1 ring-black flex flex-col pb-5',
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
