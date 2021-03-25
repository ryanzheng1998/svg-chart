import React from 'react'
import { Vector } from '../../lib/interfaces/basic';

interface Props {
    data: Vector[];
    
    colors?: string[];
    color?: string;
    dotSize?: number;
}

const Dots: React.FC<Props> = (p) => (
    <>
        {p.data.map((val, index) => (
            <circle 
                cx={val.x}
                cy={val.y}
                r={p.dotSize ? p.dotSize : 5}
                fill={p.colors ? p.colors[index] : p.color ? p.color : "red"}
            />
        ))}
    </>
)

export default Dots