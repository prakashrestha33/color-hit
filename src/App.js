import React from 'react';
import rainbow from './rain.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rainbow} className="App-logo" alt="logo" />
        <p>
          Choose the correct color.
        </p>
        <div className="row">
          <button type="button" className="btn  btn-circle btn-xl red" >
          </button>
          <button type="button" className="btn  btn-circle btn-xl green">
          </button>
          <button type="button" className="btn  btn-circle btn-xl blue">
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn  btn-circle btn-xl orange">
          </button>
          <button type="button" className="btn  btn-circle btn-xl yellow">
          </button>
          <button type="button" className="btn  btn-circle btn-xl voilet">
          </button>
        </div>

        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start
        </a>
      </header>
    </div>
  );
}

export default App;
