import { ResponsiveLine, Serie } from '@nivo/line';

// make sure parent container have a defined height when using

const chartTheme = {
    background: '#000',
    text: {
        fontSize: 12,
        fontFamily: 'Inter',
        fill: '#fff'
    },
    axis: {
        legend: {
            text: {
                fontSize: 12,
                fontFamily: 'Inter',
                fill: '#fff'
            }
        },
        ticks: {
            text: {
                fontSize: 12,
                fontFamily: 'Inter',
                fill: '#ffffff22'
            }
        }
    },
    legends: {
        title: {
            text: {
                fontSize: 12,
                fontFamily: 'Inter',
                fill: '#fff'
            }
        },
        text: {
            fontSize: 14,
            fontFamily: 'Inter',
            fill: '#fff'
        },
    },
    annotations: {
        text: {
            fontSize: 12,
            fontFamily: 'Inter',
            fill: '#fff'
        },
    },
    grid: {
        line: {
            stroke: '#ffffff11',
            strokeWidth: 1,
        }
    },
    tooltip: {
        container: {
            background: '#ffffff11',
        }
    }
}

const ResponsiveChart: React.FC<{ data: Serie[] }> = (props) => (
    <ResponsiveLine
        data={props.data}
        curve='cardinal'
        theme={chartTheme}
        margin={{ top: 85, right: 85, bottom: 85, left: 85 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        enablePoints
        
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default ResponsiveChart;