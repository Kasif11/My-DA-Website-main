export interface Skill {
  name: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
  tools: string[];
}

export interface Project {
  title: string;
  tech: string;
  githubUrl: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  percentage: string;
}