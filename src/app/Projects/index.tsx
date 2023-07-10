import { useQuery } from '@apollo/client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

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

	const [loadingAssets, setLoadingAssets] = useState<boolean>(true);

	const [projects, setProjects] = useState<
		GetProjects.ReturnType['projects']
	>([]);

	const { loading } = useQuery<GetProjects.ReturnType>(GetProjects.Query, {
		onCompleted: (data: GetProjects.ReturnType) => {
			const projects = data.projects;

			const imageLoaders = data.projects.map((project) => {
				return new Promise((resolve) => {
					const image = new Image();
					image.src = project.iconUrl ?? Placeholder;
					image.onload = () => resolve(image);
				});
			});

			Promise.all(imageLoaders).then(() => {
				setLoadingAssets(false);
				setProjects(projects);
			});
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
						{(loading || loadingAssets) && (
							<motion.div
								key='loading'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.1 }}
								className='flex h-full w-full items-center justify-center'
							>
								<RotatingLines
									strokeColor='grey'
									animationDuration='1.5'
									strokeWidth='4'
									width='25'
								/>
							</motion.div>
						)}
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
			</section>
		</Page>
	);
};

export default Component;
