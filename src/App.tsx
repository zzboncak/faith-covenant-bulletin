import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import { may9Service } from "./may9Data";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>Digital Bulletin:</strong> If you&#39;re reading this,
      congratulations! You&#39;re already using the digital bulletin.
      High five ✋.
    </p>,
    <p key={2}>
      <strong>Church Holidays:</strong> Come celebrate our church
      holidays!{" "}
      <strong>
        Ascension Day is Thursday, May 13, 6:30 pm, and Pentecost is
        May 23, 6:30 pm.
      </strong>{" "}
      These evenings will be times of song, prayer, and celebration as
      we worship together. Join us!
    </p>
  ]);
  return (
    <>
      <div className="App">
        <nav className="nav-bar">
          <header className="App-header">
            <h1>Worship Bulletin</h1>
            <p className="date">
              May 9, 2021: Sixth Sunday of Easter
            </p>
            {!isRegisterVisible && (
              <button
                className="register-button"
                onClick={() =>
                  setIsRegisterVisible(!isRegisterVisible)
                }
              >
                Click Here to Check In
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
        {may9Service.map((section, i) => (
          <Section
            key={i}
            title={section.title}
            subsections={section.subsections}
          />
        ))}
        <Subsection
          title={announcements.title}
          subjects={announcements.subjects}
        />
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
