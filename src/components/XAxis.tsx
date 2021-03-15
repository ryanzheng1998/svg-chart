import React from 'react'

interface Props {
    labels: string[];
    fontSize: number;
    height: number;
    padding: number;
    barAreaWidth: number;
}

const XAxis: React.FC<Props> = ({labels, padding, fontSize, height, barAreaWidth}) => {
    const jsxLabels = labels.map((value, index) => (
        <text 
            key={index}
            x={index * barAreaWidth + 0.5 * barAreaWidth + padding}
            y={height - padding + fontSize * 2}
            fontSize={`${fontSize}px`}
            textAnchor="middle"
        >{value}</text>
    ))

    return <>{jsxLabels}</>
}

export default XAxis