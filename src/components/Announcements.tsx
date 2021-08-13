import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Foundations Membership Class:</strong> We will be having
    our Foundations Membership class today from 4:00-6:30 pm. If you
    would like to attend or are interested in learning more about
    membership, please talk to Pastor Nate after the service.
  </p>,
  <p key={2}>
    <strong>Baptism Service, August 22:</strong> Next Sunday, we will
    be celebrating a baptism service at Blackwell Forest Preserve
    following our morning worship service. We&#39;ll meet at Blackwell
    for a short service of baptism and worship followed by a picnic
    together. Burgers and brats will be provided, but please bring
    your own drinks and side dishes as well as any picnic games
    you&#39;d like to play!
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
