import { SliceTooltipProps } from '@nivo/line';
import { motion } from 'framer-motion';

const Component: React.FC<SliceTooltipProps> = (props) => {
	const { slice } = props;

	return (
		<motion.div
			className='glass optimize rounded-[5px] border border-[#ffffff11] !bg-[#0008] shadow-md shadow-black/25 z-[100]'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.1, delay: 0.01 }}
			style={{
				backfaceVisibility: 'hidden',
				willChange: 'transform',
				fontSmooth: 'subpixel-antialiased',
			}}
		>
			<h1 className='w-full border-b border-[#ffffff11] py-2 text-center'>
				<strong>{slice.points[0].data.x.toString()}</strong>
			</h1>
			{slice.points.map((point) => (
				<div
					key={point.id}
					className='p-2 px-3'
					style={{ color: point.serieColor }}
				>
					<strong>{point.serieId}:</strong> {point.data.yFormatted}
				</div>
			))}
		</motion.div>
	);
};

Component.displayName = 'Chart Tooltip';

export default Component;
