import React from 'react'

interface Props {
    padding: number;
    height: number;
    yScale: number;
    maxValue: number;
    fontSize: number;
}

const YAxis: React.FC<Props> = ({padding, height, yScale, maxValue, fontSize}) => {
    const yLable = new Array(Math.floor(maxValue / yScale)).fill(0).map((_, index) => (
        <>
            <line 
                x1={padding + 1}
                y1={height - padding - (height - 2 * padding) / maxValue * index * yScale}
                x2={padding - 10}
                y2={height - padding - (height - 2 * padding) / maxValue * index * yScale}
                stroke="black"
                strokeWidth={1}
            />
            <text
                x={padding - 15}
                y={height - padding - (height - 2 * padding) / maxValue * index * yScale}
                textAnchor="end"
                alignmentBaseline="central"
                fontSize={fontSize}
            >{index * yScale}</text>
        </>
    ))

    return <>{yLable}</>
}

export default YAxis