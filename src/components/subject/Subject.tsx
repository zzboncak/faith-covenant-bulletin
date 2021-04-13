import React, { useState } from "react";
import { SubjectProps } from "../../types";
import "./Subject.css";

export const Subject: React.FC<SubjectProps> = ({
  title,
  content
}) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const contentArray = content
    ?.split(/\n/)
    .map((entry) => entry.trim())
    .map((entry, i) => (
      <p key={`${title}-content-${i}`} className="content-line">
        {entry}
      </p>
    ));
  console.log("readableContent", contentArray);
  return (
    <>
      <p
        className="subject-title"
        onClick={() => setExpanded(!isExpanded)}
      >
        {title}
      </p>
      {content && isExpanded && (
        <div className="subject-content">{contentArray}</div>
      )}
    </>
  );
};
