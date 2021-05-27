import React from "react";
import { SectionProps, SubjectProps, SubsectionProps } from "./types";
import { callToWorship } from "./commonElements";

export function generateMinistryToChildren(
  subtext: string
): SubsectionProps {
  const ministryToChildren: SubsectionProps = {
    title: "Ministry to Children",
    subtext,
    subjects: [
      {
        title: "Jesus Loves Me",
        isExpandable: true,
        content: `Jesus loves me this I know for the Bible tells me so.
        Little ones to Him belong, they are weak but He is strong.
        Yes, Jesus loves me! Yes, Jesus loves me!
        Yes, Jesus loves me! The Bible tells me so.`
      }
    ]
  };

  return ministryToChildren;
}

export function generateSermon(
  subtext: string,
  title: string
): SubsectionProps {
  return {
    title: "Sermon",
    subtext,
    subjects: [
      {
        title,
        isExpandable: false
      }
    ]
  };
}

export function generateScriptureReading(
  passage: string,
  reference: string,
  subtext?: string
): SubsectionProps {
  const scriptureReading: SubsectionProps = {
    title: "Scripture Reading",
    subtext,
    subjects: [
      {
        title: reference,
        isExpandable: true,
        type: "scripture",
        content: `Thy Word is a lamp unto my feet and a light unto my path
        ${passage}
        ${reference}`
      }
    ]
  };

  return scriptureReading;
}

export function generateAnnouncements(
  announcements: (string | JSX.Element)[]
): SubsectionProps {
  let content: string | JSX.Element = "";
  if (typeof announcements[0] === "string") {
    announcements.forEach(
      (announcement) =>
        (content = (content as string) + announcement + "\n")
    );
  } else {
    content = <>{announcements as JSX.Element[]}</>;
  }
  const announcementsSection: SubsectionProps = {
    title: "Announcements",
    subjects: [
      {
        title: "Click here to see",
        isExpandable: true,
        content
      }
    ]
  };

  return announcementsSection;
}

export function generateHymnOfPreparation(
  hymn: SubjectProps
): SubsectionProps {
  return {
    title: "Hymn of Preparation",
    subtext: "Congregation Standing",
    subjects: [hymn]
  };
}

export function generateHymnOfSending(
  hymn: SubjectProps
): SubsectionProps {
  return {
    title: "Hymn of Sending",
    subtext: "Congregation Standing",
    subjects: [hymn]
  };
}

function generateGatheringSong(song: SubjectProps): SubsectionProps {
  return {
    title: "Gathering Song",
    subjects: [song]
  };
}

function generateWorshipSet(songs: SubjectProps[]): SubsectionProps {
  return {
    title: "Songs of Worship",
    subtext: "Congregation Standing",
    subjects: songs
  };
}

/**
 *
 * @param gatheringSong a single song for the Gather to Worship section
 * @param worshipSongs an array of songs for the Worship Songs section
 * @returns the 1st section of a Faith Covenant Service
 */
export function generate1stSection(
  gatheringSong: SubjectProps,
  worshipSongs: SubjectProps[]
): SectionProps {
  const section1: SectionProps = {
    title: "God Gathers Us To Worship",
    subsections: [
      generateGatheringSong(gatheringSong),
      callToWorship,
      generateWorshipSet(worshipSongs)
    ]
  };
  return section1;
}

export function generate2ndSection(
  subsections: SubsectionProps[]
): SectionProps {
  const section2: SectionProps = {
    title: "God Speaks to Us Through His Word",
    subsections
  };
  return section2;
}

export function generate3rdSection(
  subsections: SubsectionProps[]
): SectionProps {
  const section3: SectionProps = {
    title: "We Respond to God",
    subsections
  };
  return section3;
}

export function generate4thSection(
  subsections: SubsectionProps[]
): SectionProps {
  const section4: SectionProps = {
    title: "God Sends Us Out",
    subsections
  };
  return section4;
}
