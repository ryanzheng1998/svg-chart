import React from 'react'
import { Vector } from '../lib/interfaces/basic';
import Pie from './subComponents/Pie';

interface Props {
    title: string;
    data: number[];
    lable: string[];
    radius: number;
    width: number;
    height: number;
    fontSize: number;
}


const PieChart: React.FC<Props> = (p) => {
    const center = {
        x: p.width / 2,
        y: p.height / 2,
    }

    return (
        <svg
            width={p.width}
            height={p.height}
        >
            <text
                x="50%"
                y={p.fontSize* 2}
                fontSize={p.fontSize*1.5}
                alignmentBaseline="central"
                textAnchor="middle"
            >{p.title}</text>

            <Pie 
                center={center}
                radius={p.radius}
                data={p.data}
                label={p.lable}
                colors={["red", "blue", "yellow", "pink", "black", "green", "purple", "silver", "gold"]}
            />

        </svg>
    )
}

export default PieChart