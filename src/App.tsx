import React from "react";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <nav className="nav-bar">
        <header className="App-header">
          <p>React Project</p>
          <a
            className="App-link"
            href="https://www.starwars.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go read some Star Wars
          </a>
        </header>
      </nav>
    </div>
  );
}

export default App;
