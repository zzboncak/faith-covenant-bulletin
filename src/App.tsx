import React, { useState } from "react";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { Announcements } from "./components/Announcements";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  return (
    <>
      <main className="App">
        <header className="App-header">
          <h1>Worship Bulletin</h1>
          <p className="date">
            November 14, 2021: Twenty-Fifth Sunday after Pentecost
          </p>
          <sub>
            <i>Worship Host: Pastor Nate Hickox</i>
          </sub>
          {!isRegisterVisible && (
            <button
              className="register-button"
              onClick={() => setIsRegisterVisible(!isRegisterVisible)}
            >
              Tap Here for the Connect Card
            </button>
          )}
          <div
            className={`breeze_form_embed ${
              isRegisterVisible ? "" : "hidden"
            }`}
            data-subdomain="faithecc"
            data-address="Worship_Check_In83"
            data-width="100%"
            data-border_width="0"
            data-border_color="000000"
            data-background_color="ffffff"
            data-button_color="92b765"
          ></div>
          {isRegisterVisible && (
            <button onClick={() => setIsRegisterVisible(false)}>
              Tap to Collapse
            </button>
          )}
        </header>
        {/* <div className="helper-text-container">
          <p className="helper-text">
            <i>Tap on a section of the service to expand it.</i>
          </p>
        </div>
        {october31service.map((section, i) => (
          <Section
            key={i}
            title={section.title}
            subsections={section.subsections}
          />
        ))} */}
        <a
          href="https://faithecc.breezechms.com/give/online"
          target="_blank"
          rel="noreferrer"
          className="giving-link"
        >
          Tap Here to Give
        </a>
        <Announcements />
        <div className="push"></div>
      </main>
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
