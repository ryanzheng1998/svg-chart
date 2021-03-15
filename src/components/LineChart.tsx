import React from 'react'

export interface LineChartData {
    x: number;
    y: number;
}

interface Props {
    data: LineChartData[];
    width: number;
    height: number; 
    fontSize: number;
    padding?: number;

}

const LineChart: React.FC<Props> = (props) => {

    const maxValue = Math.max(...props.data.map(d => d.x))
    


    return (
        <>
        </>
    )
}

export default LineChart