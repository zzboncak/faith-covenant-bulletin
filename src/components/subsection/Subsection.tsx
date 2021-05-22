import React from "react";
import { Subject } from "../subject/Subject";
import { SubsectionProps } from "../../types";
import "./Subsection.css";

export const Subsection: React.FC<SubsectionProps> = ({
  title,
  subjects,
  subtext
}) => {
  return (
    <article className="subsection">
      <header className="subsection-title">
        <h4>{title}</h4>
        {!!subtext && (
          <span className="subsection-person">{subtext}</span>
        )}
      </header>
      {subjects?.map((subject, i) => (
        <Subject
          key={i}
          title={subject.title}
          isExpandable={subject.isExpandable}
          content={subject.content}
          type={subject.type}
        />
      ))}
    </article>
  );
};
