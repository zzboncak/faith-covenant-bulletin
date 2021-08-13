type SubjectTypes = "song" | "scripture" | "sermon" | "liturgy";

export type SubjectProps = {
  title: string;
  isExpandable: boolean;
  content?: string | JSX.Element;
  type?: SubjectTypes;
};

export type SubsectionProps = {
  title: string;
  subjects?: SubjectProps[];
  subtext?: string;
};

export type SectionProps = {
  title: string;
  subsections: SubsectionProps[];
};

export enum ChildrenSongs {
  JESUS_LOVES_ME = "Jesus loves me",
  I_AM_SO_GLAD = "I Am So Glad That Our Father"
}

export enum OfferingSongs {
  DOXOLOGY = "Doxology",
  GRANT_US_LORD = "Grant Us, Lord, the Grace of Giving"
}
