import React from 'react'

interface Props {
    labels: string[];
    fontSize: number;
    height: number;
    padding: number;
    spacing: number;
}

const XAxis: React.FC<Props> = ({labels, padding, fontSize, height, spacing}) => {
    const jsxLabels = labels.map((value, index) => (
        <text 
            key={index}
            x={index * spacing + 0.5 * spacing + padding}
            y={height - padding + fontSize * 2}
            fontSize={`${fontSize}px`}
            textAnchor="middle"
        >{value}</text>
    ))

    return <>{jsxLabels}</>
}

export default XAxis