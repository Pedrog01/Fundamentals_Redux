import React, {useState} from 'react';
import './App.css';

import Interval from './components/Interval';
import Media from './components/Media';
import Sorteio from './components/Sorteio';
import Soma from './components/Soma';



function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)

  return (
    <div className="App">
      <h1>Exercicios React-Redux</h1>
      <div className="linha">
     <Interval min={min} max={max} 
     onMinChanged={setMin} onMaxChanged={setMax}></Interval>
     </div>
     <div className="linha">
     <Media min={min} max={max}></Media>
     <Soma min={min} max={max}></Soma>
     <Sorteio min={min} max={max}></Sorteio>
     </div>
    </div>
  );
}

export default App;
