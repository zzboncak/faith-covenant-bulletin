/* eslint-disable no-irregular-whitespace */
import {
  benediction,
  offeringDedication,
  prayerOfDedication,
  prayersOfThePeople
} from "../commonElements";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateHymnOfPreparation,
  generateMinistryToChildren,
  generateScriptureReading,
  generateSermon
} from "../helperFunctions";
import {
  allWhoAreThirsty,
  battleBelong,
  buildYourKingdomHere,
  oHolySpiritMakingWhole,
  spiritOfTheLivingGodFallAfreshOnMe,
  takeMyLife
} from "../songs";
import { ChildrenSongs, SubsectionProps } from "../types";

const section1 = generate1stSection(battleBelong, [
  takeMyLife,
  allWhoAreThirsty,
  oHolySpiritMakingWhole
]);

const scriptureReading = generateScriptureReading(
  `36 Let all the house of Israel therefore know for certain that God has made him both Lord and Christ, this Jesus whom you crucified.” 
37 Now when they heard this they were cut to the heart, and said to Peter and the rest of the apostles, “Brothers, what shall we do?” 38 And Peter said to them, “Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit. 39 For the promise is for you and for your children and for all who are far off, everyone whom the Lord our God calls to himself.” 40 And with many other words he bore witness and continued to exhort them, saying, “Save yourselves from this crooked generation.” 41 So those who received his word were baptized, and there were added that day about three thousand souls. 
The Fellowship of the Believers
42 And they devoted themselves to the apostles’ teaching and the fellowship, to the breaking of bread and the prayers. 43 And awe came upon every soul, and many wonders and signs were being done through the apostles. 44 And all who believed were together and had all things in common. 45 And they were selling their possessions and belongings and distributing the proceeds to all, as any had need. 46 And day by day, attending the temple together and breaking bread in their homes, they received their food with glad and generous hearts, 47 praising God and having favor with all the people. And the Lord added to their number day by day those who were being saved.`,
  "Acts 2:36-47"
);

const section2 = generate2ndSection([
  scriptureReading,
  generateMinistryToChildren(
    "Angela Broman",
    ChildrenSongs.JESUS_LOVES_ME
  ),
  generateHymnOfPreparation(spiritOfTheLivingGodFallAfreshOnMe),
  generateSermon("Pastor Nate Hickox", "The Birth of the Church")
]);

const section3 = generate3rdSection([
  prayersOfThePeople,
  offeringDedication,
  prayerOfDedication
]);

const songOfSending: SubsectionProps = {
  title: "Song of Sending",
  subtext: "Congregation Standing",
  subjects: [buildYourKingdomHere]
};

const section4 = generate4thSection([songOfSending, benediction]);

export const may23Service = [section1, section2, section3, section4];
