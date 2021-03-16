import React from 'react'
import { act } from 'react-dom/test-utils'
import Border from './Border'
import Tooltip from './ToolTip'
import XAxis from './XAxis'
import YAxis from './YAxis'

// ----------------------
// state model
// ----------------------
interface State {
    showTooltip: boolean;
    tooltipContent: string;
    mousePositionX: number;
    mousePositionY: number;
}

interface Props {
    title: string;
    data: number[];
    width: number;
    height: number; 
    fontSize: number;
    padding: number;
    barPadding: number;
    label: string[];
    yScale: number;
}

const initState: State = {
    showTooltip: false,
    tooltipContent: '',
    mousePositionX: 0,
    mousePositionY: 0,
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

// ----------------------
// draw
// ----------------------
const Historgram: React.FC<Props> = ({title, data, width, height, fontSize, padding, barPadding, label, yScale}) => {

    const [state, dispatch] = React.useReducer(reducer, initState)
    const canvas = React.useRef<SVGSVGElement>(null)

    const maxValue = Math.max(...data)
    const barAreaLen = (width - 2 * padding) / data.length

    const Bars = data.map((value, index) => (
        <>
            <rect 
                key={index}
                x={index * barAreaLen + barPadding + padding}
                y={height - padding - (height - 2 * padding) / maxValue * value}
                width={barAreaLen - 2 * barPadding}
                height={(height - 2 * padding) / maxValue * value}
                fill='#4A90E2'
                onMouseMove={e => {
                    if (!canvas.current) return
                    const svgPosition = clientToSVGPosition(canvas.current)(e.clientX)(e.clientY)
                    return dispatch(onHover(svgPosition.x, svgPosition.y, `value: ${value}`))
                }}
                onMouseOver={() => dispatch(mouseHover(true))}
                onMouseOut={() => dispatch(mouseHover(false))}
            />

        </>
    ))

    return (
        <>
            <svg 
                ref={canvas}
                width={width}
                height={height}
            >
                <text
                    x="50%"
                    y={fontSize* 2}
                    fontSize={fontSize*1.5}
                    alignmentBaseline="central"
                    textAnchor="middle"
                >{title}</text>
                <Border 
                    padding={padding}
                    width={width}
                    height={height}
                 />           
                {Bars}
                <XAxis 
                    labels={label}
                    fontSize={fontSize}
                    padding={padding}
                    height={height}
                    barAreaWidth={barAreaLen}
                />
                <YAxis
                    padding={padding}
                    height={height}
                    yScale={yScale}
                    maxValue={maxValue}
                    fontSize={fontSize}
                />
                {state.showTooltip && <Tooltip 
                    x={state.mousePositionX + 15}
                    y={state.mousePositionY - 9}
                    fontSize={fontSize}
                >{state.tooltipContent}</Tooltip> }
            </svg>
        </>
    )
}

export default Historgram