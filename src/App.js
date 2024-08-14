import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Porto"/>
        <footer>
          <a
            href="https://github.com/cpmssz"
            target="_blank"
            rel="noopener noreferrer"
            >
            Open-source code by{" "}
          </a>{" "}
            CS,
          code hosted on{" "}
          <a
            href="https://github.com/cpmssz/react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
            and website{" "} 
          <a
            href="https://meteorology-weather-react-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
           on Netlify
          </a>
        </footer>  
      </div>
    </div>
  );
}

export default App;
