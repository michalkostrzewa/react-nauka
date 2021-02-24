import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Menu/>
        <Hotels/>
      </div>
    </div>
  );
}

export default App;
