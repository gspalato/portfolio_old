import { HTMLMotionProps, motion } from 'framer-motion';

import Button from '@components/Button';

import classes from '@/lib/classes';

import { Project } from '@/types/Project';

import Placeholder from '@assets/img/project_placeholder_icon.jpg';

import Styles from './ProjectCard.module.sass';

interface IProjectCardProps extends HTMLMotionProps<'div'> {
	project: Project;
}

const Component: React.FC<IProjectCardProps> = (props) => {
	const {
		animatedIconUrl,
		iconUrl,
		fallbackIconUrl,
		name,
		description,
		repositoryUrl,
		deploymentUrl,
		...rest
	} = props.project;

	const classNames = classes(
		'relative flex h-[20rem] w-[20rem] flex-col items-center justify-end rounded-lg border border-accents-1 bg-cover p-0 shadow'
	);

	return (
		<motion.div className={classNames} {...rest}>
			{animatedIconUrl ? (
				<motion.video className='absolite bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg'>
					<source src={animatedIconUrl} type='video/mp4' />
				</motion.video>
			) : (
				<picture>
					<source type='image/webp' srcSet={iconUrl} />
					<source
						type='image/jpg'
						srcSet={fallbackIconUrl ?? Placeholder}
					/>
					<motion.img
						className='absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg'
						src={iconUrl}
						alt={name}
						initial={{ opacity: 0, filter: 'blur(10px)' }}
						animate={{ opacity: 1, filter: 'none' }}
						transition={{ delay: 1, duration: 0.5 }}
					/>
				</picture>
			)}
			<motion.div
				className={Styles.layer}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.2 }}
			/>
			<motion.div
				className='z-[10] flex max-h-[26%] w-full flex-row items-center justify-between overflow-visible px-4 pb-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.2 }}
			>
				<div className='flex max-h-full w-fit flex-col items-start justify-between pr-4 before:rounded-lg'>
					<h1 className='font-display text-lg'>{name}</h1>
					<p className='overflow-hidden text-ellipsis break-words font-title text-sm font-normal text-overlays-8'>
						{description}
					</p>
				</div>
				<Button
					style={{ color: 'fff' }}
					className='flex h-8 items-center justify-center self-end !rounded-md !border-none !bg-overlays-6 px-4 py-2 backdrop-blur-sm'
					link={repositoryUrl}
					variant={{ background: 'transparent' }}
				>
					<h1 className='h-fit w-fit text-center font-title text-xs !font-thin tracking-wider'>
						View
					</h1>
				</Button>
			</motion.div>
		</motion.div>
	);
};

export default Component;
