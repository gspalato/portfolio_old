import { PropsWithChildren } from 'react';

import classes from '@lib/classes';

import Styles from './card.module.sass';

interface ICardProps extends PropsWithChildren {
	className?: string;
	style?: React.CSSProperties;
}

const Component: React.FC<ICardProps> = (props) => {
	const { children, className, ...rest } = props;

	const classNames = classes(
		Styles.card,
		'flex min-h-[10rem] flex-col rounded-lg pb-5',
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
