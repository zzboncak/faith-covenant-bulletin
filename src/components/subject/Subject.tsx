import React, { useState } from "react";
import { SubjectProps } from "../../types";

export const Subject: React.FC<SubjectProps> = ({
  title,
  content,
  isExpandable
}) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <div onClick={() => setExpanded(!isExpanded)}>
      I am a subject {title}
      <br />
      {content && isExpanded && content}
    </div>
  );
};
