import type { Section } from "../types";

export const SECTIONS: Section[] = [
  "hero",
  "about",
  "skills",
  "projects",
  "contact",
];
export const NAV_LINKS: Exclude<Section, "hero">[] = [
  "about",
  "skills",
  "projects",
  "contact",
];
