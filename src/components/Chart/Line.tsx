import { LineSvgProps, ResponsiveLine } from '@nivo/line';

import { BaseChartTheme } from './Theme';
import CustomTooltip from './Tooltip';

import classes from '@lib/classes';

type LineData = {
	id: string;
	color: string;
	data: { x: string | number; y: number }[];
};

interface IResponsiveChartProps extends LineSvgProps {
	className?: string;
	data: LineData[];
}

const ResponsiveChart: React.FC<IResponsiveChartProps> = (props) => {
	const { className, data, margin, ...rest } = props;

	const classNames = classes(
		'h-full w-full min-h-0 min-w-0 overflow-hidden',
		className
	);

	return (
		<div className={classNames}>
			<ResponsiveLine
				data={data}
				theme={BaseChartTheme}
				animate={true}
				curve='monotoneX'
				colors={({ color }) => color}
				margin={margin ?? { top: 50, bottom: 50, left: 50, right: 50 }}
				layers={[
					'markers',
					'axes',
					'areas',
					'lines',
					'points',
					'slices',
					'mesh',
					'legends',
				]}
				enablePoints
				pointSize={5}
				pointColor='#000'
				pointBorderWidth={1.25}
				pointBorderColor={{ from: 'serieColor' }}
				/* Tooltip */
				useMesh={true}
				enableSlices='x'
				sliceTooltip={({ axis, slice }) => (
					<CustomTooltip axis={axis} slice={slice} />
				)}
				{...rest}
			/>
		</div>
	);
};

export default ResponsiveChart;
