import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Congregational Meeting:</strong> There will be a special
    congregational meeting today, immediately following the worship
    service. This meeting will have one agenda item: to hear a report
    on the Vision 2020 fundraising and then vote on a proposal to
    complete all remaining phases of the church building project.
  </p>,
  <p key={2}>
    <strong>Fall Kickoff:</strong> School is starting up, and so are
    the ministries of Faith Covenant Church! Sunday, September 12, we
    will rally together for a picnic and games following the service.
    Please bring a side dish or dessert to share and a chair or
    blanket to sit on (meat and beverages will be provided). We need
    volunteers to grill, set up and clean up and run games. Please
    contact{" "}
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
