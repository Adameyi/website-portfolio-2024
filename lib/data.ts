import React from "react";

//Project Images
import guchiImg from "@/public/guchiImg.png";
import a2zImg from "@/public/a2zImg.png";
import aulibraryImg from "@/public/aulibraryImg.png";

//Skills Images
import htmlLogo from "@/public/htmlLogo.png";
import cssLogo from "@/public/cssLogo.png";
import jsLogo from "@/public/jsLogo.png";
import reactLogo from "@/public/reactLogo.png";
import vuejsLogo from "@/public/vuejsLogo.png";
import gitLogo from "@/public/gitLogo.png";
import nodejsLogo from "@/public/nodejsLogo.png";
import phpLogo from "@/public/phpLogo.png";
import mysqlLogo from "@/public/mysqlLogo.png";
import mongodbLogo from "@/public/mongodbLogo.png";
import xamppLogo from "@/public/xamppLogo.png";
import pythonLogo from "@/public/pythonLogo.png";
import djangoLogo from "@/public/djangoLogo.png";
import tsLogo from "@/public/tsLogo.png";
import awsLogo from "@/public/awsLogo.png";
import expressLogo from "@/public/expressLogo.png";
import tailwindLogo from "@/public/tailwindLogo.png";
import postgresqlLogo from "@/public/postgresqlLogo.png";
import nextjsLogo from "@/public/nextjsLogo.png";

//Icons
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Web Development (Fullstack) - NSW TAFE",
        location: "Granville, NSW",
        description: "Practical experience in full stack technologies, web development frameworks, and database management. Engaged in hands-on projects, demonstrating proficiency in building responsive and interactive web applications.",
        date: "Feb 2023- Jul 2023",
        icon: React.createElement(LuGraduationCap),
    },
    {
        title: "Election Official - Australian Electoral Commission",
        location: "Merrylands/Wetheril Park, NSW",
        description: "Main role was to ensure a smooth voting process, handling voter inquiries, assisting and signing of declaration votes, and upholding election standards and protocols within a diverse team, worked diligently to address any concerns and maintain the integrity of the election, resulting in a successful and fair voting experience. Ensured smooth functioning of polling stations and valid voting procedures. Efficiently handled voter inquiries and assisted in maintaining election integrity.",
        date: "May, October 2023",
        icon: React.createElement(LuGraduationCap),
    },
    {
        title: "Assistant Tutor - UTS Alumni",
        location: "Ultimo, NSW",
        description: "Played a crucial role as an Assistant Tutor, supporting students' academic growth and development. Facilitated classroom activities, provided one-on-one assistance, conducted workshops to enhance learning outcomes and enforce a positive learning environment.  Collaborated with faculty and fellow tutors to optimize teaching strategies and student success.",
        date: " Aug 2020 – Nov 2020",
        icon: React.createElement(LuGraduationCap),
    },    
    {
        title: "Bachelor of Science In Information Technology - University of Technology, Sydney",
        location: "Ultimo, NSW",
        description: "Relevant Coursework: Mobile Networking, Digital Forensics, Cyber Security, Routing & Switching Essentials, App Programming",
        date: "Mar 2020-Mar 2022",
        icon: React.createElement(LuGraduationCap),
    },
] as const;

export const webProjectsData = [
    {
        title: "Guchi's Desserts",
        description: "Practical experience in full stack technologies, web development frameworks, and database management. Engaged in hands-on projects, demonstrating proficiency in building responsive and interactive web applications.",
        tags: ["HTML","Django","CSS Bootstrap","JavaScript"],
        imageUrl: guchiImg,
    },
    {
        title: "AULibrary",
        description: "User-friendly interface with streamlined book borrowing, browsing, returning, and purchasing options for customers. Includes registration and login system to ensure secure user/admin authentication and session management. Admin panel to manage book inventory, return borrowed books, edit, add, or delete books, and view user transaction history via database server.",
        tags: ["HTML", "Bootstrap CSS", "JavaScript", "MySQL", "PHP", "XAMPP"],
        imageUrl: aulibraryImg,
    },
    {
        title: "A2Z Recycling",
        description: "Practical experience in full stack technologies, web development frameworks, and database management. Engaged in hands-on projects, demonstrating proficiency in building responsive and interactive web applications.",
        tags: ["HTML","Bootstrap CSS","JavaScript"],
        imageUrl: a2zImg,
    },
    {
        title: "EZRestaurant",
        description: "Practical experience in full stack technologies, web development frameworks, and database management. Engaged in hands-on projects, demonstrating proficiency in building responsive and interactive web applications.",
        tags: ["HTML", "Tailwind CSS", "React", "MongoDB Atlas/Compass"],
        imageUrl: guchiImg,
    },

] as const;

export const skillsData:{name:string, imageUrl:string}[] = [
    { name: "HTML", imageUrl: htmlLogo.src },
    { name: "CSS", imageUrl: cssLogo.src},
    { name: "Tailwind", imageUrl: tailwindLogo.src},
    { name: "Javascript", imageUrl: jsLogo.src },
    { name: "Typescript", imageUrl: tsLogo.src },
    { name: "React", imageUrl: reactLogo.src },
    { name: "Next.js", imageUrl: nextjsLogo.src },
    { name: "Node.js", imageUrl: nodejsLogo.src },
    { name: "Vue.js", imageUrl: vuejsLogo.src },
    { name: "Git", imageUrl: gitLogo.src },
    { name: "MongoDB", imageUrl: mongodbLogo.src },
    { name: "Express", imageUrl: expressLogo.src},
    { name: "Python", imageUrl: pythonLogo.src },
    { name: "Django", imageUrl: djangoLogo.src },
    { name: "PHP", imageUrl: phpLogo.src },
    { name: "MySQL", imageUrl: mysqlLogo.src },
    { name: "PostgreSQL", imageUrl: postgresqlLogo.src},
    { name: "xampp", imageUrl: xamppLogo.src },
    { name: "AWS", imageUrl: awsLogo.src },
];