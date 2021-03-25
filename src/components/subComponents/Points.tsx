import React from 'react'

interface Vector {
    x: number,
    y: number,
}

interface Props {
    data: Vector[];
    width: number;
    height: number;
    padding: number;
}

const Points: React.FC<Props> = (p) => {
    const maxX = Math.max(...p.data.map(v=>v.x))
    const maxY = Math.max(...p.data.map(v=>v.y))

    const points = p.data.map((value, index) => (
        <circle 
            key={index}
            cx={(p.width - 2 * p.padding) / maxX * value.x + p.padding}
            cy={p.height - p.padding - (p.height - 2 * p.padding) / maxY * value.y}
            r={5}
            fill="rgb(128, 0, 0)"
        />
    ))

    return <>{points}</>
}

export default Points




