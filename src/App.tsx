import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";
import { june13Service } from "./june13Data";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>
        Annual Congregational Meeting, today, 12:00 noon:
      </strong>{" "}
      If you are a member of Faith Covenant Church, please plan on
      attending the annual meeting. We will hold the meeting indoors.
    </p>,
    <p key={2}>
      <strong>All-Church Retreat:</strong> Registration is open for
      Faith Covenant&#39;s All-Church Retreat! Details and info are on
      the website{" "}
      <a
        href="https://www.faithecc.org/all-church-retreat/"
        target="_blank"
        rel="noreferrer"
      >
        HERE
      </a>
      . Please email for assistance at{" "}
      <a href="mailto:office@faithecc.org">office@faithecc.org</a>.
    </p>,
    <p key={3}>
      <strong>
        Pastor Nate&#39;s Ordination Service, June 26th at 7:00 pm:
      </strong>{" "}
      We will gather in the sanctuary to honor and celebrate Pastor
      Nate&#39;s ordination to the Evangelical Covenant Church.
    </p>
  ]);
  return (
    <>
      <main className="App">
        <header className="App-header">
          <h1>Worship Bulletin</h1>
          <p className="date">
            June 13, 2021: Third Sunday after Pentecost
          </p>
          {!isRegisterVisible && (
            <button
              className="register-button"
              onClick={() => setIsRegisterVisible(!isRegisterVisible)}
            >
              Tap Here to Check In
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
              Close registration
            </button>
          )}
        </header>
        <div className="helper-text-container">
          <p className="helper-text">
            <i>Click on an element of the service to expand it.</i>
          </p>
        </div>
        {june13Service.map((section, i) => (
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
