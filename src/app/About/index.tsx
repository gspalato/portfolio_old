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
							<p className='max-w-xl indent-4 font-mono text-xl'>
								Hello! I'm Gabriel Spalato, a Computer
								Engineering student seeking to broaden and
								deepen my knowledge and skillset, as well as aid
								your company's mission with excellence and an
								user-first approach.
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
					<div className='flex h-full w-full flex-col items-center justify-center p-4 md:w-1/2 md:px-8'>
						<SkillWindow className='md:max-w-[40rem]' />
					</div>
				</div>
			</section>
		</Page>
	);
};

export default Component;
