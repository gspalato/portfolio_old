import { motion } from 'framer-motion';
import React from 'react';

type SkillIconProps = {
	className?: string;
	name: string;
	icon: string;
	version?: 'plain' | 'original';
	style?: React.CSSProperties;
};

const Component: React.FC<SkillIconProps> = (props) => {
	const { className, icon, version = 'plain', style } = props;

	return (
		<motion.div className={className} style={style}>
			<img
				className='place-self-center saturate-150'
				src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${version}.svg`}
			/>
		</motion.div>
	);
};

export default Component;
