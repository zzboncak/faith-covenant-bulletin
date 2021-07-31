/* eslint-disable no-irregular-whitespace */
import React from "react";
import {
  apostlesCreed,
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
  generateHymnOfPreparation,
  generateHymnOfSending,
  generateMinistryToChildren,
  generateSermon
} from "./helperFunctions";
import {
  blessedAssurance,
  greatAreYouLord,
  greatIsThyFaithfulness,
  jesusShallReignWhereerTheSun,
  rejoiceTheLordIsKing
} from "./songs";
import { ChildrenSongs, SubsectionProps } from "./types";

const section1 = generate1stSection(
  {
    title: "Champion",
    isExpandable: false
  },
  [blessedAssurance, greatAreYouLord, greatIsThyFaithfulness]
);

const section2 = generate2ndSection([
  {
    title: "Scripture Reading",
    subtext: "Acts 12:1-24",
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
        title: "Acts 12:1-24",
        isExpandable: true,
        type: "scripture",
        content: `Peter’s Miraculous Escape From Prison
        1 It was about this time that King Herod arrested some who belonged to the church, intending to persecute them. 2 He had James, the brother of John, put to death with the sword. 3 When he saw that this met with approval among the Jews, he proceeded to seize Peter also. This happened during the Festival of Unleavened Bread. 4 After arresting him, he put him in prison, handing him over to be guarded by four squads of four soldiers each. Herod intended to bring him out for public trial after the Passover. 
        5 So Peter was kept in prison, but the church was earnestly praying to God for him. 
        6 The night before Herod was to bring him to trial, Peter was sleeping between two soldiers, bound with two chains, and sentries stood guard at the entrance. 7 Suddenly an angel of the Lord appeared and a light shone in the cell. He struck Peter on the side and woke him up. “Quick, get up!” he said, and the chains fell off Peter’s wrists. 
        8 Then the angel said to him, “Put on your clothes and sandals.” And Peter did so. “Wrap your cloak around you and follow me,” the angel told him. 9 Peter followed him out of the prison, but he had no idea that what the angel was doing was really happening; he thought he was seeing a vision. 10 They passed the first and second guards and came to the iron gate leading to the city. It opened for them by itself, and they went through it. When they had walked the length of one street, suddenly the angel left him. 
        11 Then Peter came to himself and said, “Now I know without a doubt that the Lord has sent his angel and rescued me from Herod’s clutches and from everything the Jewish people were hoping would happen.” 
        12 When this had dawned on him, he went to the house of Mary the mother of John, also called Mark, where many people had gathered and were praying. 13 Peter knocked at the outer entrance, and a servant named Rhoda came to answer the door. 14 When she recognized Peter’s voice, she was so overjoyed she ran back without opening it and exclaimed, “Peter is at the door!” 
        15 “You’re out of your mind,” they told her. When she kept insisting that it was so, they said, “It must be his angel.” 
        16 But Peter kept on knocking, and when they opened the door and saw him, they were astonished. 17 Peter motioned with his hand for them to be quiet and described how the Lord had brought him out of prison. “Tell James and the other brothers and sisters about this,” he said, and then he left for another place. 
        18 In the morning, there was no small commotion among the soldiers as to what had become of Peter. 19 After Herod had a thorough search made for him and did not find him, he cross-examined the guards and ordered that they be executed. 
        Then Herod went from Judea to Caesarea and stayed there. 20 He had been quarreling with the people of Tyre and Sidon; they now joined together and sought an audience with him. After securing the support of Blastus, a trusted personal servant of the king, they asked for peace, because they depended on the king’s country for their food supply. 
        21 On the appointed day Herod, wearing his royal robes, sat on his throne and delivered a public address to the people. 22 They shouted, “This is the voice of a god, not of a man.” 23 Immediately, because Herod did not give praise to God, an angel of the Lord struck him down, and he was eaten by worms and died. 
        24 But the word of God continued to spread and flourish.`
      }
    ]
  },
  generateMinistryToChildren(
    "Angela Broman",
    ChildrenSongs.I_AM_SO_GLAD
  ),
  generateHymnOfPreparation(jesusShallReignWhereerTheSun, "hymn"),
  generateSermon("Filipe Chamy", "Your Kingdom Come")
]);

const givingContent = (
  <>
    <a
      href="https://faithecc.breezechms.com/give/online"
      target="_blank"
      rel="noreferrer"
    >
      Give Here
    </a>
    <p>
      Grant us Lord the grace of giving <br />
      With a spirit large and free <br />
      That ourselves in all our living <br />
      We may offer unto thee
    </p>
  </>
);

const offeringDedication: SubsectionProps = {
  title: "Offering Dedication",
  subtext: "*Congregation Standing",
  subjects: [
    {
      title: "Grant Us, Lord, the Grace of Giving",
      isExpandable: true,
      type: "song",
      content: givingContent
    }
  ]
};

const section3 = generate3rdSection([
  prayersOfThePeople,
  apostlesCreed,
  communion,
  offeringDedication,
  prayerOfDedication
]);

const section4 = generate4thSection([
  generateHymnOfSending(rejoiceTheLordIsKing, "hymn"),
  benediction
]);

export const august1Service = [
  section1,
  section2,
  section3,
  section4
];
