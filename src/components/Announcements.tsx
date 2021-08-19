import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Baptism Service, Today!</strong> We will be celebrating a
    baptism service at Blackwell Forest Preserve following our morning
    worship service. We&#39;ll meet at Blackwell for a short service
    of baptism and worship followed by a picnic together. Directions
    can be found at our Welcome Table
  </p>,
  <p key={2}>
    <strong>Congregational Meeting:</strong> There will be a special
    congregational meeting on Sunday, August 29, immediately following
    the worship service. This meeting will have one agenda item: to
    hear a report on the Vision 2020 fundraising and then vote on a
    proposal to complete all remaining phases of the church building
    project.
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
