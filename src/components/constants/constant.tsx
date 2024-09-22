import Css from "@/icons/css.svg";
import Git from "@/icons/git.svg";
import Html from "@/icons/html.svg";
import Javascript from "@/icons/javascript.svg";
import React from "@/icons/react.svg";
import Redux from "@/icons/redux.svg";
import TailwindCss from "@/icons/tailwindcss.svg";
import Nextjs from "@/icons/nextjs.svg";
import { Skill } from "@/interfaces/Skill";
import Typescript from '@/icons/typesctipt.svg';
import Github from '@/icons/github.svg';
import { Project } from "@/interfaces/Project";

export const skills: Skill[] = [
    {
        imageUrl: <Html  className = 'w-1/2 h-1/2 object-contain' />,
        name: 'HTML'
    },
    {
        imageUrl: <Css className = 'w-1/2 h-1/2 object-contain' />,
        name: 'Css'
    },
    {
        imageUrl: <Javascript  className = 'w-1/2 h-1/2 object-contain' />,
        name: 'Javascript'
    },
    {
        imageUrl: <Typescript  className = 'w-1/2 h-1/2 object-contain' />,
        name: 'Typescript'
    },
    {
        imageUrl: <React  className = 'w-1/2 h-1/2 object-contain' />,
        name: 'React'
    },
    {
        imageUrl: <Redux  className = 'w-1/2 h-1/2 object-contain' />,
        name: 'Redux'
    },
    {
        imageUrl: <Nextjs  className = 'w-1/2 h-1/2 object-contain'/>,
        name: 'Next.js'
    },
    {
        imageUrl: <TailwindCss  className = 'w-1/2 h-1/2 object-contain' />,
        name: 'Tailwind CSS'
    },
    {
        imageUrl: <Git  className = 'w-1/2 h-1/2 object-contain' />,
        name: 'Git'
    },
    {
        imageUrl: <Github  className = 'w-1/2 h-1/2 object-contain' />,
        name: 'Github'
    },
].map((skill, index) => ({
    id: index + 1,
    ...skill
}));

export const projects:Project[] = [
    {
        imageUrl: '/text-js-2.svg',
        gitHubLink: 'https://github.com/Student1124304242942/text-js',
        siteLink: ''
    },
    {
        imageUrl: '/to-do-list.svg',
        gitHubLink: 'https://github.com/Student1124304242942/to-do-list',
        siteLink: ''
    },
    {
        imageUrl: '/random-color.svg',
        gitHubLink: 'https://github.com/Student1124304242942/random-color',
        siteLink: ''
    },
    {
        imageUrl: '/age-calculator.svg',
        gitHubLink: 'https://github.com/Student1124304242942/age-calculator',
        siteLink: ''
    }
].map((skill, index) => ({
    id: index + 1,
    ...skill
}));
 
  



 



