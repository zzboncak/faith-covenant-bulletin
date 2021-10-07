import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Welcome to Faith Lunch,</strong> today after church. If
    you are new to Faith Covenant Church, we hope you will join us for
    a pizza lunch outside under the large shade tree. You will have
    the opportunity to meet other new people, hear more about Pastor
    Nate&apos;s story, and learn more about the church&apos;s
    ministry. Children of all ages will go to the Nursery & Toddler
    room. They will be given lunch. The younger children will play and
    the older children will have a video.
  </p>,
  <p key={2}>
    <strong>
      Trunk or Treat (Saturday, Oct. 23, 3:00-5:00 pm, rain or shine):
    </strong>{" "}
    Pumpkins, autumn leaves, and chilly air...fall is here! It is an
    especially fun season for children. Faith Covenant will be hosting
    its third annual Trunk or Treat. The event is FREE. Invite your
    friends! Click{" "}
    <a
      href="https://faithecc.breezechms.com/form/AttendTrunkorTreat"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>{" "}
    to let us know you are coming. Interested in helping or donating
    candy? Click{" "}
    <a
      href="https://faithecc.breezechms.com/form/TRUNKorTREAT21"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>{" "}
    to let us know you&apos;d like to serve!
  </p>,
  <p key={3}>
    <strong>Community Night:</strong> Join us each Wednesday for
    activities and fellowship opportunities for all ages. Come at 5:30
    pm for an optional (outside) bring-your-own dinner.{" "}
    <strong>Childcare</strong> (nursery-PreK) is provided from
    5:45-7:45 pm. <strong>Kids Club</strong> (K-6th grade) meets from
    6-7:30 pm to play games, hang out together, and learn about the
    Armor of God. <strong>Youth Group</strong> (7th-12th grade) also
    meets from 6-7:30 pm to hang out, study God’s Word together, and
    play games. <strong>Abide</strong> (adults) meets from 6-7pm for a
    time of worship and prayer. <strong>Choir</strong> rehearses from
    7-8 pm.
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
