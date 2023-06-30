import React from 'react';

import Styles from './input.module.sass';
import classes from '@/lib/classes';

interface IInputProps {
	className?: string;
	placeholder?: string;
	[key: string]: any;
}

const Component: React.FC<IInputProps> = (props) => {
	const { className, placeholder, ...moreProps } = props;

	const classNames = classes(
		`
        bg-accents-1
        h-12
        w-[75%]
        border
        border-neutral-border
        rounded-md
        p-4
        mb-8
        transition-all
        text-foreground
        font-display
        tracking-tight
        outline-transparent

        duration-200
        ease-in-out

        hover:border
        hover:border-[#ffffff33]
        hover:outline-none

        focus:border-blue
        focus:outline-none

        placeholder-[#ffffff33]
        `,
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

export default Component;
