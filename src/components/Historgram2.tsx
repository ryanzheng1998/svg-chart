import React from 'react'
import { Vector } from '../lib/2d/interfaces/basic'
import Polyline from './subComponents/Polyline'
import XAxis_categorical from './subComponents/XAxis_categorical'

interface Props {
    title: string;
    titleFontSize: number;
    canvasSize: Vector;
    data: number[];
    label: string[];
    labelFontSize: number;
    yScale: number;
}

const Historgram2: React.FC<Props> = (p) => {


    return (
        <svg
            width={p.canvasSize.x}
            height={p.canvasSize.y}
        >
            {/* title */}
            <text 
                x="50%"
                y={p.titleFontSize * 3}
                fontSize={p.titleFontSize}
                alignmentBaseline="central"
                textAnchor="middle"
            >{p.title}</text>

            {/* x axis */}

        </svg>
    )
}

export default Historgram2