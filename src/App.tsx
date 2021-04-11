import React from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import { section1 } from "./testData";

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
      {[section1].map((section, i) => (
        <Section
          key={i}
          title={section.title}
          subsections={section.subsections}
        />
      ))}
      {/* <Section title="First Section" />
      <Section title="Second Section" />
      <Section title="Third Section" /> */}
    </div>
  );
};
