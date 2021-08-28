import {
  benediction,
  prayerOfDedication,
  prayersOfThePeople
} from "./commonElements";
import {
  generate1stSection,
  generate2ndSection,
  generate3rdSection,
  generate4thSection,
  generateGivingSection,
  generateHymnOfPreparation,
  generateHymnOfSending,
  generateMinistryToChildren,
  generateScriptureReading,
  generateSermon
} from "./helperFunctions";
import {
  andCanItBe,
  breakEveryChain,
  mightyToSave,
  resurrectionPower,
  stronger,
  thereIsARedeemer
} from "./songs";
import {
  ChildrenSongs,
  OfferingSongs,
  ScriptureReadingSongs,
  SectionProps
} from "./types";

export const august29Service: SectionProps[] = [
  generate1stSection(breakEveryChain, [
    resurrectionPower,
    stronger,
    thereIsARedeemer
  ]),
  generate2ndSection([
    generateScriptureReading(
      `Acts 16:12–34 (NIV)
      12 From there we traveled to Philippi, a Roman colony and the leading city of that district of Macedonia. And we stayed there several days. 
      13 On the Sabbath we went outside the city gate to the river, where we expected to find a place of prayer. We sat down and began to speak to the women who had gathered there. 14 One of those listening was a woman from the city of Thyatira named Lydia, a dealer in purple cloth. She was a worshiper of God. The Lord opened her heart to respond to Paul’s message. 15 When she and the members of her household were baptized, she invited us to her home. “If you consider me a believer in the Lord,” she said, “come and stay at my house.” And she persuaded us. 
      
      
      Paul and Silas in Prison
      16 Once when we were going to the place of prayer, we were met by a female slave who had a spirit by which she predicted the future. She earned a great deal of money for her owners by fortune-telling. 17 She followed Paul and the rest of us, shouting, “These men are servants of the Most High God, who are telling you the way to be saved.” 18 She kept this up for many days. Finally Paul became so annoyed that he turned around and said to the spirit, “In the name of Jesus Christ I command you to come out of her!” At that moment the spirit left her. 
      19 When her owners realized that their hope of making money was gone, they seized Paul and Silas and dragged them into the marketplace to face the authorities. 20 They brought them before the magistrates and said, “These men are Jews, and are throwing our city into an uproar 21 by advocating customs unlawful for us Romans to accept or practice.” 
      22 The crowd joined in the attack against Paul and Silas, and the magistrates ordered them to be stripped and beaten with rods. 23 After they had been severely flogged, they were thrown into prison, and the jailer was commanded to guard them carefully. 24 When he received these orders, he put them in the inner cell and fastened their feet in the stocks. 
      25 About midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening to them. 26 Suddenly there was such a violent earthquake that the foundations of the prison were shaken. At once all the prison doors flew open, and everyone’s chains came loose. 27 The jailer woke up, and when he saw the prison doors open, he drew his sword and was about to kill himself because he thought the prisoners had escaped. 28 But Paul shouted, “Don’t harm yourself! We are all here!” 
      29 The jailer called for lights, rushed in and fell trembling before Paul and Silas. 30 He then brought them out and asked, “Sirs, what must I do to be saved?” 
      31 They replied, “Believe in the Lord Jesus, and you will be saved—you and your household.” 32 Then they spoke the word of the Lord to him and to all the others in his house. 33 At that hour of the night the jailer took them and washed their wounds; then immediately he and all his household were baptized. 34 The jailer brought them into his house and set a meal before them; he was filled with joy because he had come to believe in God—he and his whole household.`,
      "Acts 16:12-34",
      ScriptureReadingSongs.SPIRIT_OF_THE_LIVING_GOD,
      "Acts 16:12-34"
    ),
    generateMinistryToChildren(
      "Wendy Smith",
      ChildrenSongs.I_AM_SO_GLAD
    ),
    generateHymnOfPreparation(andCanItBe),
    generateSermon(
      "Pastor Nate Hickox",
      "How God Opens Doors for the Gospel"
    )
  ]),
  generate3rdSection([
    prayersOfThePeople,
    generateGivingSection(OfferingSongs.GRANT_US_LORD),
    prayerOfDedication
  ]),
  generate4thSection([
    generateHymnOfSending(mightyToSave, "song"),
    benediction
  ])
];
