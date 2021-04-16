import React from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import { april18Service } from "./april18Data";

export const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <nav className="nav-bar">
          <header className="App-header">
            <h1>Worship Bulletin</h1>
            <p className="date">April 18, 2021</p>
          </header>
        </nav>
        <div className="helper-text-container">
          <p className="helper-text">
            <i>Click on an element of the service to expand it.</i>
          </p>
        </div>
        {april18Service.map((section, i) => (
          <Section
            key={i}
            title={section.title}
            subsections={section.subsections}
          />
        ))}
        <div className="push"></div>
      </div>
      <footer>
        <a
          className="App-link"
          href="https://www.faithecc.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.faithecc.org
        </a>
      </footer>
    </>
  );
};
