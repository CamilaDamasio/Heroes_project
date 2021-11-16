import './App.css';
import HeroesList from './components/HeroesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heroes</h1>
      </header>
      <div>
        <HeroesList />
      </div>
    </div>
  );
}

export default App;
