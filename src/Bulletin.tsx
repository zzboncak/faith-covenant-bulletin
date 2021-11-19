import React from "react";
import { Section } from "./components/section/Section";
import { SectionProps } from "./types";

export const Bulletin: React.FC<{ service: SectionProps[] }> = ({
  service
}) => {
  return (
    <>
      <div className="helper-text-container">
        <p className="helper-text">
          <i>Tap on a section of the service to expand it.</i>
        </p>
      </div>
      {service.map((section, i) => (
        <Section
          key={i}
          title={section.title}
          subsections={section.subsections}
        />
      ))}
    </>
  );
};
