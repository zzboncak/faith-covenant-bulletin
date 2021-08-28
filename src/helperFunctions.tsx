import React from "react";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps,
  SubjectProps,
  SubsectionProps
} from "./types";
import { callToWorship } from "./commonElements";

export function generateMinistryToChildren(
  subtext: string,
  introSong: ChildrenSongs,
  isExpandable = true
): SubsectionProps {
  let song: SubjectProps;

  switch (introSong) {
    case ChildrenSongs.JESUS_LOVES_ME:
      song = {
        title: "Jesus Loves Me",
        isExpandable,
        content: isExpandable
          ? `Jesus loves me this I know for the Bible tells me so.
        Little ones to Him belong, they are weak but He is strong.
        Yes, Jesus loves me! Yes, Jesus loves me!
        Yes, Jesus loves me! The Bible tells me so.`
          : undefined
      };
      break;
    case ChildrenSongs.I_AM_SO_GLAD:
      song = {
        title: "I Am So Glad That Our Father in Heaven",
        isExpandable,
        type: "song",
        content: isExpandable
          ? `I am so glad that our Father in heaven 
        Tells of His love in the book
        He has giv'n 
        Wonderful things in the Bible I see 
        This is the dearest
        that Jesus loves me
  
        I am so glad that Jesus loves me 
        Jesus loves me
        Jesus loves me
        I am so glad that Jesus loves me 
        Jesus loves even me`
          : undefined
      };
      break;
  }

  const ministryToChildren: SubsectionProps = {
    title: "Ministry to Children",
    subtext,
    subjects: [song]
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
  songToSing: ScriptureReadingSongs,
  subtext?: string
): SubsectionProps {
  let song: SubjectProps;
  switch (songToSing) {
    case ScriptureReadingSongs.SPIRIT_OF_THE_LIVING_GOD:
      song = {
        title: "Spirit of the Living God",
        isExpandable: true,
        type: "song",
        content: `Spirit of the Living God,
              fall afresh on me
              Spirit of the Living God,
              fall afresh on me
              Melt me, mold me, fill me, use me 
              Spirit of the Living God,
              fall afresh on me`
      };
      break;
    case ScriptureReadingSongs.THY_WORD:
      song = {
        title: "Thy Word",
        isExpandable: true,
        type: "song",
        content: `Thy Word is a lamp unto my feet
        and a light unto my path
        
        Thy Word is a lamp unto my feet
        and a light unto my path`
      };
      break;
  }
  const scriptureReading: SubsectionProps = {
    title: "Scripture Reading",
    subtext,
    subjects: [
      song,
      {
        title: reference,
        isExpandable: true,
        type: "scripture",
        content: passage
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
  hymn: SubjectProps,
  type: "song" | "hymn" = "hymn"
): SubsectionProps {
  return {
    title: `${type === "hymn" ? "Hymn" : "Song"} of Preparation`,
    subtext: "*Congregation Standing",
    subjects: [hymn]
  };
}

export function generateHymnOfSending(
  hymn: SubjectProps,
  type: "song" | "hymn" = "hymn"
): SubsectionProps {
  return {
    title: `${type === "hymn" ? "Hymn" : "Song"} of Sending`,
    subtext: "*Congregation Standing",
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
    subtext: "*Congregation Standing",
    subjects: songs
  };
}

export function generateGivingSection(
  song: OfferingSongs
): SubsectionProps {
  const content =
    song === OfferingSongs.DOXOLOGY ? (
      <p>
        Praise God from whom all blessing flow <br />
        Praise Him all creatures here below <br />
        Praise Him above ye heavenly hosts <br />
        Praise Father, Holy Ghost Amen.
      </p>
    ) : song === OfferingSongs.GRANT_US_LORD ? (
      <p>
        Grant us Lord the grace of giving <br />
        With a spirit large and free <br />
        That ourselves in all our living <br />
        We may offer unto thee
      </p>
    ) : undefined;
  const sectionContent = (
    <>
      <a
        href="https://faithecc.breezechms.com/give/online"
        target="_blank"
        rel="noreferrer"
      >
        Give Here
      </a>
      {content}
    </>
  );

  return {
    title: "Offering Dedication",
    subtext: "*Congregation Standing",
    subjects: [
      {
        title: song,
        isExpandable: true,
        type: "song",
        content: sectionContent
      }
    ]
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
