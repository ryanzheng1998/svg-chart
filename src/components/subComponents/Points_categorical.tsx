import React from 'react'


interface Props {
    data: number[];
    maxY: number;
    color: string;
    width: number;
    height: number;
    padding: number;
}

const Points_categorical: React.FC<Props> = (p) => {
    const XSpacing = (p.width - 2 * p.padding) / p.data.length

    const points = p.data.map((value, index) => (
        <circle 
            key={index}
            cx={index * XSpacing + XSpacing / 2 + p.padding}
            cy={p.height - p.padding - (p.height - 2 * p.padding) / p.maxY * value}
            r={5}
            stroke={p.color}
            strokeWidth={2}
            fill="white"
        />
    ))

    return <>{points}</>
}

export default Points_categorical