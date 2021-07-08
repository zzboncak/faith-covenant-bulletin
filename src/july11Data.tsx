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
  generateMinistryToChildren,
  generateSermon
} from "./helperFunctions";
import {
  beUntoYourName,
  hisMercyIsMore,
  iWillSingOfMyRedeemer,
  iWillSingTheWondrousStory,
  livingHope,
  youAloneCanRescue
} from "./songs";
import { ChildrenSongs, SubsectionProps } from "./types";

const section1 = generate1stSection(youAloneCanRescue, [
  hisMercyIsMore,
  beUntoYourName,
  livingHope
]);

const scriptureReading: SubsectionProps = {
  title: "Scripture Reading",
  subtext: "Acts 9",
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
      title: "Acts 9",
      isExpandable: true,
      type: "scripture",
      content: `1 Meanwhile, Saul was still breathing out murderous threats against the Lord’s disciples. He went to the high priest 2 and asked him for letters to the synagogues in Damascus, so that if he found any there who belonged to the Way, whether men or women, he might take them as prisoners to Jerusalem. 3 As he neared Damascus on his journey, suddenly a light from heaven flashed around him. 4 He fell to the ground and heard a voice say to him, “Saul, Saul, why do you persecute me?” 
      5 “Who are you, Lord?” Saul asked. 
      “I am Jesus, whom you are persecuting,” he replied. 6 “Now get up and go into the city, and you will be told what you must do.” 
      7 The men traveling with Saul stood there speechless; they heard the sound but did not see anyone. 8 Saul got up from the ground, but when he opened his eyes he could see nothing. So they led him by the hand into Damascus. 9 For three days he was blind, and did not eat or drink anything. 
      10 In Damascus there was a disciple named Ananias. The Lord called to him in a vision, “Ananias!” 
      “Yes, Lord,” he answered. 
      11 The Lord told him, “Go to the house of Judas on Straight Street and ask for a man from Tarsus named Saul, for he is praying. 12 In a vision he has seen a man named Ananias come and place his hands on him to restore his sight.” 
      13 “Lord,” Ananias answered, “I have heard many reports about this man and all the harm he has done to your holy people in Jerusalem. 14 And he has come here with authority from the chief priests to arrest all who call on your name.” 
      15 But the Lord said to Ananias, “Go! This man is my chosen instrument to proclaim my name to the Gentiles and their kings and to the people of Israel. 16 I will show him how much he must suffer for my name.” 
      17 Then Ananias went to the house and entered it. Placing his hands on Saul, he said, “Brother Saul, the Lord—Jesus, who appeared to you on the road as you were coming here—has sent me so that you may see again and be filled with the Holy Spirit.” 18 Immediately, something like scales fell from Saul’s eyes, and he could see again. He got up and was baptized, 19 and after taking some food, he regained his strength. 
      Saul in Damascus and Jerusalem
      Saul spent several days with the disciples in Damascus. 20 At once he began to preach in the synagogues that Jesus is the Son of God. 21 All those who heard him were astonished and asked, “Isn’t he the man who raised havoc in Jerusalem among those who call on this name? And hasn’t he come here to take them as prisoners to the chief priests?” 22 Yet Saul grew more and more powerful and baffled the Jews living in Damascus by proving that Jesus is the Messiah. 
      23 After many days had gone by, there was a conspiracy among the Jews to kill him, 24 but Saul learned of their plan. Day and night they kept close watch on the city gates in order to kill him. 25 But his followers took him by night and lowered him in a basket through an opening in the wall. 
      26 When he came to Jerusalem, he tried to join the disciples, but they were all afraid of him, not believing that he really was a disciple. 27 But Barnabas took him and brought him to the apostles. He told them how Saul on his journey had seen the Lord and that the Lord had spoken to him, and how in Damascus he had preached fearlessly in the name of Jesus. 28 So Saul stayed with them and moved about freely in Jerusalem, speaking boldly in the name of the Lord. 29 He talked and debated with the Hellenistic Jews,  but they tried to kill him. 30 When the believers learned of this, they took him down to Caesarea and sent him off to Tarsus. 
      31 Then the church throughout Judea, Galilee and Samaria enjoyed a time of peace and was strengthened. Living in the fear of the Lord and encouraged by the Holy Spirit, it increased in numbers. 
      Aeneas and Dorcas
      32 As Peter traveled about the country, he went to visit the Lord’s people who lived in Lydda. 33 There he found a man named Aeneas, who was paralyzed and had been bedridden for eight years. 34 “Aeneas,” Peter said to him, “Jesus Christ heals you. Get up and roll up your mat.” Immediately Aeneas got up. 35 All those who lived in Lydda and Sharon saw him and turned to the Lord. 
      36 In Joppa there was a disciple named Tabitha (in Greek her name is Dorcas); she was always doing good and helping the poor. 37 About that time she became sick and died, and her body was washed and placed in an upstairs room. 38 Lydda was near Joppa; so when the disciples heard that Peter was in Lydda, they sent two men to him and urged him, “Please come at once!” 
      39 Peter went with them, and when he arrived he was taken upstairs to the room. All the widows stood around him, crying and showing him the robes and other clothing that Dorcas had made while she was still with them. 
      40 Peter sent them all out of the room; then he got down on his knees and prayed. Turning toward the dead woman, he said, “Tabitha, get up.” She opened her eyes, and seeing Peter she sat up. 41 He took her by the hand and helped her to her feet. Then he called for the believers, especially the widows, and presented her to them alive. 42 This became known all over Joppa, and many people believed in the Lord. 43 Peter stayed in Joppa for some time with a tanner named Simon.`
    }
  ]
};

const section2 = generate2ndSection([
  scriptureReading,
  generateMinistryToChildren(
    "Wendy Smith",
    ChildrenSongs.I_AM_SO_GLAD
  ),
  generateHymnOfPreparation(iWillSingTheWondrousStory),
  generateSermon("Pastor Nate Hickox", "")
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
  generateHymnOfSending(iWillSingOfMyRedeemer, "song"),
  benediction
]);

export const july11Service = [section1, section2, section3, section4];
