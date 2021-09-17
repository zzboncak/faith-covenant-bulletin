import {
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
  allThePeopleSaidAmen,
  buildYourKingdomHere,
  changeMyHeartOGod,
  comeThouFountOfEveryBlessing,
  createInMeACleanHeart,
  goodGrace,
  houseOfTheLord
} from "./songs";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

export const september19Service: SectionProps[] = [
  generate1stSection(goodGrace, [
    houseOfTheLord,
    allThePeopleSaidAmen,
    comeThouFountOfEveryBlessing
  ]),
  generate2ndSection([
    generateScriptureReading(
      `Acts 19:11–20 (NIV)
    11 God did extraordinary miracles through Paul, 12 so that even handkerchiefs and aprons that had touched him were taken to the sick, and their illnesses were cured and the evil spirits left them. 
    13 Some Jews who went around driving out evil spirits tried to invoke the name of the Lord Jesus over those who were demon-possessed. They would say, “In the name of the Jesus whom Paul preaches, I command you to come out.” 14 Seven sons of Sceva, a Jewish chief priest, were doing this. 15 One day the evil spirit answered them, “Jesus I know, and Paul I know about, but who are you?” 16 Then the man who had the evil spirit jumped on them and overpowered them all. He gave them such a beating that they ran out of the house naked and bleeding. 
    17 When this became known to the Jews and Greeks living in Ephesus, they were all seized with fear, and the name of the Lord Jesus was held in high honor. 18 Many of those who believed now came and openly confessed what they had done. 19 A number who had practiced sorcery brought their scrolls together and burned them publicly. When they calculated the value of the scrolls, the total came to fifty thousand drachmas. 20 In this way the word of the Lord spread widely and grew in power.
    `,
      "Acts 19:11-20",
      ScriptureReadingSongs.ANCIENT_WORDS,
      "Jean Peterson"
    ),
    generateMinistryToChildren(
      "Wendy Smith",
      ChildrenSongs.JESUS_LOVES_ME
    ),
    generateHymnOfPreparation(changeMyHeartOGod),
    generateSermon("Filipe Chamy", "Genuine Revival")
  ]),
  generate3rdSection([
    prayersOfThePeople,
    generateGivingSection(OfferingSongs.DOXOLOGY),
    prayerOfDedication
  ]),
  generate4thSection([
    generateHymnOfSending(
      [createInMeACleanHeart, buildYourKingdomHere],
      "song",
      true
    )
  ])
];
