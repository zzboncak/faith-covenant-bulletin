import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";
import { may30Service } from "./may30Data";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>Pentecost Worship Night, May 30 at 6:30 pm</strong>Join
      us for worship through song, prayer, and a bonfire! We will meet
      at the Cockle residence. Park at the back entrance to Atten Park
      on Shaffner Road. Walk to the Cockle&#39;s home on the grass
      path. You will see signs. Bring a chair and beverage. We will
      have smores. Maps available at the Welcome Table.
    </p>,
    <p key={2}>
      <strong>
        Vacation Bible School, July 5-8, 9:00 am-11:00 am:
      </strong>
      This summer the kids will be starting their engines and getting
      ready to take-off at VBS! The Flight School Curriculum will take
      kids on a high-flying adventure that challenges them to aim
      higher than just “good enough” in their lives with Christ. VBS
      is especially designed for children entering kindergarten
      through fourth grade. Register{" "}
      <a
        href="https://faithecc.breezechms.com/form/VBSJULY2021"
        target="_blank"
        rel="noreferrer"
      >
        here!
      </a>
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
          <p className="date">May 30, 2021</p>
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
        {may30Service.map((section, i) => (
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
