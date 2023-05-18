import { LineSvgProps, ResponsiveLine } from '@nivo/line'

import CustomTooltip from './tooltip';

import { BaseChartTheme } from './theme';

import Styles from './chart.module.sass';


type LineData = {
    id: string;
    color: string;
    data: { x: string | number, y: number }[]
}

interface IResponsiveChartProps extends LineSvgProps {
    className?: string;
    data: LineData[];
}

const ResponsiveChart: React.FC<IResponsiveChartProps> = (props) => {
    const {
        className,
        data,
        margin,
        ...moreProps
    } = props;

    const classNames = [Styles.responsiveChartWrapper, className].join(' ');

    return (
        <div className={classNames}>
            <ResponsiveLine
                data={data}

                theme={BaseChartTheme}
                animate={true}
                curve='monotoneX'
                colors={({ color }) => color}
                margin={margin ?? { top: 50, bottom: 50, left: 50, right: 50 }}
                layers={['markers', 'axes', 'areas', 'lines', 'points', 'slices', 'mesh', 'legends']}
                enablePoints
                pointSize={6}
                pointColor="#000"
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                
                /* Tooltip */
                useMesh={true}
                enableSlices="x"
                sliceTooltip={({ axis, slice }) => (<CustomTooltip axis={axis} slice={slice} />)}

                {...moreProps}
            />
        </div>
    )
}

export default ResponsiveChart;