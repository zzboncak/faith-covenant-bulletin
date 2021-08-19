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
  battleBelong,
  godCreatorOfYourPeople,
  houseOfTheLord,
  noLongerSlaves,
  thankYouGodForSistersBrothers,
  theLionAndTheLamb
} from "./songs";
import { ChildrenSongs, OfferingSongs } from "./types";

const section1 = generate1stSection(houseOfTheLord, [
  battleBelong,
  theLionAndTheLamb,
  noLongerSlaves
]);

const section2 = generate2ndSection([
  {
    title: "Scripture Reading",
    subtext: "Heather Karlson",
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
        title: "Acts 15:1-21",
        isExpandable: true,
        type: "scripture",
        content: `The Council at Jerusalem
        1 Certain people came down from Judea to Antioch and were teaching the believers: “Unless you are circumcised, according to the custom taught by Moses, you cannot be saved.” 2 This brought Paul and Barnabas into sharp dispute and debate with them. So Paul and Barnabas were appointed, along with some other believers, to go up to Jerusalem to see the apostles and elders about this question. 3 The church sent them on their way, and as they traveled through Phoenicia and Samaria, they told how the Gentiles had been converted. This news made all the believers very glad. 4 When they came to Jerusalem, they were welcomed by the church and the apostles and elders, to whom they reported everything God had done through them. 
        5 Then some of the believers who belonged to the party of the Pharisees stood up and said, “The Gentiles must be circumcised and required to keep the law of Moses.” 
        6 The apostles and elders met to consider this question. 7 After much discussion, Peter got up and addressed them: “Brothers, you know that some time ago God made a choice among you that the Gentiles might hear from my lips the message of the gospel and believe. 8 God, who knows the heart, showed that he accepted them by giving the Holy Spirit to them, just as he did to us. 9 He did not discriminate between us and them, for he purified their hearts by faith. 10 Now then, why do you try to test God by putting on the necks of Gentiles a yoke that neither we nor our ancestors have been able to bear? 11 No! We believe it is through the grace of our Lord Jesus that we are saved, just as they are.” 
        12 The whole assembly became silent as they listened to Barnabas and Paul telling about the signs and wonders God had done among the Gentiles through them. 13 When they finished, James spoke up. “Brothers,” he said, “listen to me. 14 Simon has described to us how God first intervened to choose a people for his name from the Gentiles. 15 The words of the prophets are in agreement with this, as it is written: 
        
              16 “ ‘After this I will return 
                 and rebuild David’s fallen tent. 
                 Its ruins I will rebuild, 
                 and I will restore it, 
              17 that the rest of mankind may seek the Lord, 
                 even all the Gentiles who bear my name, 
                 says the Lord, who does these things’ — 
                 18      things known from long ago.  
        
        19 “It is my judgment, therefore, that we should not make it difficult for the Gentiles who are turning to God. 20 Instead we should write to them, telling them to abstain from food polluted by idols, from sexual immorality, from the meat of strangled animals and from blood. 21 For the law of Moses has been preached in every city from the earliest times and is read in the synagogues on every Sabbath.”`
      }
    ]
  },
  generateMinistryToChildren(
    "Wendy Smith",
    ChildrenSongs.I_AM_SO_GLAD
  ),
  generateHymnOfPreparation(godCreatorOfYourPeople),
  generateSermon(
    "Pastor Nate Hickox",
    "The Church Meeting that Changed the World"
  )
]);

const section3 = generate3rdSection([
  prayersOfThePeople,
  generateGivingSection(OfferingSongs.GRANT_US_LORD),
  prayerOfDedication
]);

const section4 = generate4thSection([
  generateHymnOfSending(thankYouGodForSistersBrothers),
  benediction
]);
export const august22Service = [
  section1,
  section2,
  section3,
  section4
];
