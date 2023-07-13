import { HTMLMotionProps, motion } from 'framer-motion';

import Button from '@components/Button';

import classes from '@/lib/classes';

import { Project } from '@/types/Project';

import Placeholder from '@assets/img/project_placeholder_icon.jpg';

import Styles from './ProjectCard.module.sass';

const ProjectCardLogoAnimationVariants = {
	initial: {
		opacity: 0,
		filter: 'blur(5px)',
	},
	animate: (i: number) => ({
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			delay: i * 0.3 + 0.5,
			duration: 0.5,
		},
	}),
};

const ProjectCardContentAnimationVariants = {
	initial: {
		opacity: 0,
	},
	animate: (i: number) => ({
		opacity: 1,
		transition: {
			delay: i * 0.3 + 1,
			duration: 0.5,
		},
	}),
};

interface IProjectCardProps extends HTMLMotionProps<'div'> {
	project: Project;
}

const Component: React.FC<IProjectCardProps> = (props) => {
	const {
		project,

		initial,
		animate,
		exit,
		whileDrag,
		whileFocus,
		whileHover,
		whileTap,
		whileInView,
		variants,
		custom,
	} = props;

	const {
		animatedIconUrl,
		iconUrl,
		fallbackIconUrl,
		name,
		description,
		repositoryUrl,
		deploymentUrl,
		...rest
	} = project;

	const classNames = classes(
		'optimize relative flex h-[20rem] w-[20rem] flex-col items-center justify-end rounded-2xl border border-[#fff1] bg-cover p-0 shadow md:h-[22.5rem] md:w-[22.5rem]'
	);

	return (
		<motion.div
			className={classNames}
			initial={initial}
			animate={animate}
			exit={exit}
			whileDrag={whileDrag}
			whileFocus={whileFocus}
			whileHover={whileHover}
			whileTap={whileTap}
			whileInView={whileInView}
			variants={variants}
			custom={custom}
			{...rest}
		>
			{animatedIconUrl ? (
				<motion.video
					className='absolite bottom-0 left-0 right-0 top-0 h-full w-full rounded-2xl'
					initial='initial'
					animate='animate'
					variants={ProjectCardLogoAnimationVariants}
					custom={custom}
				>
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
						className='absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-2xl'
						src={iconUrl}
						alt={name}
						initial='initial'
						animate='animate'
						variants={ProjectCardLogoAnimationVariants}
						custom={custom}
					/>
				</picture>
			)}
			<motion.div
				className={Styles.layer}
				initial='initial'
				animate='animate'
				variants={ProjectCardContentAnimationVariants}
				custom={custom}
			/>
			<motion.div
				className='optimize z-[10] flex max-h-[26%] w-full flex-row items-center justify-between overflow-visible px-4 pb-4'
				initial='initial'
				animate='animate'
				variants={ProjectCardContentAnimationVariants}
				custom={custom}
			>
				<div className='flex max-h-full w-fit flex-col items-start justify-between pr-4 before:rounded-lg'>
					<h1 className='font-display text-lg'>{name}</h1>
					<p className='overflow-hidden text-ellipsis break-words font-title text-sm font-normal text-overlays-8 md:tracking-wide'>
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
