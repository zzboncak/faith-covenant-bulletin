import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>
      Volunteers needed for Trunk or Treat (Saturday, Oct. 23,
      3:00-5:00 pm):
    </strong>{" "}
    Pumpkins, autumn leaves, and chilly air...fall is here! It is an
    especially fun season for children. If we have enough volunteers,
    we are hoping to host our third annual Trunk or Treat. Are you
    available to serve? Our goal is to have at least 20 Trunks. We
    also need candy donations, welcome hosts, and hay wagon hosts.
    Click{" "}
    <a
      href="https://faithecc.breezechms.com/form/TRUNKorTREAT21"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>{" "}
    to view the serving opportunities. Please sign up by October 3.
  </p>,
  <p key={2}>
    <strong>Welcome to Faith Breakfast (October 3, 9:15 am):</strong>{" "}
    If you are new to Faith Covenant Church, we hope you will join us
    for breakfast in the Lounge. You will have the opportunity to meet
    other new people, hear how Pastor Nate came to the Lord, and learn
    more about our church&#39;s ministries. There is no need for you
    to bring anything. Children ages 2 years old and up can attend
    Sunday School. Please let us know if you need nursery care by
    emailing{" "}
    <a href="mailto:outreach@faithecc.org">outreach@faithecc.org</a>.
    Click{" "}
    <a
      href="https://faithecc.breezechms.com/form/WelcomeBreakfast"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>{" "}
    to register.
  </p>,
  <p key={3}>
    <strong>Community Night:</strong> Join us each Wednesday for
    activities and fellowship opportunities for all ages. Come at 5:30
    pm for an optional (outside) bring-your-own dinner. Childcare
    (nursery-PreK) is provided from 5:45-7:45 pm. Kids Club (K-6th
    grade) meets from 6-7:30 pm to play games, hang out together, and
    learn about the Armor of God. Youth Group (7th-12th grade) also
    meets from 6-7:30 pm to hang out, study God’s Word together, and
    play games. Abide (adults) meets from 6-7pm for a time of worship
    and prayer. Choir rehearses from 7-8 pm.
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
