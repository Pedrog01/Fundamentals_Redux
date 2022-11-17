import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Interval from './components/Interval';

function App() {
  return (
    <div className="App">
      <h1>Exercicios React-Redux</h1>
      <div className="linha">
     <Interval></Interval>
     </div>
     <div className="linha">
     <Card title="Card 2" green>X</Card>
     <Card title="Card 3" blue >Y</Card>
     <Card title="Card 4" purple>Y</Card>
     </div>
    </div>
  );
}

export default App;
