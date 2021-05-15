/* eslint-disable no-irregular-whitespace */
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateHymnOfPreparation,
  generateMinistryToChildren,
  generateScriptureReading,
  generateSermon
} from "./helperFunctions";
import {
  prayersOfThePeople,
  offeringDedication,
  prayerOfDedication,
  benediction
} from "./commonElements";
import {
  overcome,
  gloriousDay,
  heIsExalted,
  crownHimWithManyCrowns,
  weExaltThee,
  allHailThePowerOfJesusName,
  sendMeOut
} from "./songs";
import { SubsectionProps } from "./types";

const section1 = generate1stSection(overcome, [
  gloriousDay,
  heIsExalted,
  crownHimWithManyCrowns
]);

const scriptureReading = generateScriptureReading(
  `Jesus Taken Up Into Heaven
1 In my former book, Theophilus, I wrote about all that Jesus began to do and to teach 2 until the day he was taken up to heaven, after giving instructions through the Holy Spirit to the apostles he had chosen. 3 After his suffering, he presented himself to them and gave many convincing proofs that he was alive. He appeared to them over a period of forty days and spoke about the kingdom of God. 4 On one occasion, while he was eating with them, he gave them this command: “Do not leave Jerusalem, but wait for the gift my Father promised, which you have heard me speak about. 5 For John baptized with water, but in a few days you will be baptized with the Holy Spirit.” 
6 Then they gathered around him and asked him, “Lord, are you at this time going to restore the kingdom to Israel?” 
7 He said to them: “It is not for you to know the times or dates the Father has set by his own authority. 8 But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.” 
9 After he said this, he was taken up before their very eyes, and a cloud hid him from their sight. 
10 They were looking intently up into the sky as he was going, when suddenly two men dressed in white stood beside them. 11 “Men of Galilee,” they said, “why do you stand here looking into the sky? This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven.”`,
  "Acts 1:1-11"
);

const section2 = generate2ndSection([
  scriptureReading,
  generateMinistryToChildren("Elianna Tuggy"),
  generateHymnOfPreparation(weExaltThee),
  generateSermon("Pastor Nate Hickox", "The Acts of Jesus Continued")
]);

const section3 = generate3rdSection([
  prayersOfThePeople,
  offeringDedication,
  prayerOfDedication
]);

const songOfSending: SubsectionProps = {
  title: "Songs of Sending",
  subtext: "Congregation Standing",
  subjects: [sendMeOut, allHailThePowerOfJesusName]
};

const section4 = generate4thSection([songOfSending, benediction]);

export const may16Service = [section1, section2, section3, section4];
