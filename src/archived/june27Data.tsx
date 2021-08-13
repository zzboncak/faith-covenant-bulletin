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
  battleBelong,
  christIsEnough,
  comeAllChristiansBeCommitted,
  cornerstone,
  greatAreYouLord,
  takeMyLifeAndLetItBe
} from "./songs";
import { ChildrenSongs, SubsectionProps } from "./types";

const section1 = generate1stSection(christIsEnough, [
  battleBelong,
  cornerstone,
  greatAreYouLord
]);

const scriptureReading: SubsectionProps = {
  title: "Scripture Reading",
  subtext: "Acts 7:48-60",
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
      title: "Acts 7:48-60",
      isExpandable: true,
      type: "scripture",
      content: `48 “However, the Most High does not live in houses made by human hands. As the prophet says: 
      49 “ ‘Heaven is my throne, and the earth is my footstool. What kind of house will you build for me? says the Lord. Or where will my resting place be? 50 Has not my hand made all these things?’  
      51 “You stiff-necked people! Your hearts and ears are still uncircumcised. You are just like your ancestors: You always resist the Holy Spirit! 52 Was there ever a prophet your ancestors did not persecute? They even killed those who predicted the coming of the Righteous One. And now you have betrayed and murdered him—53 you who have received the law that was given through angels but have not obeyed it.” 
      The Stoning of Stephen
      54 When the members of the Sanhedrin heard this, they were furious and gnashed their teeth at him. 55 But Stephen, full of the Holy Spirit, looked up to heaven and saw the glory of God, and Jesus standing at the right hand of God. 56 “Look,” he said, “I see heaven open and the Son of Man standing at the right hand of God.” 
      57 At this they covered their ears and, yelling at the top of their voices, they all rushed at him, 58 dragged him out of the city and began to stone him. Meanwhile, the witnesses laid their coats at the feet of a young man named Saul. 
      59 While they were stoning him, Stephen prayed, “Lord Jesus, receive my spirit.” 60 Then he fell on his knees and cried out, “Lord, do not hold this sin against them.” When he had said this, he fell asleep.`
    }
  ]
};

const section2 = generate2ndSection([
  scriptureReading,
  generateMinistryToChildren(
    "Wendy Smith",
    ChildrenSongs.I_AM_SO_GLAD
  ),
  generateHymnOfPreparation(comeAllChristiansBeCommitted),
  generateSermon("Rev. John Benson", "This Is About Ordination")
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

const receptionOfNewMembers: SubsectionProps = {
  title: "Reception of New Members",
  subjects: [
    {
      title: "Liturgy",
      type: "liturgy",
      isExpandable: true,
      content: (
        <>
          <p>
            <i>
              Loida Barbosa | Manuel Ramos
              <br />
              Courtney Zboncak | Zack Zboncak
            </i>
          </p>
          <h4>Reception of New Members</h4>
          <p>
            We, the members of this congregation, now welcome you with
            joy into our church family. We pledge to you our love and
            support, our friendship and our prayers, so that together
            we may continue to grow in the knowledge and love of
            God&#39;s Word.
          </p>
        </>
      )
    }
  ]
};

const section4 = generate4thSection([
  receptionOfNewMembers,
  generateHymnOfSending(takeMyLifeAndLetItBe),
  benediction
]);

export const june27Service = [section1, section2, section3, section4];
