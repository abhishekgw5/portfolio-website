"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import leetcodeImg from "@/public/icons/leetcode.svg";
import hackerImg from "@/public/icons/hackerrank.png";
import globeImg from "@/public/icons/globe.png";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

const Achievements = () => {
    
  const { ref } = useSectionInView("Achievements");

  const controls = useAnimation();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="achievements" className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 scroll-mt-28 mb-28" ref={ref}>
        <motion.section >
      <SectionHeading>Achievements</SectionHeading>

      <motion.div
        
        className="mb-8"
        animate={"visible"}
        initial="hidden"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-700 rounded-lg shadow-md p-6 mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
            <p className="text-l text-gray-300 pr-2">
              Successfully solved
              <span className="font-bold"> 350+ </span>
              problems, showcasing problem-solving skills and algorithmic
              expertise.
            </p>
          </div>
          <a
            href="https://leetcode.com/abhishekgw5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={controls}
              initial="hidden"
            >
              <Image
                src={leetcodeImg}
                alt="LeetCode Website"
                width={27}
                height={27}
              />
            </motion.div>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="mb-8"
        animate={"visible"}
        initial="hidden"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gray-700 rounded-lg shadow-md p-6 mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              HackerRank Achievements
            </h3>
            <p className="text-l font-bold text-gray-300">
              5 ★ in Java | 5 ★ in SQL | 4 ★ in Python
            </p>
          </div>
          <a
            href="https://www.hackerrank.com/abhishekgw5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={controls}
              initial="hidden"
            >
              <Image
                src={hackerImg}
                alt="HackerRank Website"
                width={28}
                height={28}
              />
            </motion.div>
          </a>
        </div>
      </motion.div>

      {/* Paper Publications */}
      <motion.div
        className="mb-8"
        animate={ "visible"}
        initial="hidden"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-gray-700 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Paper Publications</h3>
          <ul className="list-disc ml-4">
            {/* First publication */}
            <li className="mb-4">
              <div className="flex items-center justify-between">
                <strong className="pr-2">
                  An Advanced Surveillance Motorized Car for Real-time
                  Inspection with Sensing Capabilities
                </strong>
              </div>
              <p className="text-sm mt-2 -4">
                Received best paper award | Presented at International
                Conference on Robotics, Control, Automation, and Artificial
                Intelligence (RCAAI 2023) | Will be published in Springer 2024
              </p>
            </li>
            {/* Second publication */}
            <li className="mb-4">
              <div className="flex items-center justify-between">
                <strong className="pr-2">
                  Interactive Virtual Consultation and Disease Diagnosis Using
                  Machine Learning Approach
                </strong>
                <a
                  href="https://www.igi-global.com/chapter/interactive-virtual-consultation-and-disease-diagnosis-using-machine-learning-approach/330402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-400"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={controls}
                    initial="hidden"
                    className="w-6 h-6"
                  >
                    <Image
                      src={globeImg}
                      alt="Globe Icon"
                      width={24}
                      height={24}
                    />
                  </motion.div>
                </a>
              </div>
              <p className="text-sm mt-2 pr-2">
                Published in 2023 by IGI Global | Book Chapter in Advances in
                Artificial and Human Intelligence in the Modern Era
              </p>
            </li>
            {/* Third publication */}
            <li>
              <div className="flex items-center justify-between">
                <strong className="pr-5 mr-3">
                  Intelligent Monitoring Support System for Smart Irrigation
                  Management
                </strong>
                <a
                  href="https://ieeexplore.ieee.org/document/10157412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-400"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={controls}
                    initial="hidden"
                    className="w-6 h-6"
                  >
                    <Image
                      src={globeImg}
                      alt="Globe Icon"
                      width={24}
                      height={24}
                    />
                  </motion.div>
                </a>
              </div>
              <p className="text-sm mt-2 pr-2">
                Published in 2023 by IEEE | Presented at 2nd International
                Conference on Vision Towards Emerging Trends in Communication
                and Networking Technologies (VITeCoN)
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
      </motion.section>
    </section>
    
  );
};

export default Achievements;
