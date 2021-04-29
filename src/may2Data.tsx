/* eslint-disable no-irregular-whitespace */
import React from "react";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateAnnouncements,
  generateMinistryToChildren,
  generateScriptureReading,
  generateSermon
} from "./helperFunctions";
import {
  callToWorship,
  prayersOfThePeople,
  communion,
  offeringDedication,
  prayerOfDedication,
  benediction
} from "./commonElements";
import {
  resurrectionPower,
  ourGodSaves,
  jesusSonOfGod,
  thisIBelieveCreed,
  helpUsAcceptEachOther,
  godBlessYourChurchWithStrength
} from "./songs";
import { SubsectionProps } from "./types";

const gatheringSong: SubsectionProps = {
  title: "Gathering Song",
  subjects: [resurrectionPower]
};

const songsOfWorship: SubsectionProps = {
  title: "Songs of Worship",
  subjects: [ourGodSaves, jesusSonOfGod, thisIBelieveCreed]
};

const section1 = generate1stSection([
  gatheringSong,
  callToWorship,
  songsOfWorship
]);

const scriptureReading = generateScriptureReading(
  `12 Therefore, as God’s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience. 13 Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you. 14 And over all these virtues put on love, which binds them all together in perfect unity. 
15 Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful. 16 Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts. 17 And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.`,
  "Colossians 3:12-17"
);

const ministryToChildren = generateMinistryToChildren(
  "Angela Broman"
);

const hymnOfPreparation: SubsectionProps = {
  title: "Hymn of Preparation",
  subjects: [helpUsAcceptEachOther]
};

const sermon = generateSermon(
  "Rev. Gene Frost",
  "Put on the Turf Builder!"
);

const section2 = generate2ndSection([
  scriptureReading,
  ministryToChildren,
  hymnOfPreparation,
  sermon
]);

const section3 = generate3rdSection([
  prayersOfThePeople,
  communion,
  offeringDedication,
  prayerOfDedication
]);

const announcements = generateAnnouncements([
  <p key={1}>
    <strong>All-Church Retreat:</strong> Registration is open for
    Faith Covenant&#39;s All-Church Retreat! Details and info are on{" "}
    <a
      href="https://www.faithecc.org/"
      target="_blank"
      rel="noreferrer"
    >
      the website
    </a>
    .
  </p>,
  <p key={2}>
    <strong>Volunteer Opportunity:</strong> If we have enough
    volunteers, we would like to host a VBS at Faith Covenant, July
    5-9, 9:30-11:30 am, kindergarten through fourth grade. Anyone age
    14 years and older can serve! Let us know if you are interested by
    connecting with Wendy Smith at{" "}
    <a href="mailto:children@faithecc.org?subject=Summer VBS">
      children@faithecc.org
    </a>
    .
  </p>
]);

const hymnOfSending: SubsectionProps = {
  title: "Hymn of Sending",
  person: "#580",
  subjects: [godBlessYourChurchWithStrength]
};

const section4 = generate4thSection([
  announcements,
  hymnOfSending,
  benediction
]);

export const may2Service = [section1, section2, section3, section4];
