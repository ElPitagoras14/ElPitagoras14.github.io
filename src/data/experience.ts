import type { Period } from "@/lib/interfaces";

export const experiences: Record<string, { company: string; period: Period }> =
  {
    telconet: {
      company: "Telconet LATAM",
      period: { start: "2024-01", end: "present" },
    },
    siemav: {
      company: "Siemav",
      period: { start: "2023-08", end: "2024-01" },
    },
    shippify: {
      company: "Shippify",
      period: { start: "2022-09", end: "2023-02" },
    },
    datil: {
      company: "Dátil",
      period: { start: "2022-02", end: "2022-05" },
    },
    "espol-academic": {
      company: "ESPOL",
      period: { start: "2022-05", end: "2023-08" },
    },
  };
