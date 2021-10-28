import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={2}>
    <strong>Congregational Meeting:</strong> There will be a short
    congregational meeting on November 7th immediately following the
    worship service. The agenda will include voting to accept new
    members and some brief reports on church ministries. If you are a
    church member, please plan on attending.
  </p>,
  <p key={1}>
    <strong>Foundations Membership Class:</strong> Join us on November
    14 from 4:00-6:30 pm if you are interested in joining our church
    family or just want to learn more about Faith Covenant and our
    denomination. You will learn about our church’s mission, vision,
    and values and what it means to partner with us in the Lord’s work
    through membership. Click{" "}
    <a
      href="https://faithecc.breezechms.com/form/Foundations11.14.21"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>{" "}
    to let us know you are coming. If you need assistance with
    childcare contact{" "}
    <a href="mailto:outreach@faithecc.org">outreach@faithecc.org</a>.
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
