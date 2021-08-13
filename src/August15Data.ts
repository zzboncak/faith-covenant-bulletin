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
  generateSermon
} from "./helperFunctions";
import {
  amazingGrace,
  christIsEnough,
  kingOfKings,
  theOldRuggedCross,
  weHaveAnAnchor
} from "./songs";
import { ChildrenSongs, OfferingSongs } from "./types";

const section1 = generate1stSection(weHaveAnAnchor, [
  weHaveAnAnchor,
  kingOfKings,
  amazingGrace
]);

const section2 = generate2ndSection([
  {
    title: "Scripture Reading",
    subtext: "Dan Doebler",
    subjects: [
      {
        title: "Spirit of the Living God",
        isExpandable: true,
        type: "song",
        content: `Spirit of the Living God,
            fall afresh on me
            Spirit of the Living God,
            fall afresh on me
            Melt me, mold me, fill me, use me 
            Spirit of the Living God,
            fall afresh on me`
      },
      {
        title: "Acts 14:19-28",
        isExpandable: true,
        type: "scripture",
        content: `19 Then some Jews came from Antioch and Iconium and won the crowd over. They stoned Paul and dragged him outside the city, thinking he was dead. 20 But after the disciples had gathered around him, he got up and went back into the city. The next day he and Barnabas left for Derbe. 
        The Return to Antioch in Syria
        21 They preached the gospel in that city and won a large number of disciples. Then they returned to Lystra, Iconium and Antioch, 22 strengthening the disciples and encouraging them to remain true to the faith. “We must go through many hardships to enter the kingdom of God,” they said. 23 Paul and Barnabas appointed elders  for them in each church and, with prayer and fasting, committed them to the Lord, in whom they had put their trust. 24 After going through Pisidia, they came into Pamphylia, 25 and when they had preached the word in Perga, they went down to Attalia. 
        26 From Attalia they sailed back to Antioch, where they had been committed to the grace of God for the work they had now completed. 27 On arriving there, they gathered the church together and reported all that God had done through them and how he had opened a door of faith to the Gentiles. 28 And they stayed there a long time with the disciples.`
      }
    ]
  },
  generateMinistryToChildren(
    "Wendy Smith",
    ChildrenSongs.I_AM_SO_GLAD
  ),
  generateHymnOfPreparation(theOldRuggedCross, "hymn"),
  generateSermon(
    "Pastor Nate Hickox",
    "Embracing the Joy and Suffering of God’s Mission"
  )
]);

const section3 = generate3rdSection([
  prayersOfThePeople,
  generateGivingSection(OfferingSongs.GRANT_US_LORD),
  prayerOfDedication
]);

const section4 = generate4thSection([
  generateHymnOfSending(christIsEnough),
  benediction
]);

export const august15Service = [
  section1,
  section2,
  section3,
  section4
];
