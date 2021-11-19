import React from "react";
import "./App.css";
import logo from "./images/Faith-Logo-Sqaure-2.jpg";

export const App: React.FC = () => {
  const logoDimension = "70px;";
  return (
    <>
      <main className="App">
        <header className="App-header">
          <h1>Sign Ups & Links</h1>
          <p className="date">
            November 21, 2021: Twenty-Sixth Sunday after Pentecost
          </p>
        </header>
        <a
          href="https://faithecc.breezechms.com/form/Worship_Check_In83"
          target="_blank"
          rel="noreferrer"
          className="action-link"
        >
          Tap Here to Check In
        </a>
        <br />
        <a
          href="https://faithecc.breezechms.com/give/online"
          target="_blank"
          rel="noreferrer"
          className="action-link"
        >
          Tap Here to Give
        </a>
        <br />
        <a
          href="https://faithecc.breezechms.com/form/3a08f4"
          target="_blank"
          rel="noreferrer"
          className="action-link"
        >
          Tap Here to sign up for Life at Faith
        </a>
        <h2>Announcements</h2>
        <section className="announcements-section">
          <p className="announcement">
            <strong>Christ the King Worship Night:</strong> Join us at
            6:00 pm on Sunday November 21 for a night of worship
            focused on our heavenly King. If you need childcare,
            please let us know no later than Wednesday November 17 by
            clicking{" "}
            <a
              href="https://faithecc.breezechms.com/form/d32c63"
              target="_blank"
              rel="noreferrer"
            >
              HERE
            </a>
            .
          </p>
          <p className="announcement">
            <strong>Thanksgiving Hike & Hymn Sing:</strong> Join us on
            Thanksgiving morning for one of the longest standing
            traditions at Faith Covenant! We&apos;ll meet at 9:00 am
            at the church and go on a hike around Herrick Lake (sun,
            rain, or snow). We&apos;ll come back to the church for
            coffee and hot chocolate and head to the sanctuary for a
            service of thanksgiving and hymn singing.
          </p>
          <p className="announcement">
            <strong>Community Night:</strong> Join us each Wednesday
            for activities and fellowship opportunities for all ages.
            Come at 5:15 pm for <strong>Pizza</strong>.{" "}
            <strong>Childcare</strong> (nursery-PreK) is provided from
            5:45-7:45 pm. <strong>Kids Club</strong> (K-6th grade) and{" "}
            <strong>412 Youth</strong> (7th-12th grade) meet from
            6:00-7:30 pm. <strong>Abide</strong> (adults) meets from
            6:00-7:00pm. <strong>Choir</strong> gathers to rehearse
            from 7:00-8:00pm.
          </p>
        </section>
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
