import React from 'react'
import { Vector } from '../../lib/interfaces/basic'

interface Props {
    labels: string[];
    middlePoints: Vector[];
    directions: Vector[];
    len1: number;
    len2: number;
}

const pieLegend: React.FC<Props> = (p) => {
    const legend = (label: string) => (middlePoint: Vector) => (directions: Vector) => {
        
    }
    return <></> 
}

export default pieLegend