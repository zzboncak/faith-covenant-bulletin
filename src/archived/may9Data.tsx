/* eslint-disable no-irregular-whitespace */
// import React from "react";
import {
  // generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateMinistryToChildren,
  generateScriptureReading,
  generateSermon
} from "../helperFunctions";
import {
  // callToWorship,
  prayersOfThePeople,
  offeringDedication,
  prayerOfDedication,
  benediction
} from "../commonElements";
import {
  // weHaveAnAnchor,
  // comePeopleOfTheRisenKing,
  // stronger,
  // becauseHeLives,
  godCreatorOfYourPeople,
  iWillRise
} from "../songs";
import { SubsectionProps } from "../types";

// const gatheringSong: SubsectionProps = {
//   title: "Gathering Song",
//   subjects: [weHaveAnAnchor]
// };

// const songsOfWorship: SubsectionProps = {
//   title: "Songs of Worship",
//   subtext: "Congregation Standing",
//   subjects: [comePeopleOfTheRisenKing, stronger, becauseHeLives]
// };

// const section1 = generate1stSection([
//   gatheringSong,
//   callToWorship,
//   songsOfWorship
// ]);

const scriptureReading = generateScriptureReading(
  `Further Instructions
  2 Devote yourselves to prayer, being watchful and thankful. 3 And pray for us, too, that God may open a door for our message, so that we may proclaim the mystery of Christ, for which I am in chains. 4 Pray that I may proclaim it clearly, as I should. 5 Be wise in the way you act toward outsiders; make the most of every opportunity. 6 Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone. 
  Final Greetings
  7 Tychicus will tell you all the news about me. He is a dear brother, a faithful minister and fellow servant  in the Lord. 8 I am sending him to you for the express purpose that you may know about our circumstances and that he may encourage your hearts. 9 He is coming with Onesimus, our faithful and dear brother, who is one of you. They will tell you everything that is happening here. 
  10 My fellow prisoner Aristarchus sends you his greetings, as does Mark, the cousin of Barnabas. (You have received instructions about him; if he comes to you, welcome him.) 11 Jesus, who is called Justus, also sends greetings. These are the only Jews among my co-workers for the kingdom of God, and they have proved a comfort to me. 12 Epaphras, who is one of you and a servant of Christ Jesus, sends greetings. He is always wrestling in prayer for you, that you may stand firm in all the will of God, mature and fully assured. 13 I vouch for him that he is working hard for you and for those at Laodicea and Hierapolis. 14 Our dear friend Luke, the doctor, and Demas send greetings. 15 Give my greetings to the brothers and sisters at Laodicea, and to Nympha and the church in her house. 
  16 After this letter has been read to you, see that it is also read in the church of the Laodiceans and that you in turn read the letter from Laodicea. 
  17 Tell Archippus: “See to it that you complete the ministry you have received in the Lord.” 
  18 I, Paul, write this greeting in my own hand. Remember my chains. Grace be with you.
  `,
  "Colossians 4:2-18"
);

const ministryToChildren = generateMinistryToChildren(
  "Angela Broman"
);

const hymnOfPreparation: SubsectionProps = {
  title: "Hymn of Preparation",
  subjects: [godCreatorOfYourPeople],
  subtext: "Congregation Standing"
};

const sermon = generateSermon(
  "Pastor Nate Hickox",
  "Living Rooted Together"
);

const section2 = generate2ndSection([
  scriptureReading,
  ministryToChildren,
  hymnOfPreparation,
  sermon
]);

const section3 = generate3rdSection([
  prayersOfThePeople,
  offeringDedication,
  prayerOfDedication
]);

// const announcements = generateAnnouncements([
//   <p key={1}>
//     <strong>Digital Bulletin:</strong> If you&#39;re reading this,
//     congratulations! You&#39;re already using the digital bulletin.
//     High five ✋.
//   </p>,
//   <p key={2}>
//     <strong>Church Holidays:</strong> Come celebrate our church
//     holidays!{" "}
//     <strong>
//       Ascension Day is Thursday, May 13, 6:30 pm, and Pentecost Sunday
//       is May 23, 6:30 pm.
//     </strong>{" "}
//     These evenings will be times of song, prayer, and celebration as
//     we worship together. Join us!
//   </p>
// ]);

const hymnOfSending: SubsectionProps = {
  title: "Hymn of Sending",
  subtext: "Congregation Standing",
  subjects: [iWillRise]
};

const section4 = generate4thSection([hymnOfSending, benediction]);

export const may9Service = [
  /*section1,*/ section2,
  section3,
  section4
];
