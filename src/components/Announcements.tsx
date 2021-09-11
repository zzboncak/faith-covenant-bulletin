import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Fall Kickoff BBQ Picnic:</strong> Today after church, we
    will rally together for a picnic following the service. Together
    we will celebrate the beginning of a new ministry season dedicated
    to focused outreach and renewed community. We hope you will stay
    for lunch and fun!
  </p>,
  <p key={2}>
    <strong>Community Night starts this Wednesday:</strong> September
    15. Join us each week for activities and fellowship opportunities
    for all ages. Come at 5:30 pm for an optional (outside)
    bring-your-own dinner. Childcare (nursery-PreK) is provided from
    5:45-7:45 pm. Kids Club (K-6th grade) meets from 6-7:30 pm to play
    games, hang out together, and learn about the Armor of God. Your
    kids will LOVE it! Youth Group (7th-12th grade) also meets from
    6-7:30 pm to hang out, study God’s Word together, and play games.
    Abide (adults) meets from 6-7pm for a time of worship and prayer.
    Choir rehearses from 7-8 pm.
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
