import logo from './logo.svg';
import { HashRouter } from "react-router-dom";
import Router from './module/router/router'
import './App.css';

function App() {
  return (
    <div className="App">
        <HashRouter>
          <div className='App'>
            <Router />
          </div>
        </HashRouter>
    </div>
  );
}

export default App;
