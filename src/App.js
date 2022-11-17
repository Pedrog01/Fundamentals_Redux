import logo from './logo.svg';
import './App.css';

import Media from './components/Media';
import Sorteio from './components/Sorteio';
import Soma from './components/Soma';

import Interval from './components/Interval';

function App() {
  return (
    <div className="App">
      <h1>Exercicios React-Redux</h1>
      <div className="linha">
     <Interval></Interval>
     </div>
     <div className="linha">
     <Media></Media>
     <Soma></Soma>
     <Sorteio></Sorteio>
     </div>
    </div>
  );
}

export default App;
