import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import expressversandImg from "@/public/expversand.png";
import gardifyImg from "@/public/gardify.png";
import plotforgeImg from "@/public/plotforge.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "BSc in Computer Science and Engineering",
        location: "Dhaka, Bangladesh",
        description:
            "I graduated with a BSc in Computer Science and Engineering from Ahsanullah Univesity of Science & Technology. I learned the basics of algorithm, data structure, AI, web development. Worked on several group projects with with C, C#, .NET, Java, HTML, CSS and Bootstrap",
        icon: React.createElement(LuGraduationCap),
        date: "2013-2017",
    },
    {
        title: "ASP.NET EF Bootcamp",
        location: "Dhaka, Bangladesh",
        description:
            "I attended a bootcamp on ASP.NET Entity Framework. I learned the basics and advaced aspects of ASP.NET, Entity Framework, SQL Server, C# and LINQ. I worked on a group project of 3 people with ASP.NET, Entity Framework, SQL Server, C#, LINQ, HTML, CSS and Bootstrap, where we developed a university management system.",
        icon: React.createElement(CgWorkAlt),
        date: "2018",
    },
    {
        title: "MS in Computer Science",
        location: "Paderborn, Germany",
        description:
            "I am currently pursuing my MS in Computer Science from Paderborn University. I am learning the advanced topics of computer science like software engineering, web development, algorithms, distributed systems and usable security and privacy. I am nearing the end of my studies and currently looking for an internship or a thesis to wrap up the degree.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - present",
    },
    {
        title: "Frontend Developer at Netzlab GmbH.",
        location: "Dortmund, Germany",
        description:
            "I worked here for one and a half years as a Frontend Developer. I worked on several customer-oriented projects like Express Versand, Gardify, where I implemented features like autocomplete, pagination, sorting, filtering, secure checkout, dynamic page refresh, embedded YouTube video. I worked with Angular, TypeScript, JavaScript, Bootstrap, SCSS, HTML, CSS.",
        icon: React.createElement(FaReact),
        date: "2022 - 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Express Versand",
        description:
            "A public website for price comparison among different shipping service providers. I worked in this project as a Frontend Developer for 1 year. I have implemented features like autocomplete, pagination, sorting, filtering, secure checkout.",
        tags: ["React", "JavaScript", "Bootstrap", "CSS"],
        imageUrl: expressversandImg,
        href: "https://expressversand.de",
    },
    {
        title: "Gardify",
        description:
            "A public website for gardening and its maintenance. I worked in this project as a Frontend Developer for 6 months. It has features like autocomplete, dynamic page refresh, embedded YouTube video, sorting, filtering, secure checkout.",
        tags: ["Angular", "TypeScript", "Bootstrap", "SCSS"],
        imageUrl: gardifyImg,
        href: "https://gardify.de",
    },
    {
        title: "Plotforge",
        description:
            "A full stack project done using Next.js, React and tailwind. It can be used as a dictionary of AI prompts. It has advanced CRUD features, can be authenticated using google auth, shows persistent data using mongoDB.",
        tags: ["Next.js", "React", "JavaScripts", "TailwindCSS", "MongoDB", "Google Auth"],
        imageUrl: plotforgeImg,
        href: "https://plotforge-ai-prompt.vercel.app/",
    },

    // {
    //     title: "CorpComment",
    //     description:
    //         "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    //     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    //     imageUrl: corpcommentImg,
    // },
    // {
    //     title: "rmtDev",
    //     description:
    //         "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    //     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    //     imageUrl: rmtdevImg,
    // },
    // {
    //     title: "Word Analytics",
    //     description:
    //         "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    //     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //     imageUrl: wordanalyticsImg,
    // },

] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;