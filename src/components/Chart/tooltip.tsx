import { SliceTooltipProps } from '@nivo/line';
import { motion } from 'framer-motion';

import Styles from './chart.module.sass';

const CustomTooltip: React.FC<SliceTooltipProps> = (props) => {
    const { slice } = props;

    return (
        <motion.div
            className={Styles.tooltipWrapper}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.01 }}
        >
            <div><strong>{slice.points[0].data.x.toString()}</strong></div>
            {
            slice.points.map(point => (
                <div key={point.id} style={{ color: point.serieColor }}>
                    <strong>{point.serieId}:</strong> {point.data.yFormatted}
                </div>
            ))
            }
        </motion.div>
    );
}

export default CustomTooltip;