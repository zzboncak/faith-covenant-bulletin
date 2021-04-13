import React, { useState } from "react";
import { SectionProps } from "../../types";
import { Subsection } from "../subsection/Subsection";
import "./Section.css";

/**
 * A Section should be collapsable
 * A Sections main title should always be visible
 * When the title is clicked, the rest of the sub-sections are expanded
 * A Section contains other elements of the service
 * Some of those (like songs) may also be collapsable
 */
export const Section: React.FC<SectionProps> = ({
  title,
  subsections
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const content = subsections.map((subsection, i) => (
    <Subsection
      key={i}
      title={subsection.title}
      subjects={subsection.subjects}
      person={subsection.person}
    />
  ));
  return (
    <section className="section">
      <h2
        className="section-title"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
      </h2>
      {isExpanded && (
        <>
          {content}
          <p
            className="collapse"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Collapse Section
          </p>
        </>
      )}
    </section>
  );
};
