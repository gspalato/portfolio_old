import React from 'react';

import classes from '@/lib/classes';

import SkillIcon from '../SkillIcon';

const skills = [
	{ name: 'Arduino', icon: 'devicon-arduino-plain' },
	{ name: 'C', icon: 'devicon-c-plain' },
	{ name: 'CPP', icon: 'devicon-cplusplus-plain' },
	{ name: 'CSharp', icon: 'devicon-csharp-plain' },
	{ name: 'CSS3', icon: 'devicon-css3-plain' },
	{ name: 'Docker', icon: 'devicon-docker-plain' },
	{ name: 'Electron', icon: 'devicon-electron-original' },
	{ name: 'Git', icon: 'devicon-git-plain' },
	{ name: 'GraphQL', icon: 'devicon-graphql-plain' },
	{ name: 'HTML5', icon: 'devicon-html5-plain' },
	{ name: 'Javascript', icon: 'devicon-javascript-plain' },
	{ name: 'Lua', icon: 'devicon-lua-plain' },
	{ name: 'MongoDB', icon: 'devicon-mongodb-plain' },
	{ name: 'NodeJS', icon: 'devicon-nodejs-plain' },
	{ name: 'Python', icon: 'devicon-python-plain' },
	{ name: 'React', icon: 'devicon-react-original' },
	{ name: 'SASS', icon: 'devicon-sass-original' },
	{ name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
	{ name: 'Typescript', icon: 'devicon-typescript-plain' },
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
			<div className='grid w-full flex-1 auto-rows-max grid-cols-5 items-center p-6 text-5xl'>
				{skills.sort().map(({ name, icon }) => (
					<SkillIcon
						key={name}
						icon={icon}
						className='aspect-square p-4'
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
};
