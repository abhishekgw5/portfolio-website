import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import agropredictImg from "@/public/projects/agropredict.png"
import spendWiselyImg from "@/public/projects/spend.png"
import stackImg from "@/public/projects/stack.png"
import problemSolvingImage from '@/public/skills/problem-solving-1.png'
import dataStructuresImage from '@/public/skills/dsa.jpg'; 
import javaImg from '@/public/skills/java.png'
import pythonImg from '@/public/skills/python.png'
import cImg from '@/public/skills/c.png'
import sqlImg from '@/public/skills/sql.png'
import htmlImg from '@/public/skills/html.png'
import cssImg from '@/public/skills/css.png'
import jsImg from '@/public/skills/js.png'
import reactImg from '@/public/skills/react.png'
import expressImg from '@/public/skills/express1.jpeg'
import nodeImg from '@/public/skills/node.png'
import mySqlImg from '@/public/skills/mysql.png'
import mongoIng from '@/public/skills/mongodb (1).svg'

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const skillsData = [
  { name: 'Problem Solving', image: problemSolvingImage },
  { name: 'Data Structures', image: dataStructuresImage },
  { name: 'Java', image: javaImg },
  { name: 'Python', image: pythonImg },
  { name: 'C', image: cImg },
  { name: 'SQL', image: sqlImg },
  { name: 'HTML', image: htmlImg },
  { name: 'CSS', image: cssImg },
  { name: 'JavaScript', image: jsImg },
  { name: 'React', image: reactImg },
  { name: 'Express', image: expressImg },
  { name: 'Node', image: nodeImg },
  { name: 'MySQL', image: mySqlImg },
  { name: 'MongoDB', image: mongoIng },
] as const;


export const projectsData = [
  {
    title: "AgroPredict",
    description:
      "Implemented an end-to-end agricultural decision support system leveraging Machine Learning and Deep Learning techniques. Developed modules for Crop Recommendation, Fertilizer Recommendation, and Plant Disease Prediction, providing farmers with insights for optimized yield. ",
    tags: ["Python", "Flask", "Data Analysis", " Data Visualization", "HTML", "CSS"],
    imageUrl: agropredictImg,
    githubLink: "https://github.com/abhishekgw5/agroPredict",
    liveProjectLink: undefined,
  },
  {
    title: "Spend Wisely",
    description:
      "Created Spend Wisely, a MERN stack web app, enabling users to efficiently manage their finances by tracking expenses and income. Implemented analytical features, including total transactions, turnovers, and categorized insights, enhancing financial control. ",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: spendWiselyImg,
    githubLink: "https://github.com/abhishekgw5/spend-wisely-1",
    liveProjectLink: "https://spend-wisely.cyclic.cloud/",
  },
  {
    title: "Stack Overflow Clone",
    description:
      "Developed a user-friendly Q&A platform similar to stack overflow using modern web technologies. Implemented essential features like authentication, user profile management, asking question, giving answer and voting and sharing system for questions.",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: stackImg,
    githubLink: "https://github.com/abhishekgw5/stack-overflow",
    liveProjectLink: "https://stack-overflow-abhi-1.netlify.app/",
  },
] as const;


export const educationData = [
  {
    title: "Bachelor of Technology in Computer Engineering",
    institute: "Vishwakarma Institute of Technology, Pune, Maharashtra",
    details: "CGPA: 8.86 (till 5th Sem)",
  },
  {
    title: "HSC, Class XII",
    institute: "Mamta English Junior College, Tornala, Washim, Maharashtra",
    details: "Percentage: 96.83%",
  },
  {
    title: "SSC, Class X",
    institute: "Sau. Shobhanatai Narendrakumar Chaware English School, Karanja lad, Maharashtra",
    details: "Percentage: 90.80%",
  },
] as const;

