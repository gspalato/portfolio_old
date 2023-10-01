import React from 'react';

import classes from '@/lib/classes';

import Stylesheet from './SkillWindow.module.sass';

import SkillIcon from '../SkillIcon';

type SkillIconDefinition = {
	name: string;
	icon: string;
	version?: 'plain' | 'original';
};

const SkillIcons: SkillIconDefinition[] = [
	{ name: 'Arduino', icon: 'arduino', version: 'original' },
	{ name: 'C', icon: 'c' },
	{ name: 'CPP', icon: 'cplusplus' },
	{ name: 'CSharp', icon: 'csharp' },
	{ name: 'CSS3', icon: 'css3' },
	{ name: 'Docker', icon: 'docker' },
	{ name: 'Electron', icon: 'electron', version: 'original' },
	{ name: 'Figma', icon: 'figma', version: 'original' },
	{ name: 'Git', icon: 'git' },
	{ name: 'GraphQL', icon: 'graphql', version: 'plain' },
	{ name: 'HTML5', icon: 'html5' },
	{ name: 'Javascript', icon: 'javascript' },
	{ name: 'Lua', icon: 'lua', version: 'plain' },
	{ name: 'MongoDB', icon: 'mongodb', version: 'plain' },
	{ name: 'NodeJS', icon: 'nodejs' },
	{ name: 'Python', icon: 'python', version: 'original' },
	{ name: 'React', icon: 'react', version: 'original' },
	{ name: 'SASS', icon: 'sass', version: 'original' },
	{ name: 'Tailwind', icon: 'tailwindcss', version: 'plain' },
	{ name: 'Typescript', icon: 'typescript' },
];

type SkillWindowProps = {
	className?: string;
};

const Component: React.FC<SkillWindowProps> = (props) => {
	const { className } = props;

	return (
		<div className={Styles.window(className)}>
			<div className={Styles.titlebar}>
				<div className={Styles.titlebarButton}></div>
				<div className={Styles.titlebarButton}></div>
				<div className={Styles.titlebarButton}></div>
			</div>
			<div className={Styles.grid}>
				{SkillIcons.sort().map(({ name, icon, version }) => (
					<SkillIcon
						key={name}
						icon={icon}
						name={name}
						version={version}
					/>
				))}
			</div>
		</div>
	);
};

export default Component;

const Styles = {
	window: (className?: string) =>
		classes(
			'min-h-xl flex h-max w-full flex-col rounded-lg border border-overlays-6 backdrop-blur-sm',
			className
		),
	titlebar:
		'flex h-8 w-full items-center gap-1 border-b border-overlays-6 px-2',
	titlebarButton: 'aspect-square h-1/3 rounded-full border border-overlays-6',
	grid: Stylesheet.grid,
};
