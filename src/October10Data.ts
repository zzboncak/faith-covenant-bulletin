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
  aMightyFortressIsOurGod,
  christBeMyLeader,
  notForAMoment,
  yesIWill,
  youNeverLetGo
} from "./songs";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

export const october10service: SectionProps[] = [
  generate1stSection(
    { title: "Let Everything that Has Breath", isExpandable: false },
    [youNeverLetGo, notForAMoment, yesIWill]
  ),
  generate2ndSection([
    generateScriptureReading(
      `Acts 22 (NIV)
      22 “Brothers and fathers, listen now to my defense.” 
      2 When they heard him speak to them in Aramaic, they became very quiet. 
      Then Paul said: 3 “I am a Jew, born in Tarsus of Cilicia, but brought up in this city. I studied under Gamaliel and was thoroughly trained in the law of our ancestors. I was just as zealous for God as any of you are today. 4 I persecuted the followers of this Way to their death, arresting both men and women and throwing them into prison, 5 as the high priest and all the Council can themselves testify. I even obtained letters from them to their associates in Damascus, and went there to bring these people as prisoners to Jerusalem to be punished. 
      6 “About noon as I came near Damascus, suddenly a bright light from heaven flashed around me. 7 I fell to the ground and heard a voice say to me, ‘Saul! Saul! Why do you persecute me?’ 
      8 “ ‘Who are you, Lord?’ I asked. 
      “ ‘I am Jesus of Nazareth, whom you are persecuting,’ he replied. 9 My companions saw the light, but they did not understand the voice of him who was speaking to me. 
      10 “ ‘What shall I do, Lord?’ I asked. 
      “ ‘Get up,’ the Lord said, ‘and go into Damascus. There you will be told all that you have been assigned to do.’ 11 My companions led me by the hand into Damascus, because the brilliance of the light had blinded me. 
      12 “A man named Ananias came to see me. He was a devout observer of the law and highly respected by all the Jews living there. 13 He stood beside me and said, ‘Brother Saul, receive your sight!’ And at that very moment I was able to see him. 
      14 “Then he said: ‘The God of our ancestors has chosen you to know his will and to see the Righteous One and to hear words from his mouth. 15 You will be his witness to all people of what you have seen and heard. 16 And now what are you waiting for? Get up, be baptized and wash your sins away, calling on his name.’ 
      17 “When I returned to Jerusalem and was praying at the temple, I fell into a trance 18 and saw the Lord speaking to me. ‘Quick!’ he said. ‘Leave Jerusalem immediately, because the people here will not accept your testimony about me.’ 
      19 “ ‘Lord,’ I replied, ‘these people know that I went from one synagogue to another to imprison and beat those who believe in you. 20 And when the blood of your martyr Stephen was shed, I stood there giving my approval and guarding the clothes of those who were killing him.’ 
      21 “Then the Lord said to me, ‘Go; I will send you far away to the Gentiles.’ ”`,
      "Acts 22:1-21",
      ScriptureReadingSongs.ANCIENT_WORDS,
      "Stan Austin"
    ),
    generateMinistryToChildren(
      "Angela Broman",
      ChildrenSongs.JESUS_LOVES_ME
    ),
    generateHymnOfPreparation(christBeMyLeader),
    generateSermon(
      "Pastor Nate Hickox",
      "Defending Paul and Defending the Gospel"
    )
  ]),
  generate3rdSection([
    prayersOfThePeople,
    generateGivingSection(OfferingSongs.DOXOLOGY),
    prayerOfDedication
  ]),
  generate4thSection([
    generateHymnOfSending(aMightyFortressIsOurGod),
    benediction
  ])
];
