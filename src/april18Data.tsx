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
  thineIsTheGlory
} from "./songs";

const gatheringSong: SubsectionProps = {
  title: "Gathering Song",
  subjects: [
    {
      title: "Counting Every Blessing",
      isExpandable: true,
      content: `Here are some words`
    }
  ]
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
  "Now I rejoice in my sufferings for your sake, and in my flesh I am filling up what is lacking in Christ’s afflictions for the sake of his body, that is, the church, of which I became a minister according to the stewardship from God that was given to me for you, to make the word of God fully known, the mystery hidden for ages and generations but now revealed to his saints. To them God chose to make known how great among the Gentiles are the riches of the glory of this mystery, which is Christ in you, the hope of glory. Him we proclaim, warning everyone and teaching everyone with all wisdom, that we may present everyone mature in Christ. For this I toil, struggling with all his energy that he powerfully works within me. For I want you to know how great a struggle I have for you and for those at Laodicea and for all who have not seen me face to face, that their hearts may be encouraged, being knit together in love, to reach all the riches of full assurance of understanding and the knowledge of God’s mystery, which is Christ, in whom are hidden all the treasures of wisdom and knowledge. I say this in order that no one may delude you with plausible arguments. For though I am absent in body, yet I am with you in spirit, rejoicing to see your good order and the firmness of your faith in Christ. Therefore, as you received Christ Jesus the Lord, so walk in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving. See to it that no one takes you captive by philosophy and empty deceit, according to human tradition, according to the elemental spirits of the world, and not according to Christ.",
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
    Save the Date: Mark your calendars for Faith Covenant&#39;s
    All-Church Retreat! It will be held at Covenant Harbor in Lake
    Geneva, Wisconsin. The dates are August 6-8, 2021. More details to
    come in the next few weeks.
  </p>,
  <p key={2}>
    Welcome Lunch, April 25, 12:00 pm: Are you new to Faith Covenant?
    We would love to get to know you. Please join us for a Welcome
    Lunch following the 10:30 am Worship Service. You will enjoy a box
    lunch and get acquainted with others who are new to the church.
    Meet Pastor Nate in a smaller setting and hear the dream God has
    given the church for ministry in South Wheaton. (We will social
    distance and wear masks when not eating.) Please sign up by April
    21. Click{" "}
    <a
      href="https://faithecc.us2.list-manage.com/track/click?u=5ebbfcca2268fc238d4964e8a&id=c1ecfee6ec&e=ce13a0b3e9"
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
