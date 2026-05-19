import type { Period } from "@/lib/interfaces";

export const educationItems: Record<
  string,
  { school: string; period: Period }
> = {
  "msc-devops-unir": {
    school: "UNIR",
    period: { start: "2025", end: "present" },
  },
  "cs-espol": {
    school: "ESPOL",
    period: { start: "2019-05", end: "2024-02" },
  },
};
