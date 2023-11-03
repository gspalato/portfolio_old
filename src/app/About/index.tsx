import { useEffect } from 'react';

import Page from '@components/Page';

import { useLayout } from '@/lib/layout';

import SkillWindow from './components/SkillWindow';

const Component = () => {
	const { enableContentScrolling, disableContentScrolling } = useLayout();

	useEffect(() => {
		enableContentScrolling();

		return () => disableContentScrolling();
	});

	return (
		<Page className='block pt-[5rem]'>
			<section className='align-center flex h-[calc(100vh-5rem)] w-full flex-col items-center bg-transparent'>
				<h1 className='w-full py-4 pb-12 text-center font-mono text-3xl text-overlays-9 md:py-5'>
					{'<about>'}
				</h1>
				<div className='flex w-full flex-1 flex-col gap-16 px-8 pb-8 md:flex-row md:gap-0'>
					<div className='flex h-full flex-1 flex-col items-center justify-center gap-8 md:w-1/2'>
						<div className='flex w-full flex-col gap-4 px-4 md:w-2/3'>
							<h1 className='text-left font-mono text-2xl text-overlays-9'>
								whoami?
							</h1>
							<p className='max-w-xl select-text indent-4 font-mono text-lg'>
								Hello! I'm Gabriel Spalato, a Computer
								Engineering student seeking to broaden and
								deepen my knowledge and skillset!
							</p>
							<p className='max-w-xl select-text indent-4 font-mono text-lg'>
								As an aspiring software engineer, my programming
								journey began when I was 7 years old,
								experimenting with Batch. This early passion led
								me to learn Lua, so I could script Roblox tools,
								igniting my love for programming. Over the
								years, I've improved my skills and become
								proficient in JavaScript, TypeScript, Python,
								and C#.
							</p>
							<p className='max-w-xl select-text indent-4 font-mono text-lg'>
								I've also gained experience with various
								technologies such as React, React Native,
								Electron, and GraphQL. My journey has equipped
								me with sociobehavioral skills, such as
								collaboration, teamwork, project management, and
								proficiency in agile methodologies.
							</p>
						</div>
						<div className='flex w-full flex-col gap-4 px-4 md:w-2/3'>
							<h1 className='text-left font-mono text-2xl text-overlays-9'>
								skills.
							</h1>
							<p className='max-w-xl font-mono text-xl'>
								{'• Front-end development'}
								<br />
								{'• Back-end development'}
								<br />
								{'• Mobile development (React Native)'}
								<br />
								{'• Project Management'}
							</p>
						</div>
					</div>
					<div className='flex h-full w-full flex-col items-center justify-center p-4 md:w-[50vw] md:px-8'>
						<SkillWindow className='md:max-w-[40rem]' />
					</div>
				</div>
			</section>
		</Page>
	);
};

export default Component;
