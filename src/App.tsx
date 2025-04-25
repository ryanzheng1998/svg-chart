import rawData from './assets/values.json'
import rawData2 from './assets/values2.json'
import rawData3 from './assets/values3.json'
import Historgram from './components/Historgram'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart'

function App() {
  return (
    <>
      {/* <Historgram2
        title="My Second Historgram"
        titleFontSize={20}
        canvasSize={{x: 1000, y: 500}}
        data={rawData.value}
        label={rawData.label}
        labelFontSize={15}
        yScale={10}
      /> */}
      <PieChart
        title="My First Pie Chart"
        data={rawData.value}
        lable={rawData.label}
        radius={150}
        width={1000}
        height={500}
        fontSize={15}
      />
      <LineChart
        title="My First Line Chart"
        xLables={rawData3.xLable}
        line1={rawData3[2015]}
        line2={rawData3[2016]}
        width={1000}
        height={500}
        fontSize={15}
        padding={70}
        yScale={10}
      />
      <ScatterChart
        title="My First Scatter Chart"
        data={rawData2.value}
        width={1000}
        height={500}
        fontSize={15}
        padding={70}
        yScale={5}
        xScale={10}
      />
      <Historgram
        title="My First Historgram"
        width={1000}
        height={500}
        data={rawData.value}
        label={rawData.label}
        fontSize={15}
        padding={70}
        barPadding={20}
        yScale={10}
      />
    </>
  )
}

export default App
