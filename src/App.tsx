import React, { useState } from "react";
import { Section } from "./components/section/Section";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";
import { generateAnnouncements } from "./helperFunctions";
import { Subsection } from "./components/subsection/Subsection";
import { june27Service } from "./june27Data";

export const App: React.FC = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(
    false
  );
  const logoDimension = "70px;";
  const announcements = generateAnnouncements([
    <p key={1}>
      <strong>Men&#39;s Gathering, June 30, 6:45 pm:</strong> Enjoy
      gathering under the trees in Rick Wolff&#39;s back yard for a
      lighthearted yet authentic time of connection. 1755 Shaffner Rd,
      Wheaton, IL 60189. RSVP to{" "}
      <a href="mailto:wolffrick633@gmail.com">
        wolffrick633@gmail.com
      </a>
      .
    </p>,
    <p key={2}>
      <strong>Church Picnic & Communion, July 4, 12:00 pm:</strong> We
      will retrieve our picnic baskets after the service. Then have
      communion on the lawn followed by a picnic lunch. Please bring
      both a lunch and your own communion elements. Meet new friends
      and spend time with old friends.
    </p>,
    <p key={3}>
      <strong>
        Vacation Bible School, July 5-8, 9:00 am-11:00 am:
      </strong>{" "}
      Our &quot;Flight School&quot; curriculum will take kids on a
      high-flying adventure that challenges them to aim higher than
      just &quot;good enough&quot; in their lives with Christ. VBS is
      specially designed for children entering kindergarten through
      fourth grade. We have 50 openings that are filling up fast.
      Register today{" "}
      <a
        href="https://faithecc.breezechms.com/form/VBSJULY2021"
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
            June 27, 2021: Fifth Sunday after Pentecost
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
        {june27Service.map((section, i) => (
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
