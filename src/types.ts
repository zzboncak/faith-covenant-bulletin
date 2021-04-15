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
  person?: string;
};

export type SectionProps = {
  title: string;
  subsections: SubsectionProps[];
};
