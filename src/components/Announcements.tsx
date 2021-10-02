import React from "react";
import { generateAnnouncements } from "../helperFunctions";
import { Subsection } from "./subsection/Subsection";

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>All-Church Family Meal:</strong> Stay after church today
    (weather-permitting) for lunch. All are welcome to join and enjoy
    this time of fellowship. This time together is a lot of fun and a
    vital part of forming intentional community. If you are able,
    please consider helping with cleanup after the meal or during the
    meal to keep the food table clean. Please see Bethany Romero if
    you can help.
  </p>,
  <p key={2}>
    <strong>
      Volunteers needed for Trunk or Treat (Saturday, Oct. 23,
      3:00-5:00 pm):
    </strong>{" "}
    Pumpkins, autumn leaves, and chilly air...fall is here! It is an
    especially fun season for children. If we have enough volunteers,
    we are hoping to host our third annual Trunk or Treat. Are you
    available to serve? Our goal is to have at least 20 Trunks. We
    also need candy donations, welcome hosts, and hay wagon hosts. You
    can sign up to serve by clicking{" "}
    <a
      href="https://faithecc.breezechms.com/forms/entries/497044"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>
    . Please sign up by TODAY!
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
