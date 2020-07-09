import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.js'


function App() {
  const [route, hashChange] = useState(window.location.hash.substr(1));

  return (
    <div className="App">
      <div className='container'>

      </div>

      <header className="App-header">
      	<Main/>

      	<p className="App-link">route</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
