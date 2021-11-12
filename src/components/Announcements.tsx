import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={2}>
    <strong>Christ the King Worship Night:</strong> Join us at 6:00 pm
    on Sunday November 21 for a night of worship focused on our
    heavenly King. If you need childcare, please let us know no later
    than Wednesday November 17 by clicking{" "}
    <a
      href="https://faithecc.breezechms.com/form/d32c63"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>
    .
  </p>,
  <p key={1}>
    <strong>Thanksgiving Hike & Hymn Sing:</strong> Join us on
    Thanksgiving morning for one of the longest standing traditions at
    Faith Covenant! We&apos;ll meet at 9:00 am at the church and go on
    a hike around Herrick Lake (sun, rain, or snow). We&apos;ll come
    back to the church for coffee and hot chocolate and head to the
    sanctuary for a service of thanksgiving and hymn singing.
  </p>,
  <p key={3}>
    <strong>Community Night:</strong> Join us each Wednesday for
    activities and fellowship opportunities for all ages. Come at 5:15
    pm for <strong>Pizza</strong>. <strong>Childcare</strong>{" "}
    (nursery-PreK) is provided from 5:45-7:45 pm.{" "}
    <strong>Kids Club</strong> (K-6th grade) and{" "}
    <strong>412 Youth</strong> (7th-12th grade) meet from 6:00-7:30
    pm. <strong>Abide</strong> (adults) meets from 6:00-7:00pm.{" "}
    <strong>Choir</strong> gathers to rehearse from 7:00-8:00pm.
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
