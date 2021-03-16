import React from 'react'

interface Props {
    padding: number;
    height: number;
    width: number;
    xScale: number;
    maxValue: number;
    fontSize: number
}

const XAxis2: React.FC<Props> = (p) => {
    const xLables = new Array(p.maxValue / p.xScale).fill(0).map((_, index) => (
        <g key={index}>
            <line 
                x1={p.padding + (p.width - 2 * p.padding) * index * p.xScale / p.maxValue}
                y1={p.height - p.padding}
                x2={p.padding + (p.width - 2 * p.padding) * index * p.xScale / p.maxValue}
                y2={p.height - p.padding + 10}
                stroke="black"
                strokeWidth="1px"
            />
            <text 
                x={p.padding + (p.width - 2 * p.padding) * index * p.xScale / p.maxValue}
                y={p.height - p.padding + 20}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize={p.fontSize}
            >{index * p.xScale}</text>
        </g>
    ))

    return <>{xLables}</>
}

export default XAxis2