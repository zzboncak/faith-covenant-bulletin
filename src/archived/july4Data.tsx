/* eslint-disable no-irregular-whitespace */
import React from "react";
import {
  apostlesCreed,
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
  generateMinistryToChildren,
  generateSermon
} from "../helperFunctions";
import {
  christIsEnough,
  godIsAble,
  howGreatThouArt,
  praiseToTheLordTheAlmighty,
  seeAVictory,
  yourLoveOLord
} from "../songs";
import { ChildrenSongs, SubsectionProps } from "../types";

const section1 = generate1stSection(yourLoveOLord, [
  praiseToTheLordTheAlmighty,
  christIsEnough,
  howGreatThouArt
]);

const scriptureReading: SubsectionProps = {
  title: "Scripture Reading",
  subtext: "Acts 8:1-8, 14-17",
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
      title: "Acts 8:1-8, 14-17",
      isExpandable: true,
      type: "scripture",
      content: `1 And Saul approved of their killing him. 
      The Church Persecuted and Scattered
      On that day a great persecution broke out against the church in Jerusalem, and all except the apostles were scattered throughout Judea and Samaria. 2 Godly men buried Stephen and mourned deeply for him. 3 But Saul began to destroy the church. Going from house to house, he dragged off both men and women and put them in prison. 
      Philip in Samaria
      4 Those who had been scattered preached the word wherever they went. 5 Philip went down to a city in Samaria and proclaimed the Messiah there. 6 When the crowds heard Philip and saw the signs he performed, they all paid close attention to what he said. 7 For with shrieks, impure spirits came out of many, and many who were paralyzed or lame were healed. 8 So there was great joy in that city.
      ...
      14 When the apostles in Jerusalem heard that Samaria had accepted the word of God, they sent Peter and John to Samaria. 15 When they arrived, they prayed for the new believers there that they might receive the Holy Spirit, 16 because the Holy Spirit had not yet come on any of them; they had simply been baptized in the name of the Lord Jesus. 17 Then Peter and John placed their hands on them, and they received the Holy Spirit.`
    }
  ]
};

const section2 = generate2ndSection([
  scriptureReading,
  generateMinistryToChildren(
    "Angela Broman",
    ChildrenSongs.I_AM_SO_GLAD
  ),
  generateHymnOfPreparation(seeAVictory, "song"),
  generateSermon("Pastor Nate Hickox", "The Real Great Power of God")
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
  apostlesCreed,
  prayersOfThePeople,
  offeringDedication,
  prayerOfDedication
]);

const section4 = generate4thSection([
  generateHymnOfSending(godIsAble, "song"),
  benediction
]);

export const july4Service = [section1, section2, section3, section4];
