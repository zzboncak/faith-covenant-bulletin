import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Phase 4:</strong> Some exciting news! Phase 4 of our
    building project is set to begin on August 2. This should be
    approximately a two-week project and will be the update to the
    sanctuary. In preparation for this work, the sanctuary will need
    to be completely cleared out by August 1. If you can help move
    chairs to Peterson Hall after the service today, it would be
    greatly appreciated.
  </p>,
  <p key={2}>
    <strong>
      Worship Service and Picnic Lunch, Lake Geneva, August 8:
    </strong>{" "}
    Due to the retreat, there will be no Worship Service at Faith
    Covenant Church on Sunday, August 8. Please join us for worship at
    Covenant Harbor. We will meet at 10:30 am on the ground floor of
    the Geneva Bay Center. Plan on staying for fellowship following
    the service. You can pack your own picnic or purchase a box lunch
    for $6.50. To purchase a lunch,{" "}
    <a
      href="https://www.faithecc.org/events/worship-service-and-picnic-lunch-lake-geneva-2/"
      target="_blank"
      rel="noreferrer noopener"
    >
      CLICK HERE
    </a>
    . (Lunch must be purchased in advance.)
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
