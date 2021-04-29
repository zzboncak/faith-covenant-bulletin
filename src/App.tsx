import React from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import { may2Service } from "./may2Data";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";

export const App: React.FC = () => {
  const logoDimension = "70px;";
  return (
    <>
      <div className="App">
        <nav className="nav-bar">
          <header className="App-header">
            <h1>Worship Bulletin</h1>
            <p className="date">May 2, 2021</p>
            <a
              href="https://faithecc.breezechms.com/form/Worship_Check_In"
              target="_blank"
              rel="noreferrer"
              className="register-link"
            >
              Click Here to Register
            </a>
          </header>
        </nav>
        <div className="helper-text-container">
          <p className="helper-text">
            <i>Click on an element of the service to expand it.</i>
          </p>
        </div>
        {may2Service.map((section, i) => (
          <Section
            key={i}
            title={section.title}
            subsections={section.subsections}
          />
        ))}
        <div className="push"></div>
      </div>
      <footer>
        <img
          src={logo}
          alt="Faith Covenant Church Logo"
          height={logoDimension}
          width={logoDimension}
        />
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
