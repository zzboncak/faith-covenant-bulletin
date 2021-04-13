import React from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import { section1, section2, section3, section4 } from "./testData";

export const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="nav-bar">
        <header className="App-header">
          <p>Weekend Bulletin</p>
          <a
            className="App-link"
            href="https://www.faithecc.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Church Website
          </a>
        </header>
      </nav>
      <div className="helper-text-container">
        <p className="helper-text">
          <i>Click on an element of the service to expand it.</i>
        </p>
      </div>
      {[section1, section2, section3, section4].map((section, i) => (
        <Section
          key={i}
          title={section.title}
          subsections={section.subsections}
        />
      ))}
    </div>
  );
};
