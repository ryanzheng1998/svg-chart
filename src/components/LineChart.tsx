import React from 'react'
import Border from './subComponents/Border'
import Points_categorical from './subComponents/Points_categorical'
import SmoothCubicBezier from './subComponents/SmoothCubicBezier'
import XAxis from './subComponents/XAxis'
import YAxis from './subComponents/YAxis'

interface Props {
    title: string;
    xLables: string[];
    line1: number[];
    line2: number[];
    width: number;
    height: number;
    fontSize: number;
    padding: number;
    yScale: number;
}

const LineChart: React.FC<Props> = (p) => {

    const maxY = Math.max(...p.line1, ...p.line2)

    const XSpacing = (p.width - 2 * p.padding) / p.line1.length

    const newLine1 = p.line1.map((v, i) => ({
        x: i * XSpacing + XSpacing / 2 + p.padding,
        y: p.height - p.padding - (p.height - 2 * p.padding) / maxY * v
    }))


    return (
        <svg
            width={p.width}
            height={p.height}
        >
            <text
                x="50%"
                y={p.fontSize* 2}
                fontSize={p.fontSize*1.5}
                alignmentBaseline="central"
                textAnchor="middle"
            >{p.title}</text>
            <SmoothCubicBezier 
                data={newLine1}
                smoothingRatio={0.2}
            />
            <Points_categorical 
                data={p.line1}
                maxY={maxY}
                color="red"
                width={p.width}
                height={p.height}
                padding={p.padding}
            />
            <Border 
                padding={p.padding}
                width={p.width}
                height={p.height}
            />   
            <XAxis
                labels={p.xLables}
                fontSize={p.fontSize}
                height={p.height}
                width={p.width}
                padding={p.padding}
            />
            <YAxis
                padding={p.padding}
                height={p.height}
                yScale={p.yScale}
                maxValue={maxY}
                fontSize={p.fontSize}
            />
        </svg>
    )
}

export default LineChart