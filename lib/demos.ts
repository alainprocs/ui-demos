import demosJson from '../public/demos.json';

export interface Demo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  date: string;
  accent: string;
  category: "SaaS" | "Agency" | "Startup";
}

export const demos: Demo[] = demosJson as Demo[];
