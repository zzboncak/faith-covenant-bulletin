import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Community Night:</strong> Join us each Wednesday for
    activities and fellowship opportunities for all ages. Come at 5:30
    pm for an optional (outside) bring-your-own dinner.{" "}
    <strong>Childcare</strong> (nursery-PreK) is provided from 5:45-
    7:45 pm. <strong>Kids Club</strong> (K-6th grade) meets from
    6-7:30 pm to play games, hang out together, and learn about the
    Armor of God. <strong>Youth Group</strong> (7th - 12th grade) also
    meets from 6-7:30 pm to hang out, study God&#39;s Word together,
    and play games. <strong>Abide</strong> (adults) meets from 6-7 pm
    for a time of worship and prayer. <strong>Choir</strong> rehearses
    from 7-8 pm.
  </p>,
  <p key={2}>
    <strong>Join a Ministry Team:</strong> Serving is a great way to
    get connected with others in our church community and be a part of
    our church’s ministry. The Children’s Ministry Team still needs
    Sunday School teachers and Young Children and Worship Greeters.
    The Worship Team needs help running sound/ PowerPoint and guitar
    players. The Outreach and Connection Team is looking for greeters
    and volunteers to join the coffee team. The church office is
    looking for volunteers to help take pictures at church events and
    programs.
  </p>,
  <p key={3}>
    <strong>Sunday School</strong> starts at 9:15 am each week.
    Toddlers (2-3yrs) meet in the nursery/ toddler area. Children ages
    4yrs-6th grade meet outside. Go to the welcome tent to check in.
    The confirmation class (7th-8th grade) meet in the conference
    room. High schoolers meet in the prayer room. Adults meet in the
    sanctuary for Old Testament class or in the Lounge for coffee and
    conversation.
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
