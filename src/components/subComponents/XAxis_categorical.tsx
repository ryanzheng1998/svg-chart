import React from 'react'
import { Vector } from "../../lib/2d/interfaces/basic";
import Polyline from './Polyline';

interface Props {
    start: Vector;
    end: Vector;
    labels: string[];
    fontSize: number;
}

const XAxis_categorical: React.FC<Props> = (p) => {
    const len = p.start.x - p.start.y
    const perLen = len / p.labels.length

    const labels = p.labels.map((val, index) => {
        const start = {
            x: index * perLen + 0.5 * perLen,
            y: p.start.y,
        }

        const end = {
            x: start.x,
            y: start.y + 3,
        }

        return (
            <g key={index}>
                <Polyline
                    data={[start, end]}
                    color="black"
                    strokeWidth={1}
                />
                <text 
                    x={end.x}
                    y={end.y}
                    fontSize={p.fontSize}
                >{val}</text>
            </g>
        )
    })

    return (
        <>
            <Polyline 
                data={[p.start, p.end]}
                color="black"
                strokeWidth={2}
            />
        </>
    )
}

export default XAxis_categorical