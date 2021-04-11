import { SubsectionProps, SectionProps } from "./types";

const subsection1: SubsectionProps = {
  title: "Gathering Song",
  subjects: [
    {
      title: "King of Kings",
      isExpandable: false,
      content:
        "In the darkness we were waiting without hope without light. Till from Heaven You came running there was mercy in Your eyes. To fulfil the law and prophets to a virgin came the Word. From a throne of endless glory to a cradle in the dirt."
    }
  ]
};

export const section1: SectionProps = {
  title: "God Gathers Us To Worship",
  subsections: [subsection1]
};
