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
  generateSermon,
  genNonExpandableSE
} from "./helperFunctions";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

const g = genNonExpandableSE;
export const october24service: SectionProps[] = [
  generate1stSection(g("King Of My Heart"), [
    g("Joyful, Joyful, We Adore Thee"),
    g("Nothing but the Blood"),
    g("Before the Throne of God Above")
  ]),
  generate2ndSection([
    generateScriptureReading(
      `Acts 24:10–27 (NIV)
      10 When the governor motioned for him to speak, Paul replied: “I know that for a number of years you have been a judge over this nation; so I gladly make my defense. 11 You can easily verify that no more than twelve days ago I went up to Jerusalem to worship. 12 My accusers did not find me arguing with anyone at the temple, or stirring up a crowd in the synagogues or anywhere else in the city. 13 And they cannot prove to you the charges they are now making against me. 14 However, I admit that I worship the God of our ancestors as a follower of the Way, which they call a sect. I believe everything that is in accordance with the Law and that is written in the Prophets, 15 and I have the same hope in God as these men themselves have, that there will be a resurrection of both the righteous and the wicked. 16 So I strive always to keep my conscience clear before God and man. 
      17 “After an absence of several years, I came to Jerusalem to bring my people gifts for the poor and to present offerings. 18 I was ceremonially clean when they found me in the temple courts doing this. There was no crowd with me, nor was I involved in any disturbance. 19 But there are some Jews from the province of Asia, who ought to be here before you and bring charges if they have anything against me. 20 Or these who are here should state what crime they found in me when I stood before the Sanhedrin—21 unless it was this one thing I shouted as I stood in their presence: ‘It is concerning the resurrection of the dead that I am on trial before you today.’ ” 
      22 Then Felix, who was well acquainted with the Way, adjourned the proceedings. “When Lysias the commander comes,” he said, “I will decide your case.” 23 He ordered the centurion to keep Paul under guard but to give him some freedom and permit his friends to take care of his needs. 
      24 Several days later Felix came with his wife Drusilla, who was Jewish. He sent for Paul and listened to him as he spoke about faith in Christ Jesus. 25 As Paul talked about righteousness, self-control and the judgment to come, Felix was afraid and said, “That’s enough for now! You may leave. When I find it convenient, I will send for you.” 26 At the same time he was hoping that Paul would offer him a bribe, so he sent for him frequently and talked with him. 
      27 When two years had passed, Felix was succeeded by Porcius Festus, but because Felix wanted to grant a favor to the Jews, he left Paul in prison.`,
      "Acts 24:10-27",
      ScriptureReadingSongs.ANCIENT_WORDS
    ),
    generateMinistryToChildren(
      "Angela Broman",
      ChildrenSongs.JESUS_LOVES_ME
    ),
    generateHymnOfPreparation(g("Jesus Calls Us O’er the Tumult")),
    generateSermon("Pastor Nate Hickox", "")
  ]),
  generate3rdSection([
    {
      title: "Sermon Response",
      subjects: [g("Refiner's Fire/Sanctuary")]
    },
    prayersOfThePeople,
    generateGivingSection(OfferingSongs.DOXOLOGY),
    prayerOfDedication
  ]),
  generate4thSection([
    {
      title: "Choir Anthem",
      subjects: [g("Redeemed")]
    },
    generateHymnOfSending(g("In Christ Alone")),
    benediction
  ])
];
