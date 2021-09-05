import {
  benediction,
  communion,
  niceneCreed,
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
  standInYourLove,
  theWonderfulCross,
  likeARiverGlorious,
  imortalInvisibleGodOnlyWise,
  youAreGodAloneLivingHope
} from "./songs";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

export const september5Service: SectionProps[] = [
  generate1stSection(
    {
      title: "Ancient Words",
      isExpandable: true,
      type: "song",
      content: `Ancient words ever true
      Changing me changing you
      We have come with open hearts
      O let the ancient words impart`
    },
    [standInYourLove, theWonderfulCross, likeARiverGlorious]
  ),
  generate2ndSection([
    generateScriptureReading(
      `Acts 17:16–34 (NIV)
  In Athens
  16 While Paul was waiting for them in Athens, he was greatly distressed to see that the city was full of idols. 17 So he reasoned in the synagogue with both Jews and God-fearing Greeks, as well as in the marketplace day by day with those who happened to be there. 18 A group of Epicurean and Stoic philosophers began to debate with him. Some of them asked, “What is this babbler trying to say?” Others remarked, “He seems to be advocating foreign gods.” They said this because Paul was preaching the good news about Jesus and the resurrection. 19 Then they took him and brought him to a meeting of the Areopagus, where they said to him, “May we know what this new teaching is that you are presenting? 20 You are bringing some strange ideas to our ears, and we would like to know what they mean.” 21 (All the Athenians and the foreigners who lived there spent their time doing nothing but talking about and listening to the latest ideas.) 
  22 Paul then stood up in the meeting of the Areopagus and said: “People of Athens! I see that in every way you are very religious. 23 For as I walked around and looked carefully at your objects of worship, I even found an altar with this inscription: TO AN UNKNOWN GOD. So you are ignorant of the very thing you worship—and this is what I am going to proclaim to you. 
  24 “The God who made the world and everything in it is the Lord of heaven and earth and does not live in temples built by human hands. 25 And he is not served by human hands, as if he needed anything. Rather, he himself gives everyone life and breath and everything else. 26 From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands. 27 God did this so that they would seek him and perhaps reach out for him and find him, though he is not far from any one of us. 28 ‘For in him we live and move and have our being.’  As some of your own poets have said, ‘We are his offspring.’ 
  29 “Therefore since we are God’s offspring, we should not think that the divine being is like gold or silver or stone—an image made by human design and skill. 30 In the past God overlooked such ignorance, but now he commands all people everywhere to repent. 31 For he has set a day when he will judge the world with justice by the man he has appointed. He has given proof of this to everyone by raising him from the dead.” 
  32 When they heard about the resurrection of the dead, some of them sneered, but others said, “We want to hear you again on this subject.” 33 At that, Paul left the Council. 34 Some of the people became followers of Paul and believed. Among them was Dionysius, a member of the Areopagus, also a woman named Damaris, and a number of others.
  `,
      "Acts 17:16-34",
      ScriptureReadingSongs.SPIRIT_OF_THE_LIVING_GOD,
      "Mark Torgerson"
    ),
    generateMinistryToChildren(
      "Ellie and Elianna",
      ChildrenSongs.I_AM_SO_GLAD
    ),
    generateHymnOfPreparation(imortalInvisibleGodOnlyWise),
    generateSermon(
      "Pastor Nate Hickox",
      "4 Basic Ideas of the Christian Faith"
    )
  ]),
  generate3rdSection([
    prayersOfThePeople,
    niceneCreed,
    communion,
    generateGivingSection(OfferingSongs.GRANT_US_LORD),
    prayerOfDedication
  ]),
  generate4thSection([
    generateHymnOfSending(youAreGodAloneLivingHope, "song"),
    benediction
  ])
];
