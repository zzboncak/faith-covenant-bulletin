import { SubsectionProps, SectionProps } from "./types";

const subsection1: SubsectionProps = {
  title: "Gathering Song",
  subjects: [
    {
      title: "King of Kings",
      isExpandable: true,
      content: `In the darkness we were waiting without hope without light
      Till from Heaven You came running there was mercy in Your eyes
      To fulfil the law and prophets to a virgin came the Word
      From a throne of endless glory to a cradle in the dirt


      Praise the Father praise the Son
      Praise the Spirit three in one
      God of Glory majesty
      Praise forever to the King of kings`
    }
  ]
};

const subsection2: SubsectionProps = {
  title: "Welcome",
  person: "Pastor Nate Hickox",
  subjects: [
    {
      title: "Greet one another",
      isExpandable: false
    }
  ]
};

export const section1: SectionProps = {
  title: "God Gathers Us To Worship",
  subsections: [subsection1, subsection2]
};
