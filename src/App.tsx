import React from "react";
import { Section } from "./components/Section";
import "./App.css";

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
      <Section title="First Section" />
      <Section title="Second Section" />
    </div>
  );
};
