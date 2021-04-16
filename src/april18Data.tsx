import React from "react";
import { SubsectionProps } from "./types";
import {
  callToWorship,
  prayersOfThePeople,
  offeringDedication,
  prayerOfDedication,
  benediction
} from "./commonElements";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateAnnouncements,
  generateMinistryToChildren,
  generateScriptureReading
} from "./helperFunctions";
import {
  christIsRisen,
  howGreatIsOurGod,
  foreverWeSingHallelujah,
  speakOLord,
  thineIsTheGlory,
  countingEveryBlessing
} from "./songs";

const gatheringSong: SubsectionProps = {
  title: "Gathering Song",
  subjects: [countingEveryBlessing]
};

const songsOfWorship: SubsectionProps = {
  title: "Songs of Worship",
  subjects: [christIsRisen, howGreatIsOurGod, foreverWeSingHallelujah]
};

const section1 = generate1stSection([
  gatheringSong,
  callToWorship,
  songsOfWorship
]);

const scriptureReading = generateScriptureReading(
  "Now I rejoice in what I am suffering for you, and I fill up in my flesh what is still lacking in regard to Christ’s afflictions, for the sake of his body, which is the church. I have become its servant by the commission God gave me to present to you the word of God in its fullness—the mystery that has been kept hidden for ages and generations, but is now disclosed to the Lord’s people. To them God has chosen to make known among the Gentiles the glorious riches of this mystery, which is Christ in you, the hope of glory. He is the one we proclaim, admonishing and teaching everyone with all wisdom, so that we may present everyone fully mature in Christ. To this end I strenuously contend with all the energy Christ so powerfully works in me. I want you to know how hard I am contending for you and for those at Laodicea, and for all who have not met me personally. My goal is that they may be encouraged in heart and united in love, so that they may have the full riches of complete understanding, in order that they may know the mystery of God, namely, Christ, in whom are hidden all the treasures of wisdom and knowledge. I tell you this so that no one may deceive you by fine-sounding arguments. For though I am absent from you in body, I am present with you in spirit and delight to see how disciplined you are and how firm your faith in Christ is. So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness. See to it that no one takes you captive through hollow and deceptive philosophy, which depends on human tradition and the elemental spiritual forces of this world rather than on Christ.",
  "Colossians 1:24-2:8"
);

const ministryToChildren = generateMinistryToChildren("Wendy Smith");

const hymnOfPreparation: SubsectionProps = {
  title: "Hymn of Preparation",
  subjects: [speakOLord]
};

const sermon: SubsectionProps = {
  title: "Sermon",
  person: "Pastor Nate Hickox",
  subjects: [
    {
      title: "Keys to Being Rooted Together",
      isExpandable: false
    }
  ]
};

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

// Probably need to create a generateAnnouncements section
const announcements = generateAnnouncements([
  <p key={1}>
    <strong>Save the Date:</strong> Mark your calendars for Faith
    Covenant&#39;s All-Church Retreat! It will be held at Covenant
    Harbor in Lake Geneva, Wisconsin. The dates are August 6-8, 2021.
    More details to come in the next few weeks.
  </p>,
  <p key={2}>
    <strong>Welcome Lunch, April 25, 12:00 pm:</strong> Are you new to
    Faith Covenant? We would love to get to know you. Please join us
    for a Welcome Lunch following the 10:30 am Worship Service. You
    will enjoy a box lunch and get acquainted with others who are new
    to the church. Meet Pastor Nate in a smaller setting and hear the
    dream God has given the church for ministry in South Wheaton. (We
    will social distance and wear masks when not eating.) Please sign
    up by April 21. Click{" "}
    <a
      href="https://faithecc.breezechms.com/form/WelcomeLunch4.25.21"
      target="_blank"
      rel="noreferrer"
    >
      HERE
    </a>{" "}
    to register. Questions? Contact Marie Allison,{" "}
    <a href="mailto:outreach@faithecc.org?subject=Welcome Lunch">
      outreach@faithecc.org
    </a>
    .
  </p>
]);

const hymnOfSending: SubsectionProps = {
  title: "Hymn of Sending",
  subjects: [thineIsTheGlory]
};

const section4 = generate4thSection([
  announcements,
  hymnOfSending,
  benediction
]);

export const april18Service = [
  section1,
  section2,
  section3,
  section4
];
