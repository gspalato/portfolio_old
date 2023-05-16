import React from 'react';
import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleLinear, scaleTime } from '@visx/scale';
import { ParentSize } from '@visx/responsive';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { Curve } from '@visx/visx';

import {
    AnimatedAxis,
    AnimatedGrid,
    AnimatedLineSeries,
    Tooltip,
    XYChart
} from "@visx/xychart";

import Styles from './chart.module.sass';

/*
const accessors = {
    xAccessor: (d) => new Date(`${d.x}T00:00:00`),
    yAccessor: (d) => d.y
};
  
const LineChart = (props) => {
    const { data } = props;

    return (
        <div className={Styles.chartWrapper}>
            <ParentSize>
            {
                ({ width, height }) => (
                    <XYChart
                        height={height}
                        margin={{ left: 60, top: 35, bottom: 38, right: 27 }}
                        xScale={{ type: "time" }}
                        yScale={{ type: "linear" }}
                    >
                        <AnimatedGrid
                            columns={false}
                            numTicks={4}
                            lineStyle={{
                            stroke: "#e1e1e1",
                            strokeLinecap: "round",
                            strokeWidth: 1
                            }}
                            strokeDasharray="0, 4"
                        />
                        <AnimatedAxis
                            hideAxisLine
                            hideTicks
                            orientation="bottom"
                            tickLabelProps={() => ({ dy: tickLabelOffset })}
                            left={30}
                            numTicks={4}
                        />
                        <AnimatedAxis
                            hideAxisLine
                            hideTicks
                            orientation="left"
                            numTicks={4}
                            tickLabelProps={() => ({ dx: -10 })}
                        />
                
                        <AnimatedLineSeries
                            stroke="#008561"
                            dataKey="primary_line"
                            data={data[0]}
                            {...accessors}
                        />
                        <Tooltip
                            snapTooltipToDatumX
                            snapTooltipToDatumY
                            showSeriesGlyphs
                            glyphStyle={{
                            fill: "#008561",
                            strokeWidth: 0
                            }}
                            renderTooltip={
                                ({ tooltipData }) => (
                                    <div className={Styles.tooltipContainer}>
                                    {
                                    Object.entries(tooltipData.datumByKey).map((lineDataArray) => {
                                        const [key, value] = lineDataArray;
                    
                                        return (
                                        <div className="row" key={key}>
                                            <div className="date">
                                            {format(accessors.xAccessor(value.datum), "MMM d")}
                                            </div>
                                            <div className="value">
                                            <div className={Styles.coloredSquare} style={{ background: "#008561" }} />
                                            {accessors.yAccessor(value.datum)}
                                            </div>
                                        </div>
                                        );
                                    })
                                    }
                                    </div>
                                )
                            }
                        />
                    </XYChart>
                )
            }
            </ParentSize>
        </div>
    )
}

export default LineChart;

/*
  export default function App() {
    return (
      <div className="App">
        <LineChart />
      </div>
    );
  }
  
  const ChartContainer = styled.div`
    text {
      font-family: "Untitled Sans", sans-serif;
    }
  
    .visx-axis-tick {
      text {
        font-size: 12px;
        font-weight: 400;
        fill: #666666;
      }
    }
  `;
  
  const ColoredSquare = styled.div`
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-right: 8px;
    background: ${({ color }) => color};
    border-radius: 4px;
  `;
  
  const TooltipContainer = styled.div`
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 4px;
    color: #222222;
  
    .date {
      font-size: 12px;
      margin-bottom: 8px;
      color: #222222;
      font-weight: 600;
    }
    .value {
      display: flex;
      align-items: center;
      font-weight: 400;
      color: #000000;
    }
  `;
  */
  


interface ILineGraph extends React.PropsWithChildren {
    data: { x: number, y: number }[][]; // Array of point arrays (Array of lines)
    colors?: string[];
}

const LineGraph: React.FC<ILineGraph> = (props) => {
    const { data, children, colors } = props;

    const margin = { top: 10, right: 10, bottom: 10, left: 10 };

    console.log(data)

    const getX = (p: { x: number, y: number }) => p.x;
    const getY = (p: { x: number, y: number }) => p.y;

    const maxX = Math.max(...data.map(l => l.map(getX)).flat());
    const maxY = Math.max(...data.map(l => l.map(getY)).flat());

    return (
        <div className={Styles.chartWrapper}>
            <ParentSize>
            {
            ({ width, height }) => {
                const xScale = scaleTime<number>({
                    domain: [0, maxX],
                    range: [0, width - margin.left - margin.right],
                    nice: true
                });
                const yScale = scaleLinear<number>({
                    domain: [0, maxY],
                    range: [height - margin.top - margin.bottom, 0],
                    nice: true
                });

                return (
                    <svg width={width} height={height}>
                        <Group left={margin.left} top={margin.top}>
                        {
                            data.map((points, i) => (
                                <LinePath
                                    key={i}
                                    curve={Curve.curveCardinal}
                                    x={(p) => xScale(getX(p)) ?? 0}
                                    y={(p) => yScale(getY(p)) ?? 0}
                                    data={points}
                                    stroke={colors?.[i] ?? "#333"}
                                    strokeWidth={2}
                                    strokeOpacity={1}
                                    shapeRendering="geometricPrecision"
                                />
                            ))
                        }
                            {children}
                        </Group>
                        <AxisLeft
                            stroke='#EDF2F7'
                            tickStroke='#EDF2F7'
                            scale={yScale}
                            tickLabelProps={() => ({
                                fill: '#EDF2F7',
                                fontSize: 11,
                                textAnchor: 'end',
                            })} 
                        />
                        <text x="-125" y="20" transform="rotate(-90)" fontSize={12} fill='#EDF2F7'>
                            Count
                        </text>
                        <AxisBottom
                            scale={xScale}
                            stroke='#EDF2F7'
                            tickFormat={((d) => {
                                if (d instanceof Date) {
                                    return d.toLocaleDateString()
                                }
                            })}
                            tickStroke='#EDF2F7'
                            top={innerHeight}
                            tickLabelProps={() => ({
                                fill: '#EDF2F7',
                                fontSize: 11,
                                textAnchor: 'middle',
                            })} 
                        />
                    </svg>
                )
            }
            }
            </ParentSize>
        </div>
    );
}

export default LineGraph;
