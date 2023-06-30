import Button from '@/components/Button';
import { Card } from '@/components/Card';

import classes from '@/lib/classes';

import Styles from './ProjectCard.module.sass';
import { Link } from 'react-router-dom';

interface IProjectCardProps {
	img: string;
	title: string;
	description?: string;
	link?: string;
}

const Component: React.FC<IProjectCardProps> = (props) => {
	const { img, title, description, link, ...rest } = props;

	const classNames = classes(
		'relative flex h-[20rem] w-[20rem] flex-col items-center justify-end p-0 bg-cover rounded-lg border border-accents-1 shadow',
		Styles.insetBorder
	);

	return (
		<Card
			className={classNames}
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className={Styles.layer} />
			<div className='max-h-[26%] overflow-visible flex w-full flex-row items-center justify-between px-4 pb-4 z-[9]'>
				<div className='flex max-h-full w-fit flex-col items-start justify-between pr-4 before:rounded-lg'>
					<h1 className='z-[10] font-display text-lg'>{title}</h1>
					<p className='z-[10] overflow-hidden break-words text-sm text-overlays-8 text-ellipsis'>{description}</p>
				</div>
				<Button
					style={{ color: 'fff' }}
					className='z-[1000] h-8 backdrop-blur-sm self-end !border-none !rounded-md !bg-overlays-6 px-4 py-2 text-center !font-thin font-title tracking-wider text-xs'
					link={link}
					whileHover={{ scale: 1.05 }}
				>
					View
				</Button>
				{/*
				<Link
					className='z-[1000] h-8 flex justify-center items-center backdrop-blur-sm self-end !border-none !rounded-md !bg-overlays-6 px-4 py-2'
					to={link ?? ""}
					target={link?.startsWith('/') ? undefined : "_blank"}
					rel={link?.startsWith('/') ? undefined : "noopener noreferrer"}
				>
					<h1 className='font-title font-thin text-xs text-white tracking-wide'>View</h1>
				</Link>
				*/}
			</div>
		</Card>
	);
};

export default Component;
