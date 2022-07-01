import React, { useReducer } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Button from './Button';

interface IProjectCardProps {
	className?: string;
	icon: any;
	description?: string;
	subtitle?: string;
	title: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ className, icon, description, subtitle, title }) => {

	return (
		<motion.div
		className="flex flex-col h-fit w-fit"
		>
			<img src={icon} className="aspect-square w-[25rem] rounded-3xl mb-8"/>
			<div className="h-fit w-fit pl-4">
				<h1 className="font-detail font-bold text-white text-xl tracking-wide">{title}</h1>
				<h3 className="font-detail font-medium text-subwhite text-lg leading-5 tracking-wide">{subtitle}</h3>
			</div>
		</motion.div>
	);
}

export default ProjectCard;