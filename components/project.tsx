import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Import logos
import githubLogo from "@/public/icons/github2.svg";
import liveProjectLogo from "@/public/icons/globe.png";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  liveProjectLink,
  index, // Add index to props
}: ProjectProps & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className={`bg-gray-100 max-w-[47rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition ${
          index % 2 === 0 ? "sm:group-even:pl-8" : "sm:group-even:pr-8"
        } dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-sm mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-justify">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />

        {/* Render logos below image for larger screens */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute ${
              index % 2 === 0 ? "right-4" : "left-4"
            } bottom-4 flex items-center hidden sm:flex transition duration-300 transform-gpu hover:scale-110`}
          >
            <Image
              src={githubLogo}
              alt="GitHub Repository"
              width={24}
              height={24}
            />
            <span className="ml-2">GitHub Repo</span>
          </a>
        )}
        {liveProjectLink && (
          <a
            href={liveProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute ${
              index % 2 === 0 ? "right-4" : "left-4"
            } bottom-12 flex items-center hidden sm:flex transition duration-300 transform-gpu hover:scale-110`}
          >
            <Image
              src={liveProjectLogo}
              alt="Live Project"
              width={24}
              height={24}
            />
            <span className="ml-2">Live Project</span>
          </a>
        )}

        {/* Render logos near title for smaller screens */}
        <div className="sm:hidden absolute top-4 right-4 flex items-center space-x-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <Image
                src={githubLogo}
                alt="GitHub Repository"
                width={24}
                height={24}
              />
            </a>
          )}
          {liveProjectLink && (
            <a href={liveProjectLink} target="_blank" rel="noopener noreferrer">
              <Image
                src={liveProjectLogo}
                alt="Live Project"
                width={24}
                height={24}
              />
            </a>
          )}
        </div>
      </section>
    </motion.div>
  );
}
