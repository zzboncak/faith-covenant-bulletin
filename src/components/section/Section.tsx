import React, { useState } from "react";
import { SectionProps } from "../../types";
import { Subsection } from "../subsection/Subsection";
import "./Section.css";

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
      subtext={subsection.subtext}
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
