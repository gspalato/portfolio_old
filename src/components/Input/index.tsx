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

	const classNames = classes(Styles.input, className);

	return (
		<input
			className={classNames}
			placeholder={placeholder}
			{...moreProps}
		/>
	);
};

export default Component;
