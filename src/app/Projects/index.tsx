import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import Page from '@components/Page';

import { useLayout } from '@lib/layout';

import ProjectCard from './components/ProjectCard';

const Projects = [
	{
		title: 'Reality',
		description: 'A microservice platform and back-end.',
		img: 'https://i.ibb.co/VBgdP07/Reality-Logo-Web-Ready.jpg',
		link: 'https://realityplatform.io',
	},
	{
		title: 'Example',
		description: 'Lorem ipsum dolorem...',
		img: 'https://i.ibb.co/fCnfF8K/placeholder-swirl.jpg',
		link: '',
	},
	{
		title: 'Example',
		description: 'Lorem ipsum dolorem...',
		img: 'https://i.ibb.co/fCnfF8K/placeholder-swirl.jpg',
		link: '',
	},
	{
		title: 'Example',
		description: 'Lorem ipsum dolorem...',
		img: 'https://i.ibb.co/fCnfF8K/placeholder-swirl.jpg',
		link: '',
	},
];

const ProjectCardAnimationVariants = {
	initial: {
		opacity: 0,
	},
	animate: (i: number) => ({
		opacity: 1,
		transition: {
			delay: i * 0.15 + 0.3 / Projects.length,
		},
	}),
};

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
					<AnimatePresence mode='wait'>
						{Projects.map((project, i) => (
							<ProjectCard
								title={project.title}
								description={project.description}
								img={project.img}
								link={project.link}
								variants={ProjectCardAnimationVariants}
								initial='initial'
								animate='animate'
								exit='initial'
								custom={i}
								key={i}
							/>
						))}
					</AnimatePresence>
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
