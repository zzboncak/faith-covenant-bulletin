import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";
import { june20Service } from "./june20Data";
export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>All Church Retreat, August 6-8:</strong> Refresh your
      spirit by being out in nature, worshiping the Lord, learning
      from God&#39;s Word, spending time with others, and having lots
      of fun! This is a weekend you don&#39;t want to miss! Covenant
      Harbor Retreat Center has hotel style accommodations, each room
      has its own bathroom, and the food is excellent. The camp has a
      beach right on Lake Geneva. Children and adults alike have a
      wonderful time on this retreat. The deadline to register is fast
      approaching. Register{" "}
      <a
        href="https://www.faithecc.org/all-church-retreat/"
        target="_blank"
        rel="noreferrer"
      >
        HERE
      </a>{" "}
      today!
    </p>,
    <p key={2}>
      <strong>Ladies Night Out, June 22, 7:00 pm:</strong> Women of
      all ages are invited to enjoy a casual time of fellowship at Ann
      Wolff&#39;s home, 1755 Shaffner Road, Wheaton. There is no need
      to RSVP, simply show up. Questions or in need of childcare?
      Contact Rita Christensen{" "}
      <a href="mailto:careteam@faithecc.org">careteam@faithecc.org</a>
      .
    </p>
  ]);
  return (
    <>
      <main className="App">
        <header className="App-header">
          <h1>Worship Bulletin</h1>
          <p className="date">
            June 20, 2021: Fourth Sunday after Pentecost
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
        {june20Service.map((section, i) => (
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
