import React from 'react';
import LineChart from './components/LineChart';
import rawData from './assets/values.json'
import rawData2 from './assets/values2.json'
import Historgram from './components/Historgram';
import ScatterChart from './components/ScatterChart';

function App() {

  return (
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
    // <Historgram 
    //   title="My First Historgram"
    //   width={1000}
    //   height={500}
    //   data={rawData.value}
    //   label={rawData.label}
    //   fontSize={15}
    //   padding={70}
    //   barPadding={20}
    //   yScale={10}
    // />
  );
}

export default App;
