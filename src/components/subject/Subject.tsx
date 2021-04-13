import React, { useState } from "react";
import { SubjectProps } from "../../types";

export const Subject: React.FC<SubjectProps> = ({
  title,
  content,
  isExpandable
}) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <p
        className="subject-title"
        onClick={() => setExpanded(!isExpanded)}
      >
        {title}
      </p>
      {content && isExpanded && (
        <p
          className="subject-content"
          style={{ gridColumn: "1 / span 2" }}
        >
          {content}
        </p>
      )}
    </>
  );
};
