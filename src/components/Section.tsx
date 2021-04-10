import React, { useState } from "react";

/**
 * A Section should be collapsable
 * A Sections main title should always be visible
 * When the title is clicked, the rest of the sub-sections are expanded
 * A Section contains other elements of the service
 * Some of those (like songs) may also be collapsable
 */
type SectionProps = {
  title: string;
};

export const Section: React.FC<SectionProps> = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <section className="section">
      <h2
        className="section-title"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
      </h2>
      {isExpanded && <div>I am more content!</div>}
    </section>
  );
};
