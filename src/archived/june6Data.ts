/* eslint-disable no-irregular-whitespace */
import {
  apostlesCreed,
  benediction,
  communion,
  prayerOfDedication,
  prayersOfThePeople
} from "../commonElements";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateHymnOfPreparation,
  generateSermon
} from "../helperFunctions";
import {
  beThouMyVision,
  everlastingGod,
  seeAVictory,
  theWordOfGodIsAlive,
  youNeverLetGo,
  yourName
} from "../songs";
import { SubsectionProps } from "../types";

const section1 = generate1stSection(seeAVictory, [
  everlastingGod,
  yourName,
  beThouMyVision
]);

const scriptureReading: SubsectionProps = {
  title: "Scripture Reading",
  subtext: "Acts 4:1-22",
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
      title: "Acts 4:1-22",
      isExpandable: true,
      type: "scripture",
      content: `Peter and John Before the Sanhedrin
      1 The priests and the captain of the temple guard and the Sadducees came up to Peter and John while they were speaking to the people. 2 They were greatly disturbed because the apostles were teaching the people, proclaiming in Jesus the resurrection of the dead. 3 They seized Peter and John and, because it was evening, they put them in jail until the next day. 4 But many who heard the message believed; so the number of men who believed grew to about five thousand. 
      5 The next day the rulers, the elders and the teachers of the law met in Jerusalem. 6 Annas the high priest was there, and so were Caiaphas, John, Alexander and others of the high priest’s family. 7 They had Peter and John brought before them and began to question them: “By what power or what name did you do this?” 
      8 Then Peter, filled with the Holy Spirit, said to them: “Rulers and elders of the people! 9 If we are being called to account today for an act of kindness shown to a man who was lame and are being asked how he was healed, 10 then know this, you and all the people of Israel: It is by the name of Jesus Christ of Nazareth, whom you crucified but whom God raised from the dead, that this man stands before you healed. 11 Jesus is 
        “the stone you builders rejected, which has become the cornerstone."  
      12 Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.” 
      13 When they saw the courage of Peter and John and realized that they were unschooled, ordinary men, they were astonished and they took note that these men had been with Jesus. 14 But since they could see the man who had been healed standing there with them, there was nothing they could say. 15 So they ordered them to withdraw from the Sanhedrin and then conferred together. 16 “What are we going to do with these men?” they asked. “Everyone living in Jerusalem knows they have performed a notable sign, and we cannot deny it. 17 But to stop this thing from spreading any further among the people, we must warn them to speak no longer to anyone in this name.” 
      18 Then they called them in again and commanded them not to speak or teach at all in the name of Jesus. 19 But Peter and John replied, “Which is right in God’s eyes: to listen to you, or to him? You be the judges! 20 As for us, we cannot help speaking about what we have seen and heard.” 
      21 After further threats they let them go. They could not decide how to punish them, because all the people were praising God for what had happened. 22 For the man who was miraculously healed was over forty years old.`
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
  generateHymnOfPreparation(theWordOfGodIsAlive),
  generateSermon("Pastor Nate Hickox", "A Courageous Church")
]);

const offeringDedication: SubsectionProps = {
  title: "Offering Dedication",
  subtext: "*Congregation Standing",
  subjects: [
    {
      title: "Grant Us, Lord, the Grace of Giving",
      isExpandable: true,
      type: "song",
      content: `Grant us Lord the grace of giving 
      With a spirit large and free 
      That ourselves in all our living 
      We may offer unto thee`
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

const songOfSending: SubsectionProps = {
  title: "Song of Sending",
  subtext: "*Congregation Standing",
  subjects: [youNeverLetGo]
};

const section4 = generate4thSection([songOfSending, benediction]);

export const june6Service = [section1, section2, section3, section4];
