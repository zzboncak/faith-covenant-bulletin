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
  allMySinsHaveBeenForgiven,
  atTheCrossLoveRanRed,
  greatIsThyFaithfulness,
  kingOfKings,
  manOfSorrows
} from "./songs";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

export const september26service: SectionProps[] = [
  generate1stSection(
    {
      title: "Here I Bow",
      isExpandable: false
    },
    [manOfSorrows, kingOfKings, greatIsThyFaithfulness],
    [
      {
        title: "Child Dedication",
        subjects: [
          { title: "David Huttenlock", isExpandable: false },
          { title: "Harrison Reimers", isExpandable: false }
        ]
      }
    ]
  ),
  generate2ndSection([
    generateScriptureReading(
      `Acts 20:17–37 (NIV)
      17 From Miletus, Paul sent to Ephesus for the elders of the church. 18 When they arrived, he said to them: “You know how I lived the whole time I was with you, from the first day I came into the province of Asia. 19 I served the Lord with great humility and with tears and in the midst of severe testing by the plots of my Jewish opponents. 20 You know that I have not hesitated to preach anything that would be helpful to you but have taught you publicly and from house to house. 21 I have declared to both Jews and Greeks that they must turn to God in repentance and have faith in our Lord Jesus. 
      22 “And now, compelled by the Spirit, I am going to Jerusalem, not knowing what will happen to me there. 23 I only know that in every city the Holy Spirit warns me that prison and hardships are facing me. 24 However, I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me—the task of testifying to the good news of God’s grace. 
      25 “Now I know that none of you among whom I have gone about preaching the kingdom will ever see me again. 26 Therefore, I declare to you today that I am innocent of the blood of any of you. 27 For I have not hesitated to proclaim to you the whole will of God. 28 Keep watch over yourselves and all the flock of which the Holy Spirit has made you overseers. Be shepherds of the church of God,  which he bought with his own blood.  29 I know that after I leave, savage wolves will come in among you and will not spare the flock. 30 Even from your own number men will arise and distort the truth in order to draw away disciples after them. 31 So be on your guard! Remember that for three years I never stopped warning each of you night and day with tears. 
      32 “Now I commit you to God and to the word of his grace, which can build you up and give you an inheritance among all those who are sanctified. 33 I have not coveted anyone’s silver or gold or clothing. 34 You yourselves know that these hands of mine have supplied my own needs and the needs of my companions. 35 In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: ‘It is more blessed to give than to receive.’ ” 
      36 When Paul had finished speaking, he knelt down with all of them and prayed. 37 They all wept as they embraced him and kissed him.`,
      "Acts 20:17-37",
      ScriptureReadingSongs.ANCIENT_WORDS,
      "Eliza Stiles"
    ),
    generateMinistryToChildren(
      "Dacia & Elianna",
      ChildrenSongs.JESUS_LOVES_ME
    ),
    generateHymnOfPreparation(allMySinsHaveBeenForgiven),
    generateSermon("Pastor Nate Hickox", "")
  ]),
  generate3rdSection([
    prayersOfThePeople,
    generateGivingSection(OfferingSongs.DOXOLOGY),
    prayerOfDedication
  ]),
  generate4thSection([
    generateHymnOfSending(atTheCrossLoveRanRed, "song", false),
    benediction
  ])
];
