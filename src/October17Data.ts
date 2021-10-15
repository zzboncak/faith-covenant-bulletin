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
  battleBelong,
  beStillMySoulTheLordIsOnYourSide,
  godOfGraceAndGodofGlory,
  hereIBow,
  myLighthouse
} from "./songs";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

export const october17service: SectionProps[] = [
  generate1stSection({ title: "Here I Bow", isExpandable: false }, [
    myLighthouse,
    battleBelong,
    hereIBow
  ]),
  generate2ndSection([
    generateScriptureReading(
      ``,
      "Acts 22:30-23:24",
      ScriptureReadingSongs.ANCIENT_WORDS,
      "Rick Wolff"
    ),
    generateMinistryToChildren(
      "Wendy Smith",
      ChildrenSongs.JESUS_LOVES_ME
    ),
    generateHymnOfPreparation(beStillMySoulTheLordIsOnYourSide),
    generateSermon("Courtney Zboncak", "Courageous Witness")
  ]),
  generate3rdSection([
    prayersOfThePeople,
    generateGivingSection(OfferingSongs.DOXOLOGY),
    prayerOfDedication
  ]),
  generate4thSection([
    generateHymnOfSending(godOfGraceAndGodofGlory),
    benediction
  ])
];
