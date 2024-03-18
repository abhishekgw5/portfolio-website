"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Education from "./education";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <>
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-15 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My full name is 
        <span className="font-bold"> Abhishek Gajanan Wankhade. </span>
        I am a third-year <span className="font-bold"> Computer Science </span>  student currently pursuing a <span className="font-bold"> BTech </span>  degree at <span className="font-bold"> VIT Pune </span>. My academic journey has been centered around exploring the fascinating world of <span className="font-bold"> algorithms </span>,<span className="font-bold"> data structures </span> , and <span className="font-bold"> Software Development </span> . With a deep passion for technology and a firm belief in its potential to drive positive change, I am on a mission to turn my coding skills into a fulfilling career. I aspire to contribute to the ever-evolving tech industry through creative solutions and innovation. I am actively seeking opportunities to learn, grow, and collaborate with like-minded individuals.
      </p>
    </motion.section>

    <Education/>

    </>

  );
}
