import Button from '@/components/Button';
import { Card } from '@/components/Card';

import classes from '@/lib/classes';

import Styles from './ProjectCard.module.sass';

interface IProjectCardProps {
	img: string;
	title: string;
	description?: string;
	link?: string;
}

const Component: React.FC<IProjectCardProps> = (props) => {
	const { img, title, description, link, ...rest } = props;

	return (
		<div
			className='relative flex h-[20rem] w-[20rem] flex-col items-center justify-end rounded-lg border border-accents-1 bg-cover p-0 shadow'
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className={Styles.layer} />
			<div className='z-[9] flex max-h-[26%] w-full flex-row items-center justify-between overflow-visible px-4 pb-4'>
				<div className='flex max-h-full w-fit flex-col items-start justify-between pr-4 before:rounded-lg'>
					<h1 className='z-[10] font-display text-lg'>{title}</h1>
					<p className='z-[10] overflow-hidden text-ellipsis break-words text-sm text-overlays-8'>
						{description}
					</p>
				</div>
				<Button
					style={{ color: 'fff' }}
					className='z-[1000] h-8 self-end !rounded-md !border-none !bg-overlays-6 px-4 py-2 text-center font-title text-xs !font-thin tracking-wider backdrop-blur-sm'
					link={link}
					whileHover={{ scale: 1.05 }}
				>
					View
				</Button>
			</div>
		</div>
	);
};

export default Component;
