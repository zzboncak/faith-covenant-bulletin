import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import { may16Service } from "./may16Data";
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
      <strong>Such a simple way to make a big impact:</strong> Walk or
      run for water! Meet at church on May 22 at 9:00 am, or go out on
      your own. Learn more at the World Vision table right after the
      service.
    </p>,
    <p key={2}>
      <strong>Pentecost Worship Night, May 23 at 6:30 pm:</strong>{" "}
      Join us for worship through song, prayer, and a bonfire! We will
      meet at the Cockle residence. Park at the back entrance to Atten
      Park on Shaffner Road. Walk to the Cockle&#39;s home on the
      grass path. You will see signs. Bring a chair and beverage. We
      have smores. Maps available at the Welcome Table.
    </p>,
    <p key={3}>
      <strong>Annual Meeting, June 13 at 12:15 pm:</strong> Our
      congregation&#39;s Annual Meeting will be held on Sunday June
      13th. Please plan on attending this important part in the life
      Faith Covenant. More information to come!
    </p>
  ]);
  return (
    <>
      <div className="App">
        <nav className="nav-bar">
          <header className="App-header">
            <h1>Worship Bulletin</h1>
            <p className="date">May 16, 2021: Ascension Sunday</p>
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
        {may16Service.map((section, i) => (
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
