import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion, useAnimation } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { educationData } from "@/lib/data"; 

export default function Education() {
  const { ref } = useSectionInView("About");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 5 } });
  }, [controls]);

  return (
    <>
      <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-15 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
      >
        <SectionHeading>Education</SectionHeading>
        <div className="grid grid-cols-1 gap-6">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-md border-2 border-gray-300 p-6 bg-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <h2 className="text-xl font-bold mb-2">{education.title}</h2>
              <p className="text-l mb-2">{education.institute}</p>
              <p className="text-l mb-4">{education.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
