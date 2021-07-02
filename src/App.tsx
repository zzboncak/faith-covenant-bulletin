import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";
import { july4Service } from "./july4Data";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>412 Youth Group Bonfire, July 8, 6:00-9:00 pm:</strong>{" "}
      All youth are invited to attend a bonfire at the Karlson&#39;s,
      28W725 Indian Knoll Rd, West Chicago. Questions? Contact Rick
      Wolff,{" "}
      <a href="mailto:wolffrick633@gmail.com">
        wolffrick633@gmail.com
      </a>
      .
    </p>,
    <p key={2}>
      <strong>Lake Day, Sunday, July 18:</strong> Have a fun afternoon
      with friends from Faith Covenant at Barb and Gene Frost&#39;s
      lake home, 1528 Holiday Dr, Sandwich, Illinois. Bring your own
      meat to grill and a dish to share. The grill will be hot at
      12:30 pm. Lawn games, beach, pontoon, and speed boat rides will
      be available. If you have any questions contact Gene Frost at{" "}
      <a href="tel:630-347-8213">630-347-8213</a>.
    </p>,
    <p key={3}>
      <strong>
        Faith Covenant&#39;s All-Church Retreat, August 6-8:
      </strong>
      We would love to have you join us. Children and adults alike
      have a wonderful time on this retreat! Registration deadline is
      next Sunday, July 11. Register{" "}
      <a
        href="https://faithecc.breezechms.com/form/RetreatAug21"
        target="_blank"
        rel="noreferrer"
      >
        HERE
      </a>
      !
    </p>
  ]);
  return (
    <>
      <main className="App">
        <header className="App-header">
          <h1>Worship Bulletin</h1>
          <p className="date">
            July 4, 2021: Sixth Sunday after Pentecost
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
        {july4Service.map((section, i) => (
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
