import React, { useState } from 'react';
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
      </header>
    </div>
  );
}

export default App;
