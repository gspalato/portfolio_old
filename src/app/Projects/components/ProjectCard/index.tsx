import { HTMLMotionProps, motion } from 'framer-motion';

import Button from '@components/Button';

import classes from '@/lib/classes';

import Placeholder from '@assets/img/project_placeholder_icon.jpg';

import Styles from './ProjectCard.module.sass';

interface IProjectCardProps extends HTMLMotionProps<'div'> {
	icon: string;
	fallbackIcon?: string;
	title: string;
	description?: string;
	link?: string;
}

const Component: React.FC<IProjectCardProps> = (props) => {
	const { icon, fallbackIcon, title, description, link, ...rest } = props;

	const classNames = classes(
		'relative flex h-[20rem] w-[20rem] flex-col items-center justify-end rounded-lg border border-accents-1 bg-cover p-0 shadow'
	);

	return (
		<motion.div className={classNames} {...rest}>
			<picture>
				<source type='image/webp' srcSet={icon} />
				<source type='image/jpg' srcSet={fallbackIcon ?? Placeholder} />
				<img
					className='absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg'
					src={icon}
					alt={title}
				/>
			</picture>
			<div className={Styles.layer} />
			<div className='z-[10] flex max-h-[26%] w-full flex-row items-center justify-between overflow-visible px-4 pb-4'>
				<div className='flex max-h-full w-fit flex-col items-start justify-between pr-4 before:rounded-lg'>
					<h1 className='font-display text-lg'>{title}</h1>
					<p className='overflow-hidden text-ellipsis break-words font-title text-sm font-normal text-overlays-8'>
						{description}
					</p>
				</div>
				<Button
					style={{ color: 'fff' }}
					className='flex h-8 items-center justify-center self-end !rounded-md !border-none !bg-overlays-6 px-4 py-2 backdrop-blur-sm'
					link={link}
					variant={{ background: 'transparent' }}
				>
					<h1 className='h-fit w-fit text-center font-title text-xs !font-thin tracking-wider'>
						View
					</h1>
				</Button>
			</div>
		</motion.div>
	);
};

export default Component;
