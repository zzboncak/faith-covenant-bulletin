import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Sunday School Kickoff:</strong> Join us on September 12 at
    9:15am! We have great classes planned for all ages, from toddlers
    through adults.
  </p>,
  <p key={2}>
    <strong>Fall Kickoff BBQ Picnic:</strong> September 12, we will
    rally together for a picnic following the service. Together we
    will celebrate the beginning of a new ministry season dedicated to
    focused outreach and renewed community. Please bring a side dish
    or dessert to share and a chair or blanket to sit on (meat and
    beverages will be provided). There will be a water activity for
    the kids, so they should plan on getting wet. We need volunteers
    to grill, set up and clean up and supervise the water activities.
    Please contact{" "}
    <a href="mailto:outreach@faithecc.org">outreach@faithecc.org</a>.
  </p>,
  <p key={3}>
    <strong>Choir is starting!</strong> Please join us as we prepare
    to lead our church family in worship this fall! To kick this off,
    we will have a time of dessert and singing on Wednesday, September
    8, at 7 pm on the patio at church. At that time, we will discuss
    how to make choir work for worship in this (sort of) post-pandemic
    world. All voice parts are welcome. Please contact Jean Austin,
    choir director, at{" "}
    <a href="mailto:jaustin22@sbcglobal.net">
      jaustin22@sbcglobal.net
    </a>{" "}
    if you have any questions.
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
