import coverIEEE from "../../public/awards/ieee-xtreme.jpg";
import coverDevsu from "../../public/awards/devsu-jam.jpg";

export const awards = [
  {
    id: "ieeeXtreme",
    title: "IEEE Xtreme",
    description:
      "Proud winners of the IEEE Xtreme 17.0 event hosted by the IEEE Student Branch at Universidad Politécnica Salesiana, Cuenca, Ecuador. We excelled in competitive programming, demonstrating our ability to develop efficient algorithms with limited memory and time resources while working as a cohesive team.",
    cover: coverIEEE,
  },
  {
    id: "devsuCodeJam",
    title: "Devsu CodeJam",
    description:
      "Clinched the 14th position in the prestigious Devsu Code Jam at Ecuador, showcasing strong problem-solving skills and a passion for tackling coding challenges. Committed to achieving technical excellence and consistently enthusiastic about Devsu Code initiatives.",
    cover: coverDevsu,
  },
];

export const indexedAwards = awards.reduce((acc, award) => {
  acc[award.id] = award;
  return acc;
}, {} as Record<string, (typeof awards)[0]>);
