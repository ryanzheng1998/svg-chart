import React from 'react'
import Border from './Border'
import Tooltip from './ToolTip'
import XAxis2 from './XAxis2'
import YAxis from './YAxis'

// ----------------------
// state model
// ---------------------
interface State {
    showTooltip: boolean;
    tooltipContent: string;
    mousePositionX: number;
    mousePositionY: number;
    pointOnHover: boolean[];
}

interface Props {
    title: string;
    data: number[][];
    width: number;
    height: number;
    fontSize: number;
    padding: number;
    yScale: number;
    xScale: number;
}


// ----------------------
// lib
// ----------------------
const clientToSVGPosition = (svg: SVGSVGElement) => (clientX: number) => (clientY: number) => {
    const pt = svg.createSVGPoint()
    pt.x = clientX
    pt.y = clientY

    const domMatrix = svg.getScreenCTM()

    if(!domMatrix) throw Error('svg getScreenCTM error')
    return pt.matrixTransform(domMatrix.inverse())
}

// ----------------------
// action model
// ----------------------
const onHover = (positionX: number, positionY: number, content: string) => ({
    type: 'ON_HOVER' as const,
    payload: {
        positionX: positionX,
        positionY: positionY,
        content: content,
    }
})

const mouseHover = (a: boolean) => ({
    type: 'MOUSE_HOVER' as const,
    payload: {mouseHover: a},
})

type Action = ReturnType<typeof onHover> | ReturnType<typeof mouseHover>

// ----------------------
// update
// ----------------------
const reducer = (state: State, action: Action): State => {
    switch(action.type){
        case 'ON_HOVER':
            return ({
                ...state,
                mousePositionX: action.payload.positionX,
                mousePositionY: action.payload.positionY,
                tooltipContent: action.payload.content,
            })
        case 'MOUSE_HOVER':
            return ({
                ...state,
                showTooltip: action.payload.mouseHover,
            })
    }
}

const ScatterChart: React.FC<Props> = (p) => {

    const initState: State = {
        showTooltip: false,
        tooltipContent: '',
        mousePositionX: 0,
        mousePositionY: 0,
        pointOnHover: new Array(p.data.length).fill(false),
    }

    const [state, dispatch] = React.useReducer(reducer, initState)
    const canvas = React.useRef<SVGSVGElement>(null)
    const maxX = Math.max(...p.data.map(v => v[0])) + 10
    const maxY = Math.max(...p.data.map(v => v[1])) + 10

    const points = p.data.map((value, index) => (
        <circle 
            key={index}
            cx={(p.width - 2 * p.padding) / maxX * value[0] + p.padding}
            cy={p.height - p.padding - (p.height - 2 * p.padding) / maxY * value[1]}
            r={5}
            fill="rgb(128, 0, 0)"
            onMouseMove={e => {
                if (!canvas.current) return
                const svgPosition = clientToSVGPosition(canvas.current)(e.clientX)(e.clientY)
                return dispatch(onHover(svgPosition.x, svgPosition.y, `x: ${value[0]} \n y: ${value[1]}`))
            }}
            onMouseOver={() => dispatch(mouseHover(true))}
            onMouseOut={() => dispatch(mouseHover(false))}
        />
    ))

    return (
        <>
            <svg 
                ref={canvas}
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
                {points}
                <Border 
                    padding={p.padding}
                    width={p.width}
                    height={p.height}
                 />           
                <XAxis2 
                    fontSize={p.fontSize}
                    padding={p.padding}
                    height={p.height}
                    maxValue={maxX}
                    xScale={p.xScale}
                    width={p.width}
                />
                <YAxis
                    padding={p.padding}
                    height={p.height}
                    yScale={p.yScale}
                    maxValue={maxY}
                    fontSize={p.fontSize}
                />
                {state.showTooltip && <Tooltip 
                    x={state.mousePositionX + 15}
                    y={state.mousePositionY - 9}
                    fontSize={p.fontSize}
                >{state.tooltipContent}</Tooltip> }
            </svg>
        </>
    )
}

export default ScatterChart