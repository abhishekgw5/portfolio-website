"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const hoverAnimationVariants = {
  hover: {
    scale: 1.1,
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index: number) => (
          <motion.li
            className="bg-white border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex flex-col items-center"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover="hover"
          >
            <motion.div
              className="w-16 h-16 mb-2 relative"
              variants={hoverAnimationVariants}
            >
              <Image src={skill.image} alt={skill.name} layout="fill" objectFit="contain" />
            </motion.div>
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
