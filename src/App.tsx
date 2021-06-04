import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";
import { june6Service } from "./june6Data";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>
        Annual Congregational Meeting, Sunday, June 13, 12:00 noon:
      </strong>{" "}
      If you are a member of Faith Covenant Church, please plan on
      attending the annual meeting. We will meet wherever the Worship
      Service is held. Please order a box lunch and reserve childcare
      on the website (or simply tap{" "}
      <a
        href="https://faithecc.breezechms.com/form/meetingboxlunchchildcare"
        target="_blank"
        rel="noreferrer"
      >
        HERE
      </a>
      ) by June 10.
    </p>,
    <p key={2}>
      <strong>Children&#39;s Ministry Opportunities:</strong>
      Would you come alongside us in the joyful privilege of nurturing
      our children&#39;s love for God? Please contact Wendy Smith (
      <a href="mailto:children@faithecc.org">children@faithecc.org</a>
      ) if you are interested in serving in this way.
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
            June 6, 2021: Second Sunday after Pentecost
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
        {june6Service.map((section, i) => (
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
