import { HTMLMotionProps, motion } from 'framer-motion';

import Button from '@components/Button';

import classes from '@/lib/classes';

import { Project } from '@/types/Project';

import Placeholder from '@assets/img/project_placeholder_icon.jpg';

import Styles from './ProjectBanner.module.sass';

const ProjectBannerLogoAnimationVariants = {
	initial: {
		opacity: 0,
	},
	animate: () => ({
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	}),
};

const ProjectBannerContentAnimationVariants = {
	initial: {
		opacity: 0,
	},
	animate: () => ({
		opacity: 1,
		transition: {
			delay: 0.5 + 0.3,
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

		className,

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
		animatedBannerUrl,
		bannerUrl,
		fallbackBannerUrl,
		name,
		description,
		repositoryUrl,
		deploymentUrl,
		...rest
	} = project;

	const classNames = classes(
		'optimize relative flex h-full w-full flex-col items-center justify-end rounded-2xl border border-[#fff1] bg-cover p-0 shadow',
		className
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
			{animatedBannerUrl ? (
				<motion.video
					className='absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-2xl object-cover'
					initial='initial'
					animate='animate'
					variants={ProjectBannerLogoAnimationVariants}
					custom={custom}
				>
					<source src={animatedBannerUrl} type='video/mp4' />
				</motion.video>
			) : (
				<picture>
					<source type='image/webp' srcSet={bannerUrl} />
					<source
						type='image/jpg'
						srcSet={fallbackBannerUrl ?? Placeholder}
					/>
					<motion.img
						className='absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-2xl object-cover'
						src={bannerUrl}
						alt={name}
						initial='initial'
						animate='animate'
						variants={ProjectBannerLogoAnimationVariants}
						custom={custom}
					/>
				</picture>
			)}
			<motion.div
				className={Styles.layer}
				initial='initial'
				animate='animate'
				variants={ProjectBannerContentAnimationVariants}
				custom={custom}
			/>
			<motion.div
				className='optimize z-[10] flex w-full flex-row items-center justify-between overflow-visible px-4 pb-4'
				initial='initial'
				animate='animate'
				variants={ProjectBannerContentAnimationVariants}
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
