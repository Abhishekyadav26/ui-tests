"use client"; 
import { IconCloud } from "./ui/interactive-icon-cloud"
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

export function Footer3() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden  px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
