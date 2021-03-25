import React from 'react'
import { Vector } from '../../lib/interfaces/basic';
import { zipWith3 } from '../../lib/zipWith3';
import Dots from './Dot';

interface Props {
    center: Vector;
    radius: number;
    data: number[];
    label: string[];
    colors: string[];
}

const accumulate = (a: number[]): number[] => {
    let sum = 0;
    let answer = [...a]
    for(let i=0; i<a.length; i++){
        sum += answer[i]
        answer[i] = sum
    }
    return answer
}

const Pie: React.FC<Props> = (p) => {
    
    const sum = p.data.reduce((acc, val) => acc + val)

    const angles = p.data.map(v => v / sum)

    const accAngles = accumulate(angles)

    const endPoints = accAngles.map(v => ({
        x: Math.cos(0.5 * Math.PI - 2 * Math.PI * v) * p.radius + p.center.x,
        y: (-1) * Math.sin(0.5 * Math.PI - 2 * Math.PI * v) * p.radius + p.center.y,
    }))

    console.log(Math.cos(0.5 * Math.PI - 2 * Math.PI * accAngles[0]))

    const startPoints = [
        {x: p.center.x, y: p.center.y - p.radius},
        ...endPoints.slice(0, -1),
    ]

    const onePie = (color: string) => (start: Vector) => (end: Vector) => (
        <path 
            d={`M ${start.x} ${start.y} A ${p.radius} ${p.radius} 0 0 1 ${end.x} ${end.y} L ${p.center.x}, ${p.center.y} Z`}
            fill={color}
        />
    )

    const pies = zipWith3(onePie)(p.colors)(startPoints)(endPoints)

    return (
        <>
            {pies}
        </>
    )
}

export default Pie