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
	const { img, title, description, link } = props;

	return (
		<div
			className='relative flex h-[20rem] w-[20rem] flex-col items-center justify-end rounded-lg border border-accents-1 bg-cover p-0 shadow'
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className={Styles.layer} />
			<div className='z-[10] flex max-h-[26%] w-full flex-row items-center justify-between overflow-visible px-4 pb-4'>
				<div className='flex max-h-full w-fit flex-col items-start justify-between pr-4 before:rounded-lg'>
					<h1 className='font-display text-lg'>{title}</h1>
					<p className='overflow-hidden text-ellipsis break-words text-sm text-overlays-8'>
						{description}
					</p>
				</div>
				<Button
					style={{ color: 'fff' }}
					className='flex h-8 items-center justify-center self-end !rounded-md !border-none !bg-overlays-6 px-4 py-2 backdrop-blur-sm'
					link={link}
					whileHover={{ scale: 1.05 }}
				>
					<h1 className='h-fit w-fit text-center font-title text-xs !font-thin tracking-wider'>
						View
					</h1>
				</Button>
			</div>
		</div>
	);
};

export default Component;
