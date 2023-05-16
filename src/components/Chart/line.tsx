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
                margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
                layers={["axes", "lines", "markers", "legends"]}
                enablePoints
                pointSize={7}
                pointColor="inherit"
                tooltip={CustomTooltip}

                {...moreProps}
            />
        </div>
    )
}

export default ResponsiveChart;