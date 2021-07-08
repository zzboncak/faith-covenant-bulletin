import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";
import { july11Service } from "./july11Data";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>Thank You:</strong> A big thank you to everyone who
      helped with VBS. Thank you for cookies, prayers, and to all our
      volunteers! We soared high with amazing kids! Please pray for
      them as they remember what they learned and continue their faith
      journeys.
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
        Worship Service and Picnic Lunch, Lake Geneva, August 8:
      </strong>{" "}
      Please join us for worship at Covenant Harbor. We will meet at
      10:30 am on the ground floor of the Geneva Bay Center. Plan on
      staying for fellowship following the service. You can pack your
      own picnic or purchase a box lunch. Lunch must be purchased in
      advance. More info on our website{" "}
      <a
        href="https://www.faithecc.org/all-church-retreat/"
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
            July 11, 2021: Seventh Sunday after Pentecost
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
        {july11Service.map((section, i) => (
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
