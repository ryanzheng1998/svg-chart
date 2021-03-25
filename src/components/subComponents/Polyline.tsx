import React from 'react'
import { Vector } from '../../lib/2d/interfaces/basic';

interface Props {
    data: Vector[];
    color: string;
    strokeWidth: number;
}

const Polyline: React.FC<Props> = (p) => {
    const points = p.data.reduce((acc, val) => {
        return acc + `${val.x}, ${val.y} `
    }, "")
    
    return (
        <polyline 
            fill="none"
            stroke={p.color}
            strokeWidth={p.strokeWidth}
            points={points}
        />
    )
}

export default Polyline