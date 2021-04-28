import React from "react";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateAnnouncements,
  generateMinistryToChildren,
  generateScriptureReading
} from "./helperFunctions";
import { resurrectionPower } from "./songs";
import { SubsectionProps } from "./types";

const gatheringSong: SubsectionProps = {
  title: "Gathering Song",
  subjects: [resurrectionPower]
};

const section1 = generate1stSection([gatheringSong]);

export const may2Service = [section1];
