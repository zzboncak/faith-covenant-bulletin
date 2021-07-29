import {
  apostlesCreedCondensed,
  benediction,
  communionCondensed,
  prayerOfDedication,
  prayersOfThePeopleCondensed
} from "./commonElements";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateHymnOfPreparation,
  generateHymnOfSending,
  generateMinistryToChildren,
  generateSermon
} from "./helperFunctions";
import { ChildrenSongs } from "./types";

const section1 = generate1stSection(
  {
    title: "Champion",
    isExpandable: false
  },
  [
    {
      title: "Blessed Assurance",
      isExpandable: false
    },
    {
      title: "Great Are You Lord",
      isExpandable: false
    },
    {
      title: "Great is Thy Faithfulness",
      isExpandable: false
    }
  ]
);

const section2 = generate2ndSection([
  {
    title: "Scripture Reading",
    subtext: "Acts 12:1-24",
    subjects: [
      {
        title: "Spirit of the Living God",
        isExpandable: false
      }
    ]
  },
  generateMinistryToChildren(
    "Angela Broman",
    ChildrenSongs.I_AM_SO_GLAD,
    false
  ),
  generateHymnOfPreparation(
    {
      title: "Jesus Shall Reign Where’er the Sun",
      isExpandable: false
    },
    "hymn"
  ),
  generateSermon("Filipe Chamy", "Your Kingdom Come")
]);

const section3 = generate3rdSection([
  prayersOfThePeopleCondensed,
  apostlesCreedCondensed,
  communionCondensed,
  {
    title: "Offering Dedication",
    subtext: "*Congregation Standing",
    subjects: [
      {
        title: "Grant Us, Lord, the Grace of Giving",
        isExpandable: false
      }
    ]
  },
  prayerOfDedication
]);

const section4 = generate4thSection([
  generateHymnOfSending(
    { title: "Rejoice the Lord is King", isExpandable: false },
    "hymn"
  ),
  benediction
]);

export const august1Service = [
  section1,
  section2,
  section3,
  section4
];
