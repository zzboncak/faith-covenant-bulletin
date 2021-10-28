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

export const october31service: SectionProps[] = [
  generate1stSection(g("Hear Us From Heaven"), [
    g("Open the Eyes of My Heart"),
    g("Mighty to Save"),
    g("Be Thou My Vision")
  ]),
  generate2ndSection([
    generateScriptureReading(
      `Acts 26:12–18 (NIV)
      12 “On one of these journeys I was going to Damascus with the authority and commission of the chief priests. 13 About noon, King Agrippa, as I was on the road, I saw a light from heaven, brighter than the sun, blazing around me and my companions. 14 We all fell to the ground, and I heard a voice saying to me in Aramaic,  ‘Saul, Saul, why do you persecute me? It is hard for you to kick against the goads.’ 
      15 “Then I asked, ‘Who are you, Lord?’ 
      “ ‘I am Jesus, whom you are persecuting,’ the Lord replied. 16 ‘Now get up and stand on your feet. I have appeared to you to appoint you as a servant and as a witness of what you have seen and will see of me. 17 I will rescue you from your own people and from the Gentiles. I am sending you to them 18 to open their eyes and turn them from darkness to light, and from the power of Satan to God, so that they may receive forgiveness of sins and a place among those who are sanctified by faith in me.’`,
      "Acts 26:12-18",
      ScriptureReadingSongs.ANCIENT_WORDS,
      "Kristina Ourada"
    ),
    generateMinistryToChildren(
      "Wendy Smith",
      ChildrenSongs.JESUS_LOVES_ME
    ),
    generateHymnOfPreparation(g("Open My Eyes that I May See")),
    generateSermon("Pastor Nate Hickox", "")
  ]),
  generate3rdSection([
    {
      title: "Sermon Response",
      subjects: [g("Amazing Grace (My Chains Are Gone)")]
    },
    prayersOfThePeople,
    generateGivingSection(OfferingSongs.DOXOLOGY),
    prayerOfDedication
  ]),
  generate4thSection([
    generateHymnOfSending(g("Build My Life"), "song"),
    benediction
  ])
];
