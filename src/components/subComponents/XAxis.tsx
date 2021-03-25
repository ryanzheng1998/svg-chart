import React from 'react'

interface Props {
    labels: string[];
    fontSize: number;
    height: number;
    width: number;
    padding: number;
}

const XAxis: React.FC<Props> = (p) => {
    const spacing = (p.width - 2 * p.padding) / p.labels.length
    const jsxLabels = p.labels.map((value, index) => (
        <text 
            key={index}
            x={index * spacing + 0.5 * spacing + p.padding}
            y={p.height - p.padding + p.fontSize * 2}
            fontSize={`${p.fontSize}px`}
            textAnchor="middle"
        >{value}</text>
    ))

    return <>{jsxLabels}</>
}

export default XAxis