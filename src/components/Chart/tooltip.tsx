import { PointTooltipProps } from '@nivo/line';
import { BasicTooltip } from '@nivo/tooltip';

import Styles from './chart.module.sass';

const CustomTooltip: React.FC<PointTooltipProps> = (props) => {
    console.log(props)
    return (
        <BasicTooltip
            id={props.point.data.xFormatted}
            value={props.point.data.yFormatted}
            color={props.point.serieColor}
            enableChip
        />
    );
}

export default CustomTooltip;