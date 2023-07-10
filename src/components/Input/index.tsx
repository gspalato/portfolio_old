import React from 'react';

import classes from '@lib/classes';

import Styles from './input.module.sass';

interface IInputProps {
	className?: string;
	placeholder?: string;
	[key: string]: any;
}

const Component: React.FC<IInputProps> = (props) => {
	const { className, placeholder, ...moreProps } = props;

	const classNames = classes(
		Styles.input,
		'!border-borders-0 !bg-accents-0',
		className
	);

	return (
		<input
			className={classNames}
			placeholder={placeholder}
			{...moreProps}
		/>
	);
};

Component.displayName = 'Input';

export default Component;
