import React from 'react'

// model
interface Vector {
    x: number;
    y: number;
}

interface Props {
    data: Vector[];
    smoothingRatio: number;
}


// lib
const vectorAdd = (a: Vector) => (b: Vector): Vector => ({
  x: a.x + b.x,
  y: a.y + b.y,
})

const vectorSub = (a: Vector) => (b: Vector): Vector => ({
  x: a.x - b.x,
  y: a.y - b.y,
}) 

const vectorScale = (a: number) => (b: Vector) => ({
  x: a * b.x,
  y: a * b.y,
})

const getControlPoints = (smoothingRatio: number, previous: Vector, current: Vector, next: Vector, next2: Vector): [Vector, Vector] => {
    const direction = vectorSub(next)(previous)
    const smoothedDirection = vectorScale(smoothingRatio)(direction)
    const controlPoint1 = vectorAdd(current)(smoothedDirection)
    
    
    const direction2 = vectorSub(current)(next2)
    const smoothedDiretion2 = vectorScale(smoothingRatio)(direction2)
    const controlPoint2 = vectorAdd(next)(smoothedDiretion2)

    return [controlPoint1, controlPoint2]
}

const generateBezierPath = (smoothingRatio: number, previous: Vector, current: Vector, next: Vector, next2: Vector): string => {
    const [p1, p2] = getControlPoints(smoothingRatio, previous, current, next, next2)
    return `C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${next.x} ${next.y}`
}


// view
const SmoothCubicBezier: React.FC<Props> = (p) => {
    // 重復第一點和最後一點方便批量處理
    const d = [p.data[0], ...p.data, p.data[p.data.length - 1]]    
    const start = `M ${d[1].x} ${d[1].y}`
    let middle = ""
    for(let i=1; i<d.length-2; i++){
        middle += generateBezierPath(p.smoothingRatio, d[i-1], d[i], d[i+1], d[i+2])
    }

    return (
        <>
            <path 
                d={start + middle}
                fill="transparent"
                stroke="black"
                strokeWidth="2"
            />
        </>
    )
}

export default SmoothCubicBezier