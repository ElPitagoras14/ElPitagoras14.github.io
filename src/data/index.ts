import { getDictionary } from "@/i18n/utils";
import type {
  AwardDate,
  ContactInfoDict,
  EducationItem,
  Job,
  LangType,
  Period,
  Project,
  SkillCategory,
} from "@/lib/interfaces";
import { awardsData } from "./awards";
import { contactLinks } from "./contact";
import { educationItems } from "./education";
import { experiences } from "./experience";
import { projects as projectsData } from "./projects";
import { skillCategories } from "./skills";

export { socialMedia } from "./contact";

function langLocale(lang: LangType): string {
  return lang === "es" ? "es-ES" : "en-US";
}

function formatPeriodDate(
  date: string,
  locale: string,
  present: string,
): string {
  if (date === "present") return present;
  if (date.length === 4) return date;
  const [year, month] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1));
}

export function formatPeriod(
  period: Period,
  lang: LangType,
  present: string,
): string {
  const locale = langLocale(lang);
  const start = formatPeriodDate(period.start, locale, present);
  const end = formatPeriodDate(period.end as string, locale, present);
  return `${start} - ${end}`;
}

export function formatDate(
  date: AwardDate,
  lang: LangType,
  present: string,
): string {
  const locale = langLocale(lang);
  if (typeof date === "object") {
    const end = date.end === "present" ? present : date.end;
    return `${date.start} - ${end}`;
  }
  if (date.length === 4) return date;
  const [year, month] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1));
}

export function getProjects(lang: LangType): Project[] {
  const dict = getDictionary(lang);
  const strings = dict.projectsPage.projects as {
    id: string;
    title: string;
    role: string;
    tagline: string;
    shortDescription: string;
    narrative: { problem: string; approach: string; learned: string };
  }[];
  return strings.map((s) => ({ ...projectsData[s.id]!, ...s }));
}

export function getFeaturedProjects(lang: LangType): Project[] {
  return getProjects(lang).filter((p) => p.featured);
}

export function getExperience(lang: LangType): Job[] {
  const dict = getDictionary(lang);
  const present = dict.common.present;
  const strings = dict.aboutPage.experienceSection.jobs as {
    id: string;
    role: string;
    location: string;
    metric: string;
    activities: string[];
  }[];
  return strings.map((s) => {
    const data = experiences[s.id]!;
    return {
      company: data.company,
      period: formatPeriod(data.period, lang, present),
      role: s.role,
      location: s.location,
      metric: s.metric,
      activities: s.activities,
    };
  });
}

export function getEducation(lang: LangType): EducationItem[] {
  const dict = getDictionary(lang);
  const present = dict.common.present;
  const strings = dict.aboutPage.educationSection.items as {
    id: string;
    degree: string;
    location: string;
    description: string;
  }[];
  return strings.map((s) => {
    const data = educationItems[s.id]!;
    return {
      degree: s.degree,
      school: data.school,
      period: formatPeriod(data.period, lang, present),
      location: s.location,
      description: s.description,
    };
  });
}

export function getSkills(lang: LangType): SkillCategory[] {
  const dict = getDictionary(lang);
  const strings = dict.aboutPage.skillsSection.categories as {
    id: string;
    title: string;
  }[];
  return strings.map((s) => ({
    title: s.title,
    skills: [...skillCategories[s.id]!.skills],
  }));
}

export function getAwards(lang: LangType) {
  const dict = getDictionary(lang);
  const present = dict.common.present;
  const awardsStrings = dict.aboutPage.awardsSection.awards as {
    id: string;
    title: string;
  }[];
  const certsStrings = dict.aboutPage.awardsSection.certifications as {
    id: string;
    title: string;
  }[];
  return {
    awards: awardsStrings.map((s) => ({
      title: s.title,
      issuer: awardsData.awards[s.id]!.issuer,
      date: formatDate(awardsData.awards[s.id]!.date, lang, present),
    })),
    certifications: certsStrings.map((s) => ({
      title: s.title,
      issuer: awardsData.certifications[s.id]!.issuer,
      date: formatDate(awardsData.certifications[s.id]!.date, lang, present),
    })),
  };
}

export function getContactLinks(lang: LangType): ContactInfoDict["links"] {
  const dict = getDictionary(lang);
  const strings = dict.contactPage.info.links as {
    id: string;
    label: string;
  }[];
  return strings.map((s) => ({
    id: s.id,
    label: s.label,
    href: contactLinks[s.id]!.href,
    icon: contactLinks[s.id]!.icon,
  }));
}
