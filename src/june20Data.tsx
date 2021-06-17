/* eslint-disable no-irregular-whitespace */
import React from "react";
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
  generateHymnOfPreparation,
  generateHymnOfSending,
  generateSermon
} from "./helperFunctions";
import {
  comeNowIsTheTimeToWorship,
  imGonnaLiveSoGodCanUseMe,
  iSurrenderAll,
  jesusSonOfGod,
  makeMeAServant,
  youreWorthyOfMyPraise
} from "./songs";
import { SubsectionProps } from "./types";

const section1 = generate1stSection(comeNowIsTheTimeToWorship, [
  jesusSonOfGod,
  youreWorthyOfMyPraise,
  iSurrenderAll
]);

const scriptureReading: SubsectionProps = {
  title: "Scripture Reading",
  subtext: "Rita Christensen",
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
      title: "Acts 6:1-15",
      isExpandable: true,
      type: "scripture",
      content: `The Choosing of the Seven
      1 In those days when the number of disciples was increasing, the Hellenistic Jews  among them complained against the Hebraic Jews because their widows were being overlooked in the daily distribution of food. 2 So the Twelve gathered all the disciples together and said, “It would not be right for us to neglect the ministry of the word of God in order to wait on tables. 3 Brothers and sisters, choose seven men from among you who are known to be full of the Spirit and wisdom. We will turn this responsibility over to them 4 and will give our attention to prayer and the ministry of the word.” 
      5 This proposal pleased the whole group. They chose Stephen, a man full of faith and of the Holy Spirit; also Philip, Procorus, Nicanor, Timon, Parmenas, and Nicolas from Antioch, a convert to Judaism. 6 They presented these men to the apostles, who prayed and laid their hands on them. 
      7 So the word of God spread. The number of disciples in Jerusalem increased rapidly, and a large number of priests became obedient to the faith. 
      Stephen Seized
      8 Now Stephen, a man full of God’s grace and power, performed great wonders and signs among the people. 9 Opposition arose, however, from members of the Synagogue of the Freedmen (as it was called)—Jews of Cyrene and Alexandria as well as the provinces of Cilicia and Asia—who began to argue with Stephen. 10 But they could not stand up against the wisdom the Spirit gave him as he spoke. 
      11 Then they secretly persuaded some men to say, “We have heard Stephen speak blasphemous words against Moses and against God.” 
      12 So they stirred up the people and the elders and the teachers of the law. They seized Stephen and brought him before the Sanhedrin. 13 They produced false witnesses, who testified, “This fellow never stops speaking against this holy place and against the law. 14 For we have heard him say that this Jesus of Nazareth will destroy this place and change the customs Moses handed down to us.” 
      15 All who were sitting in the Sanhedrin looked intently at Stephen, and they saw that his face was like the face of an angel.`
    }
  ]
};

const ministryToChildren: SubsectionProps = {
  title: "Ministry To Children",
  subtext: "Angela Broman",
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
  generateHymnOfPreparation(makeMeAServant),
  generateSermon("Pastor Nate Hickox", "Pick Up the Towel!")
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
  generateHymnOfSending(imGonnaLiveSoGodCanUseMe),
  benediction
]);

export const june20Service = [section1, section2, section3, section4];
