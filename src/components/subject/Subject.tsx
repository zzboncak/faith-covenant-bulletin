import React, { useState } from "react";
import { SubjectProps } from "../../types";
import "./Subject.css";

export const Subject: React.FC<SubjectProps> = ({
  title,
  content,
  isExpandable,
  type
}) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  let contentArray;
  if (typeof content === "string") {
    contentArray = content
      ?.split(/\n/)
      .map((entry) => entry.trim())
      .map((entry, i) => {
        const boldClass = entry.startsWith("Leader: ") ? " bold" : "";
        const styleClasses =
          type === "scripture" && i === 0 ? " bold italics" : "";
        const paragraphClass = entry !== "" ? " paragraph" : "";
        const classes = [
          boldClass,
          styleClasses,
          paragraphClass
        ].join(" ");
        if (entry === "") {
          return <br />;
        }
        return (
          <p
            key={`${title}-content-${i}`}
            className={`content-line${classes}`}
          >
            {entry}
          </p>
        );
      });
  } else {
    contentArray = content;
  }
  return (
    <>
      <p
        className={`subject-title${isExpandable ? " clickable" : ""}`}
        onClick={() => setExpanded(!isExpanded)}
      >
        {title}
      </p>
      {content && isExpanded && (
        <>
          <div className="subject-content">
            {contentArray}
            <p
              className="collapse"
              onClick={() => setExpanded(!isExpanded)}
            >
              Collapse
            </p>
          </div>
        </>
      )}
    </>
  );
};
