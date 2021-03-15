import React from 'react';
import LineChart from './components/LineChart';
import rawData from './assets/values.json'
import Historgram from './components/Historgram';

function App() {

  return (
    <Historgram 
      title="My first historgram"
      width={1000}
      height={500}
      data={rawData.value}
      label={rawData.label}
      fontSize={15}
      padding={70}
      barPadding={20}
      yScale={10}
    />
  );
}

export default App;
