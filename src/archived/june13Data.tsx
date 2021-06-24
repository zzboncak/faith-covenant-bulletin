/* eslint-disable no-irregular-whitespace */
import React from "react";
import {
  benediction,
  prayerOfDedication,
  prayersOfThePeople
} from "../commonElements";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateHymnOfPreparation,
  generateHymnOfSending,
  generateSermon
} from "../helperFunctions";
import {
  buildMyLife,
  fillTheEarthWithMusic,
  iWillFollow,
  oceans,
  praiseHimPraiseHim,
  unstoppableGod
} from "../songs";
import { SubsectionProps } from "../types";

const section1 = generate1stSection(unstoppableGod, [
  iWillFollow,
  oceans,
  buildMyLife
]);

const scriptureReading: SubsectionProps = {
  title: "Scripture Reading",
  subtext: "Acts 5:17-41",
  subjects: [
    {
      title: "Spirit of the Living God",
      isExpandable: true,
      type: "song",
      content: `Spirit of the Living God,
      fall afresh on me
      Spirit of the Living God,
      fall afresh on me
      Melt me, mold me, fill me, use me Spirit of the Living God,
      fall afresh on me`
    },
    {
      title: "Acts 5:17-41",
      isExpandable: true,
      type: "scripture",
      content: `The Apostles Persecuted
      17 Then the high priest and all his associates, who were members of the party of the Sadducees, were filled with jealousy. 18 They arrested the apostles and put them in the public jail. 19 But during the night an angel of the Lord opened the doors of the jail and brought them out. 20 “Go, stand in the temple courts,” he said, “and tell the people all about this new life.” 
      21 At daybreak they entered the temple courts, as they had been told, and began to teach the people. 
      When the high priest and his associates arrived, they called together the Sanhedrin—the full assembly of the elders of Israel—and sent to the jail for the apostles. 22 But on arriving at the jail, the officers did not find them there. So they went back and reported, 23 “We found the jail securely locked, with the guards standing at the doors; but when we opened them, we found no one inside.” 24 On hearing this report, the captain of the temple guard and the chief priests were at a loss, wondering what this might lead to. 
      25 Then someone came and said, “Look! The men you put in jail are standing in the temple courts teaching the people.” 26 At that, the captain went with his officers and brought the apostles. They did not use force, because they feared that the people would stone them. 
      27 The apostles were brought in and made to appear before the Sanhedrin to be questioned by the high priest. 28 “We gave you strict orders not to teach in this name,” he said. “Yet you have filled Jerusalem with your teaching and are determined to make us guilty of this man’s blood.” 
      29 Peter and the other apostles replied: “We must obey God rather than human beings! 30 The God of our ancestors raised Jesus from the dead—whom you killed by hanging him on a cross. 31 God exalted him to his own right hand as Prince and Savior that he might bring Israel to repentance and forgive their sins. 32 We are witnesses of these things, and so is the Holy Spirit, whom God has given to those who obey him.” 
      33 When they heard this, they were furious and wanted to put them to death. 34 But a Pharisee named Gamaliel, a teacher of the law, who was honored by all the people, stood up in the Sanhedrin and ordered that the men be put outside for a little while. 35 Then he addressed the Sanhedrin: “Men of Israel, consider carefully what you intend to do to these men. 36 Some time ago Theudas appeared, claiming to be somebody, and about four hundred men rallied to him. He was killed, all his followers were dispersed, and it all came to nothing. 37 After him, Judas the Galilean appeared in the days of the census and led a band of people in revolt. He too was killed, and all his followers were scattered. 38 Therefore, in the present case I advise you: Leave these men alone! Let them go! For if their purpose or activity is of human origin, it will fail. 39 But if it is from God, you will not be able to stop these men; you will only find yourselves fighting against God.” 
      40 His speech persuaded them. They called the apostles in and had them flogged. Then they ordered them not to speak in the name of Jesus, and let them go. 
      41 The apostles left the Sanhedrin, rejoicing because they had been counted worthy of suffering disgrace for the Name.`
    }
  ]
};

const ministryToChildren: SubsectionProps = {
  title: "Ministry To Children",
  subtext: "Wendy Smith",
  subjects: [
    {
      title: "I Am So Glad That Our Father in Heaven",
      isExpandable: true,
      type: "song",
      content: `I am so glad that our Father in heaven 
      Tells of His love in the book
      He has giv'n 
      Wonderful things in the Bible I see 
      This is the dearest
      that Jesus loves me

      I am so glad that Jesus loves me 
      Jesus loves me
      Jesus loves me
      I am so glad that Jesus loves me 
      Jesus loves even me`
    }
  ]
};

const section2 = generate2ndSection([
  scriptureReading,
  ministryToChildren,
  generateHymnOfPreparation(fillTheEarthWithMusic),
  generateSermon("Peter Smith", "Freed to Share")
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
  offeringDedication,
  prayerOfDedication
]);

const section4 = generate4thSection([
  generateHymnOfSending(praiseHimPraiseHim),
  benediction
]);

export const june13Service = [section1, section2, section3, section4];
