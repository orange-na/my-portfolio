import { Project } from "@/types";

export const projects: Project[] = [
  {
    imgSrc: "/population-charts.png",
    title: "都道府県別人口推移グラフ",
    technologies: ["TypeScript", "Next.js"],
    codeLink: "https://github.com/orange-na/yumemi-passport-frontend",
    demoLink: "https://yumemi-passport-frontend-murex.vercel.app",
  },
  {
    imgSrc: "/mentorixer.png",
    title: "Mentorixer",
    technologies: ["Golang", "TypeScript", "Next.js"],
    codeLink: "https://github.com/orange-na/mentorixer-api",
    demoLink: "",
  },
] as const;
