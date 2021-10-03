import {
  benediction,
  communion,
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
  ancientOfDays,
  asWeGatherAtYourTable,
  fromTheInsideOut,
  nowLetUsFromThisTableRise,
  theyllKnowWeAreChristiansByOurLove,
  thisIBelieveCreed
} from "./songs";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

export const october3service: SectionProps[] = [
  generate1stSection(
    { title: "Ancient of Days", isExpandable: false },
    [ancientOfDays, fromTheInsideOut, thisIBelieveCreed]
  ),
  generate2ndSection([
    generateScriptureReading(
      `Acts 21:1–20 (NIV)

      On to Jerusalem
      1 After we had torn ourselves away from them, we put out to sea and sailed straight to Kos. The next day we went to Rhodes and from there to Patara. 2 We found a ship crossing over to Phoenicia, went on board and set sail. 3 After sighting Cyprus and passing to the south of it, we sailed on to Syria. We landed at Tyre, where our ship was to unload its cargo. 4 We sought out the disciples there and stayed with them seven days. Through the Spirit they urged Paul not to go on to Jerusalem. 5 When it was time to leave, we left and continued on our way. All of them, including wives and children, accompanied us out of the city, and there on the beach we knelt to pray. 6 After saying goodbye to each other, we went aboard the ship, and they returned home. 
      7 We continued our voyage from Tyre and landed at Ptolemais, where we greeted the brothers and sisters and stayed with them for a day. 8 Leaving the next day, we reached Caesarea and stayed at the house of Philip the evangelist, one of the Seven. 9 He had four unmarried daughters who prophesied. 
      10 After we had been there a number of days, a prophet named Agabus came down from Judea. 11 Coming over to us, he took Paul’s belt, tied his own hands and feet with it and said, “The Holy Spirit says, ‘In this way the Jewish leaders in Jerusalem will bind the owner of this belt and will hand him over to the Gentiles.’ ” 
      12 When we heard this, we and the people there pleaded with Paul not to go up to Jerusalem. 13 Then Paul answered, “Why are you weeping and breaking my heart? I am ready not only to be bound, but also to die in Jerusalem for the name of the Lord Jesus.” 14 When he would not be dissuaded, we gave up and said, “The Lord’s will be done.” 
      15 After this, we started on our way up to Jerusalem. 16 Some of the disciples from Caesarea accompanied us and brought us to the home of Mnason, where we were to stay. He was a man from Cyprus and one of the early disciples.     
      
      Paul’s Arrival at Jerusalem
      17 When we arrived at Jerusalem, the brothers and sisters received us warmly. 18 The next day Paul and the rest of us went to see James, and all the elders were present. 19 Paul greeted them and reported in detail what God had done among the Gentiles through his ministry. 
      20 When they heard this, they praised God.`,
      "Acts 21:1-20a",
      ScriptureReadingSongs.ANCIENT_WORDS
    ),
    generateMinistryToChildren(
      "Elianna Tuggy",
      ChildrenSongs.JESUS_LOVES_ME
    ),
    generateHymnOfPreparation(
      theyllKnowWeAreChristiansByOurLove,
      "song"
    ),
    generateSermon(
      "Pastor Nate Hickox",
      "Why We Need Christian Friends"
    )
  ]),
  generate3rdSection([
    prayersOfThePeople,
    {
      title: "Communion Hymn",
      subtext: "*Congregation Standing",
      subjects: [asWeGatherAtYourTable]
    },
    communion,
    generateGivingSection(OfferingSongs.DOXOLOGY),
    prayerOfDedication
  ]),
  generate4thSection([
    generateHymnOfSending(nowLetUsFromThisTableRise),
    benediction
  ])
];
