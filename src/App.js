import React from 'react';
import logo from './logo.png';  // please replace this logo with the svg one
import './App.css';

function App() {
  return (
      <div className="App homepage">
          <button className="homepage-sign-in-btn">Helper Log In</button>
          <img src={logo} alt="logo" />
          <div className="homepage-buttons">
              <button>Questions</button>
              <button>Help Articles</button>
              <button>Search All</button>
          </div>
      </div>
  );
}

export default App;
