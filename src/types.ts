export type SubjectProps = {
  title: string;
  isExpandable: boolean;
  content?: string;
};

export type SubsectionProps = {
  title: string;
  subjects: SubjectProps[];
  person?: string;
};

export type SectionProps = {
  title: string;
  subsections: SubsectionProps[];
};
