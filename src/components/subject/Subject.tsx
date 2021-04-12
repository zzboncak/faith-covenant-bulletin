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
      <p>{title}</p>
      {content && isExpanded && content}
    </div>
  );
};
