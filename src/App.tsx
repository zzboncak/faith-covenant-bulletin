import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import { may2Service } from "./may2Data";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  return (
    <>
      <div className="App">
        <nav className="nav-bar">
          <header className="App-header">
            <h1>Worship Bulletin</h1>
            <p className="date">May 2, 2021</p>
            {!isRegisterVisible && (
              <button
                className="register-button"
                onClick={() =>
                  setIsRegisterVisible(!isRegisterVisible)
                }
              >
                Click Here to Register
              </button>
            )}
            <div
              className={`breeze_form_embed ${
                isRegisterVisible ? "" : "hidden"
              }`}
              data-subdomain="faithecc"
              data-address="Worship_Check_In"
              data-width="100%"
              data-border_width="0"
              data-border_color="000000"
              data-background_color="ffffff"
              data-button_color="92b765"
              onChange={() => console.log("this fired")}
            ></div>
            {isRegisterVisible && (
              <button onClick={() => setIsRegisterVisible(false)}>
                Close registration
              </button>
            )}
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
