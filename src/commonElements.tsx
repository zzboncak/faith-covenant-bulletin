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
  subtext: "*Congregation Standing",
  subjects: [
    {
      title: "The Doxology",
      isExpandable: true,
      content: givingContent
    }
  ]
};

export const prayerOfDedication: SubsectionProps = {
  title: "Prayer of Dedication",
  subtext: "*Congregation Standing"
};

export const benediction: SubsectionProps = {
  title: "The Benediction, Greeting, Postlude",
  subtext: "*Congregation Standing"
};

export const communion: SubsectionProps = {
  title: "Holy Communion",
  subjects: [
    {
      title: "Liturgy",
      type: "liturgy",
      isExpandable: true,
      content: `Invitation to Communion
      Leader: The Lord be with you.
      People: And also with you.
      Leader: Lift up your hearts!
      People: We lift them up to the Lord.
      Leader: Let us give thanks to the Lord our God.
      People: It is right for us to give thanks and praise.
      
      Prayer of Thanksgiving
      The Words of Institution
      
      Memorial Acclamation
      Leader: Together we proclaim the mystery of the faith.
      People: Christ has died, Christ is risen, Christ will come again.
      
      Distribution of Bread and Cup
      Leader: Alleluia! Christ our Passover is sacrificed for us!
      People: Therefore let us keep the feast! Alleluia!
      
      The Invitation to Receive
      Prayer of Thanksgiving
      People: Eternal God, heavenly Father, you have graciously accepted us as living members of your Son, our Savior Jesus Christ, and you have fed us with spiritual food in the sacrament of his body and blood. Send us now into the world in peace, and grant us strength and courage to love and serve you with gladness and singleness of heart, through Jesus Christ our Lord. Amen.`
    }
  ]
};

export const niceneCreed: SubsectionProps = {
  title: "The Nicene Creed",
  subtext: "Congregation Standing",
  subjects: [
    {
      title: "Tap to Expand",
      isExpandable: true,
      content: `We believe in one God, the Father, the Almighty, maker of heaven and earth, of all that is, seen and unseen.
    We believe in one Lord, Jesus Christ, the only Son of God, eternally begotten of the Father, God from God, Light from Light, true God from true God, begotten, not made, of one Being with the Father; through him all things were made.
    For us and for our salvation he came down from heaven, was incarnate of the Holy Spirit and the Virgin Mary and became truly human.
    For our sake he was crucified under Pontius Pilate; he suffered death and was buried. On the third day he rose again in accordance with the Scriptures; he ascended into heaven and is seated at the right hand of the Father.
    He will come again in glory to judge the living and the dead, and his kingdom will have no end.
    We believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is worshiped and glorified, who has spoken through the prophets.
    We believe in the one holy catholic and apostolic Church. We acknowledge one baptism for the forgiveness of sins. We look for the resurrection of the dead, and the life of the world to come. Amen.`
    }
  ]
};

export const apostlesCreed: SubsectionProps = {
  title: "The Apostles' Creed",
  subtext: "*Congregation Standing",
  subjects: [
    {
      title: "Tap to Expand",
      isExpandable: true,
      content: `I believe in God, the Father Almighty, maker of heaven and earth;
      And in Jesus Christ his only Son, our Lord; who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, dead, and buried; he descended to the dead.
      On the third day he rose again; he ascended into heaven, and is seated at the right hand of God the Father Almighty; and will come again to judge the living and the dead.
      I believe in the Holy Spirit, the holy Christian church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.`
    }
  ]
};
