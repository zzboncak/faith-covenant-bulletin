/* eslint-disable no-irregular-whitespace */
import {
  benediction,
  niceneCreed,
  offeringDedication,
  prayerOfDedication,
  prayersOfThePeople
} from "../commonElements";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateHymnOfPreparation,
  generateHymnOfSending,
  generateMinistryToChildren,
  generateScriptureReading,
  generateSermon
} from "../helperFunctions";
import {
  allCreaturesOfOurGodAndKing,
  aPsalmOfSorts,
  hereIAmToWorship,
  holyHolyHoly,
  kingOfKings,
  singPriaseToTheFather
} from "../songs";
import { ChildrenSongs } from "../types";

const section1 = generate1stSection(aPsalmOfSorts, [
  allCreaturesOfOurGodAndKing,
  kingOfKings,
  hereIAmToWorship
]);

const section2 = generate2ndSection([
  generateScriptureReading(
    `Peter Speaks to the Onlookers
11 While the man held on to Peter and John, all the people were astonished and came running to them in the place called Solomon’s Colonnade. 12 When Peter saw this, he said to them: “Fellow Israelites, why does this surprise you? Why do you stare at us as if by our own power or godliness we had made this man walk? 13 The God of Abraham, Isaac and Jacob, the God of our fathers, has glorified his servant Jesus. You handed him over to be killed, and you disowned him before Pilate, though he had decided to let him go. 14 You disowned the Holy and Righteous One and asked that a murderer be released to you. 15 You killed the author of life, but God raised him from the dead. We are witnesses of this. 16 By faith in the name of Jesus, this man whom you see and know was made strong. It is Jesus’ name and the faith that comes through him that has completely healed him, as you can all see. 
17 “Now, fellow Israelites, I know that you acted in ignorance, as did your leaders. 18 But this is how God fulfilled what he had foretold through all the prophets, saying that his Messiah would suffer. 19 Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord, 20 and that he may send the Messiah, who has been appointed for you—even Jesus. 21 Heaven must receive him until the time comes for God to restore everything, as he promised long ago through his holy prophets. 22 For Moses said, ‘The Lord your God will raise up for you a prophet like me from among your own people; you must listen to everything he tells you. 23 Anyone who does not listen to him will be completely cut off from their people.’  
24 “Indeed, beginning with Samuel, all the prophets who have spoken have foretold these days. 25 And you are heirs of the prophets and of the covenant God made with your fathers. He said to Abraham, ‘Through your offspring all peoples on earth will be blessed.’  26 When God raised up his servant, he sent him first to you to bless you by turning each of you from your wicked ways.”
`,
    "Acts 3:11-26"
  ),
  generateMinistryToChildren(
    "Wendy Smith",
    ChildrenSongs.JESUS_LOVES_ME
  ),
  generateHymnOfPreparation(holyHolyHoly),
  generateSermon("Pastor Nate Hickox", "The Acts of the Triune God")
]);

const section3 = generate3rdSection([
  niceneCreed,
  prayersOfThePeople,
  offeringDedication,
  prayerOfDedication
]);

const section4 = generate4thSection([
  generateHymnOfSending(singPriaseToTheFather),
  benediction
]);

export const may30Service = [section1, section2, section3, section4];
