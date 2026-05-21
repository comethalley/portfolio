import type { ALL_FILTERS } from "../constants/project-constants";

export interface Project {
  gradient: string;
  symbol?: string;
  image?: string;
  badge: string;
  title: string;
  desc: string;
  stack: string[];
}

export interface Job {
  label: string;
  tag: string;
  note: string;
  dotColor: string;
  projects: Project[];
}

export interface ProjectCardProps {
  project: Project;
  delay: number;
  inView: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  borderColor: string;
  badgeClass: string;
}

export interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface Skill {
  icon: string;
  iconBg: string;
  name: string;
  desc: string;
  tags: string[];
  tagStyle: string;
}

export type Section = "hero" | "about" | "skills" | "projects" | "contact";

export type Filter = (typeof ALL_FILTERS)[number];
