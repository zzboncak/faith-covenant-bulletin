import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={2}>
    <strong>412 Youth Game Night:</strong> Join us on Saturday, Oct.
    30, 6:30-9:00 pm for a night of games and fun. Meet us in the
    church lobby. All youth grades 7-12 are welcome. Invite your
    friends!
  </p>,
  <p key={3}>
    <strong>Community Night:</strong> Join us each Wednesday for
    activities and fellowship opportunities for all ages. Come at 5:30
    pm for <strong>Pizza</strong> (bring a dish to share).{" "}
    <strong>Childcare</strong> (nursery-PreK) is provided from
    5:45-7:45 pm. <strong>Kids Club</strong> (K-6th grade) and{" "}
    <strong>412 Youth</strong> (7th-12th grade) meet from 6:00-7:30
    pm. <strong>Abide</strong> meets from 6:00-7:00pm.{" "}
    <strong>Choir</strong> gathers to rehearse from 7:00-8:00pm.
  </p>,
  <p key={1}>
    <strong>Meal Ministry:</strong> Sign up to be part of the meal
    train, and we will email you when someone in our church family
    could be blessed by having meals provided for them. Click{" "}
    <a
      href="https://faithecc.breezechms.com/form/1b4bfd"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>{" "}
    to sign up. Contact Rita (
    <a href="mailto:careteam@faithecc.org">careteam@faithecc.org</a>)
    with questions or for more information.
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
