export interface StatItem {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  bullets?: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface StackCategory {
  category: string;
  skills: {
    name: string;
    description?: string;
    highlight?: boolean;
  }[];
}

export interface PortfolioData {
  name: string;
  shortName: string;
  role: string;
  subheadline: string;
  availability: string;
  email: string;
  phone: string;
  linkedin: string;
  stats: StatItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  services: ServiceItem[];
  stackCategories: StackCategory[];
  about: {
    tagline: string;
    bio: string[];
    strengths: string[];
  };
}
