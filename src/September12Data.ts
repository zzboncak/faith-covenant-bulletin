import {
  benediction,
  prayerOfDedication,
  prayersOfThePeople
} from "./commonElements";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateGivingSection,
  generateHymnOfPreparation,
  generateHymnOfSending,
  generateMinistryToChildren,
  generateScriptureReading,
  generateSermon
} from "./helperFunctions";
import {
  comeAsYouAre,
  comePeopleOfTheRisenKing,
  godBlessYourChurchWithStrength,
  tenThousandReasons,
  thisIsAmazingGrace,
  weAreAllOneInMission
} from "./songs";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

export const september12Service: SectionProps[] = [
  generate1stSection(comeAsYouAre, [
    comePeopleOfTheRisenKing,
    thisIsAmazingGrace,
    tenThousandReasons
  ]),
  generate2ndSection([
    generateScriptureReading(
      `Acts 18:1–11 (NIV)


    In Corinth
    18 After this, Paul left Athens and went to Corinth. 2 There he met a Jew named Aquila, a native of Pontus, who had recently come from Italy with his wife Priscilla, because Claudius had ordered all Jews to leave Rome. Paul went to see them, 3 and because he was a tentmaker as they were, he stayed and worked with them. 4 Every Sabbath he reasoned in the synagogue, trying to persuade Jews and Greeks. 
    5 When Silas and Timothy came from Macedonia, Paul devoted himself exclusively to preaching, testifying to the Jews that Jesus was the Messiah. 6 But when they opposed Paul and became abusive, he shook out his clothes in protest and said to them, “Your blood be on your own heads! I am innocent of it. From now on I will go to the Gentiles.” 
    7 Then Paul left the synagogue and went next door to the house of Titius Justus, a worshiper of God. 8 Crispus, the synagogue leader, and his entire household believed in the Lord; and many of the Corinthians who heard Paul believed and were baptized. 
    9 One night the Lord spoke to Paul in a vision: “Do not be afraid; keep on speaking, do not be silent. 10 For I am with you, and no one is going to attack and harm you, because I have many people in this city.” 11 So Paul stayed in Corinth for a year and a half, teaching them the word of God.
    `,
      "Acts 18:1-11",
      ScriptureReadingSongs.ANCIENT_WORDS,
      "Jenna Jasper"
    ),
    generateMinistryToChildren(
      "Angela Broman",
      ChildrenSongs.JESUS_LOVES_ME
    ),
    generateHymnOfPreparation(weAreAllOneInMission),
    generateSermon(
      "Pastor Nate Hickox",
      "The Greatest Team of All Time"
    )
  ]),
  generate3rdSection([
    prayersOfThePeople,
    generateGivingSection(OfferingSongs.DOXOLOGY),
    prayerOfDedication
  ]),
  generate4thSection([
    {
      title: "Consecration of Church Workers"
    },
    generateHymnOfSending(godBlessYourChurchWithStrength),
    benediction
  ])
];
