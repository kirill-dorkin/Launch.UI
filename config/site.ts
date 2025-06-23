export const siteConfig = {
  name: "TechFix Repairs",
  url: "https://techfix.example.com",
  getStartedUrl: "https://techfix.example.com/contact",
  ogImage: "https://techfix.example.com/og.jpg",
  description:
    "Fast and reliable computer and laptop repair services for all major brands.",
  links: {
    twitter: "https://twitter.com/techfix",
    github: "https://github.com/techfix/website",
    email: "mailto:contact@techfix.example.com",
  },
  pricing: {
    pro: "#contact",
    team: "#contact",
  },
  stats: {
    figma: 0,
    github: 0,
    cli: 0,
    total: "5000+",
    updated: "1 Jan 2025",
    sections: 0,
    illustrations: 0,
    animations: 0,
    appTemplates: 0,
    websiteTemplates: 0,
  },
};

export type SiteConfig = typeof siteConfig;
