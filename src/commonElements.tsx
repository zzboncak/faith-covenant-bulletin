import React from "react";
import { SubsectionProps } from "./types";

export const callToWorship: SubsectionProps = {
  title: "Call to Worship & Invocation Prayer"
};

export const prayersOfThePeople: SubsectionProps = {
  title: "Prayers of the People & the Lord's Prayer",
  subjects: [
    {
      title: "The Lord's Prayer",
      isExpandable: true,
      content: `Our Father, who art in heaven, hallowed by Thy name.
      Thy Kingdom come, Thy will be done on Earth as it is in Heaven.
      Give us this day our daily bread, and forgive us our sins as we forgive those who sin against us.
      And lead us not into temptation, but deliver us from evil.
      For thine is the Kingdom, and the power, and the glory forever.
      Amen.`
    }
  ]
};

const givingContent: JSX.Element = (
  <>
    <a
      href="https://faithecc.breezechms.com/give/online"
      target="_blank"
      rel="noreferrer"
    >
      Give Here
    </a>
    <p>
      Praise God from whom all blessing flow <br />
      Praise Him all creatures here below <br />
      Praise Him above ye heavenly hosts <br />
      Praise Father, Holy Ghost Amen.
    </p>
  </>
);

// need to add the giving link in the content
export const offeringDedication: SubsectionProps = {
  title: "Offering Dedication",
  subjects: [
    {
      title: "The Doxology",
      isExpandable: true,
      content: givingContent
    }
  ]
};

export const prayerOfDedication: SubsectionProps = {
  title: "Prayer of Dedication"
};

export const benediction: SubsectionProps = {
  title: "The Benediction, Greeting, Postlude"
};

export const communion: SubsectionProps = {
  title: "Holy Communion",
  subjects: [
    {
      title: "Liturgy",
      type: "liturgy",
      isExpandable: true,
      content: `Leader: The Lord be with you.
      People: And also with you.
      Leader: Lift up your hearts!
      People: We lift them up to the Lord.
      Leader: Let us give thanks to the Lord our God.
      People: It is right for us to give thanks and praise.`
    }
  ]
};