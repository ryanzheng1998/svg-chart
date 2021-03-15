import React from 'react'
import Border from './Border'
import XAxis from './XAxis'
import YAxis from './YAxis'

interface Props {
    title: string;
    data: number[];
    width: number;
    height: number; 
    fontSize: number;
    padding: number;
    barPadding: number;
    label: string[];
    yScale: number;
}

const Historgram: React.FC<Props> = ({title, data, width, height, fontSize, padding, barPadding, label, yScale}) => {

    const maxValue = Math.max(...data)
    const barAreaLen = (width - 2 * padding) / data.length

    const Bars = data.map((value, index) => (
        <rect 
            key={index}
            x={index * barAreaLen + barPadding + padding}
            y={height - padding - (height - 2 * padding) / maxValue * value}
            width={barAreaLen - 2 * barPadding}
            height={(height - 2 * padding) / maxValue * value}
            fill='#4A90E2'
        />
    ))

    return (
        <>
            <svg 
                width={width}
                height={height}
            >
                <text
                    x="50%"
                    y={fontSize* 2}
                    fontSize={fontSize*1.5}
                    alignmentBaseline="central"
                    textAnchor="middle"
                >{title}</text>
                <Border 
                    padding={padding}
                    width={width}
                    height={height}
                 />           
                {Bars}
                <XAxis 
                    labels={label}
                    fontSize={fontSize}
                    padding={padding}
                    height={height}
                    barAreaWidth={barAreaLen}
                />
                <YAxis
                    padding={padding}
                    height={height}
                    yScale={yScale}
                    maxValue={maxValue}
                    fontSize={fontSize}
                />
            </svg>
        </>
    )
}

export default Historgram