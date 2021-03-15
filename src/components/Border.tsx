import React from 'react'

interface Props {
    padding: number;
    width: number;
    height: number;
}

const Border: React.FC<Props> = ({padding, width, height}) => (
    <>
        <polyline 
            fill="none"
            stroke="black"
            strokeWidth="0.5"
            points={`${padding}, ${padding} 
                     ${padding}, ${height - padding}
                     ${width-padding}, ${height - padding}
                   `}
        />
    </>
)

export default Border