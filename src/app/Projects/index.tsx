import { useQuery } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import Page from '@components/Page';

import * as GetProjects from '@lib/graphql/queries/getProjects';
import { useLayout } from '@lib/layout';

import Placeholder from '@assets/img/project_placeholder_icon.jpg';

import ProjectCard from './components/ProjectCard';

const ProjectCardAnimationVariants = {
	initial: {
		opacity: 0,
	},
	animate: (i: number) => ({
		opacity: 1,
		transition: {
			delay: i * 0.15 + 0.3,
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

	const [projects, setProjects] = useState<
		GetProjects.ReturnType['projects']
	>([]);

	const { loading } = useQuery<GetProjects.ReturnType>(GetProjects.Query, {
		onCompleted: (data: GetProjects.ReturnType) => {
			const projects = data.projects;

			setProjects(projects);
		},
		onError: (error: any) => {
			console.log(error);
		},
	});

	return (
		<Page className='block pt-[5rem]'>
			<section className='align-center flex h-[calc(100vh-5rem)] w-full flex-col items-center bg-transparent'>
				<h1 className='text-gradient w-full py-8 pb-16 text-center font-exotic text-5xl font-bold md:my-[1.5] md:text-7xl'>
					Projects
				</h1>
				<div className='top-0 grid flex-1 grid-cols-1 gap-8 px-8 pb-12 md:flex md:flex-row md:flex-wrap md:place-content-center'>
					<AnimatePresence mode='wait'>
						{projects.map((project, i) => (
							<ProjectCard
								title={project.name}
								description={project.description}
								img={project.iconUrl ?? Placeholder}
								link={
									project.deploymentUrl ??
									project.repositoryUrl
								}
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
