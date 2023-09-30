import React from 'react';

type SkillIconProps = {
	className?: string;
	icon: string;
	style?: React.CSSProperties;
};

const Component: React.FC<SkillIconProps> = (props) => {
	const { className, icon, style } = props;

	return (
		<i
			className={`${icon} colored w-fit place-self-center text-center ${className}`}
			style={style}
		/>
	);
};

export default Component;
