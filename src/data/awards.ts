import type { AwardDate } from "@/lib/interfaces";

type AwardEntry = { issuer: string; date: AwardDate };

export const awardsData: {
  awards: Record<string, AwardEntry>;
  certifications: Record<string, AwardEntry>;
} = {
  awards: {
    "ieee-xtreme-17": {
      issuer: "International competitive programming",
      date: "2023-10",
    },
    "devsu-hackathon-finalist": {
      issuer: "Devsu",
      date: "2022",
    },
    "taws-senior": {
      issuer: "TAWS Club",
      date: { start: "2021", end: "present" },
    },
  },
  certifications: {
    "ibm-data-science": {
      issuer: "Coursera",
      date: "2025",
    },
    "github-foundations": {
      issuer: "GitHub",
      date: "2025-02",
    },
    pcap: {
      issuer: "Python Institute",
      date: "2025-01",
    },
    "salesforce-pd1": {
      issuer: "Salesforce",
      date: "2023",
    },
  },
};
