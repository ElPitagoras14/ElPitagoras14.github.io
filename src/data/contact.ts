export const contactLinks: Record<string, { href: string; icon: string }> = {
  email: {
    href: "mailto:jhony-2001-2011@outlook.com",
    icon: "Mail",
  },
  github: {
    href: "https://github.com/ElPitagoras14",
    icon: "Github",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/jfgarciaa",
    icon: "Linkedin",
  },
};

export const socialMedia = {
  github: contactLinks.github.href,
  linkedin: contactLinks.linkedin.href,
  email: contactLinks.email.href.replace("mailto:", ""),
};

export const resumeUrl = "https://rxresu.me/elpitagoras14/software-engineer-en";
