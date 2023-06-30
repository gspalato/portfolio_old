import { useEffect } from 'react';

import Page from '@/components/Page';

import ProjectCard from './components/ProjectCard';

import { useLayout } from '@/lib/layout';

const Component = () => {
	const {
		enableNavbarBlur,
		disableNavbarBlur,
		enableContentScrolling,
		disableContentScrolling,
	} = useLayout();

	useEffect(() => {
		enableContentScrolling();
		enableNavbarBlur();

		return () => {
			disableContentScrolling();
			disableNavbarBlur();
		};
	}, []);

	return (
		<Page className='block pt-[5rem]'>
			<section className='align-center flex h-[calc(100vh-5rem)] w-full flex-col items-center bg-transparent'>
				<h1 className='text-gradient w-full py-8 pb-16 text-center font-exotic text-5xl font-bold md:my-[1.5] md:text-7xl'>
					Projects
				</h1>
				<div className='top-0 grid flex-1 grid-cols-1 gap-8 px-8 pb-12 md:flex md:flex-row md:flex-wrap md:place-content-center'>
					{' '}
					<ProjectCard
						title='Reality'
						description='A microservice platform and back-end.'
						img='https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg'
						link='https://github.com/gspalato/reality'
					/>
					<ProjectCard
						title='Title'
						description='Lorem ipsum dolorem...'
						img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8rwYAAioBJ+mp4R0AAAAASUVORK5CYII='
						link=''
					/>
					<ProjectCard
						title='Title'
						description='Lorem ipsum dolorem...'
						img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8rwYAAioBJ+mp4R0AAAAASUVORK5CYII='
						link=''
					/>
				</div>
				{/*
				<div className='sticky h-[30rem] w-full px-8'>
					<Carousel
						scrollWidthSetter={setScrollWidth}
						animate={{ x: -x }}
						className='h-[30rem] w-full will-change-transform'
					>
						<ProjectCard title='Reality' description='Microservice platform.' img='https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg'/>
						<ProjectCard title='Reality' description='Microservice platform.' img='https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg'/>
						<ProjectCard title='Reality' description='Microservice platform.' img='https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg'/>
						<ProjectCard title='Reality' description='Microservice platform.' img='https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg'/>
						<ProjectCard title='Reality' description='Microservice platform.' img='https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg'/>
						<ProjectCard title='Reality' description='Microservice platform.' img='https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg'/>
						<ProjectCard title='Reality' description='Microservice platform.' img='https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg'/>
					</Carousel>
				</div>
				*/}
			</section>
		</Page>
	);
};

export default Component;
