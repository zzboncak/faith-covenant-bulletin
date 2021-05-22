import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";
import { may23Service } from "./may23Data";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>Global 6K:</strong> Celebrate with us! Yesterday, 40
      Global 6k team members from Faith Covenant raised $2,600 to help
      bring clean water to those who need it the most.
    </p>,
    <p key={2}>
      <strong>Pentecost Worship Night, May 23 at 6:30 pm:</strong>Join
      us for worship through song, prayer, and a bonfire! We will meet
      at the Cockle residence. Park at the back entrance to Atten Park
      on Shaffner Road. Walk to the Cockle&#39;s home on the grass
      path. You will see signs. Bring a chair and beverage. We will
      have s’mores. Maps available at the Welcome Table.
    </p>,
    <p key={3}>
      <strong>Annual Meeting, June 13 at 12:15 pm:</strong> Our
      congregation&#39;s Annual Meeting will be held on Sunday June
      13th. Please plan an attending this important part in the life
      of Faith Covenant. More information to come!
    </p>
  ]);
  return (
    <>
      <main className="App">
        <header className="App-header">
          <h1>Worship Bulletin</h1>
          <p className="date">May 23, 2021</p>
          {!isRegisterVisible && (
            <button
              className="register-button"
              onClick={() => setIsRegisterVisible(!isRegisterVisible)}
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
        <div className="helper-text-container">
          <p className="helper-text">
            <i>Click on an element of the service to expand it.</i>
          </p>
        </div>
        {may23Service.map((section, i) => (
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
