export interface Demo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  date: string;
  accent: string; // primary brand color
  category: "SaaS" | "Agency" | "Startup";
}

export const demos: Demo[] = [
  {
    slug: "driftwave",
    name: "Driftwave",
    tagline: "Async Video Collaboration",
    description:
      "Replace endless meetings with rich async video threads. Share context, collect feedback, and ship faster — all without scheduling a call.",
    date: "2026-04-10",
    accent: "#06b6d4",
    category: "SaaS",
  },
];
