"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import githubLogo from "@/public/icons/github2.svg"
import Image from "next/image";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} index={index} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className="text-l text-gray-500">To see other projects please visit my <a href="https://github.com/abhishekgw5" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">GitHub profile</a></p>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Image src={githubLogo} alt="GitHub Logo" className="ml-2" width={24} height={24} />
        </a>
      </div>
    </section>
    
  );
}
