import React from 'react'
import styled from 'styled-components'


const StyledP = styled.p<{fontSize: number}>`
    padding: 10px;
    vertical-align: middle;
    display: inline-block;
    background-color: white;
    text-align: center;
    border: 1px solid black;
`


interface Props {
    x: number;
    y: number;
    fontSize: number;
    children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({x, y, fontSize, children}) => (
    <>
        <foreignObject x={x} y={y} width={1000} height={1000}>
            <StyledP fontSize={fontSize}>{children}</StyledP>
        </foreignObject>
    </>
)
// const Tooltip: React.FC<Props> = ({x, y, fontSize, children}) => (
//     <>
//         <rect 
//             x={x - 2}
//             y={y - 2}
//             width={30}
//             height={fontSize + 4}
//             fill="white"
//         />
//         <text
//             x={x}
//             y={y}
//             fontSize={`${fontSize}px`}
//             textAnchor="start"
//             alignmentBaseline="hanging"
//         >
//             {children}
//         </text>
//     </>
// )

export default Tooltip