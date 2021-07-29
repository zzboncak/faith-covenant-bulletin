import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Thank You:</strong> A big thank you to everyone who helped
    with VBS. Thank you for cookies, prayers, and to all our
    volunteers! We soared high with amazing kids! Please pray for them
    as they remember what they learned and continue their faith
    journeys.
  </p>,
  <p key={2}>
    <strong>Lake Day, Sunday, July 18:</strong> Have a fun afternoon
    with friends from Faith Covenant at Barb and Gene Frost&#39;s lake
    home, 1528 Holiday Dr, Sandwich, Illinois. Bring your own meat to
    grill and a dish to share. The grill will be hot at 12:30 pm. Lawn
    games, beach, pontoon, and speed boat rides will be available. If
    you have any questions contact Gene Frost at{" "}
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

export const Announcements: React.FC = () => {
  return (
    <Subsection
      title={announcements.title}
      subjects={announcements.subjects}
    />
  );
};
