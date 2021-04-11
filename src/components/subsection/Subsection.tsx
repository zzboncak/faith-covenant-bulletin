import React from "react";
import { Subject } from "../subject/Subject";
import { SubsectionProps } from "../../types";
import "./Subsection.css";

export const Subsection: React.FC<SubsectionProps> = ({
  title,
  subjects,
  person
}) => {
  return (
    <div className="subsection">
      <h4>{title}</h4>
      {subjects.map((subject, i) => (
        <Subject
          key={i}
          title={subject.title}
          isExpandable={true}
          content={subject.content}
        />
      ))}
      {person && <p>{person}</p>}
    </div>
  );
};
