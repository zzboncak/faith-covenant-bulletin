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
      <div className="subsection-title">
        <h4>{title}</h4>
        {!!person && (
          <span className="subsection-person">{person}</span>
        )}
      </div>
      {subjects?.map((subject, i) => (
        <Subject
          key={i}
          title={subject.title}
          isExpandable={true}
          content={subject.content}
          type={subject.type}
        />
      ))}
    </div>
  );
};
