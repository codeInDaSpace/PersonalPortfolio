import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { motion } from 'framer-motion';
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                 <motion.div
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        >
                <div className="text-center mb-20">
                    <CpuChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-5xl text-4xl font-baloo font-medium text-gray-800 mb-4">
                    Skills &amp; Technologies
                </h1>
                    <p className="font-mono text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
    These are the <span className="text-emerald-600 font-semibold">Skills and Technologies</span> I've gained through school, internships, and personal projects.
</p>
                </div>
                </motion.div>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0 lg:ml-10">
                        <img
                            className="object-cover object-center rounded"
                            alt="Astronaut"
                            src="./lilAstro.webp"
                        />
                    </div>
                    <div className="flex flex-wrap w-full sm:w-1/2">
                        {skills.map((skill) => (
                            <div key={skill.language} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-white border border-gray-100 flex p-4 h-full items-center rounded-xl shadow-sm transition-all hover:border-emerald-200">
                                <img
                                    alt={skill.language}
                                    src={skill.languageIcon}
                                    className="w-6 h-6 flex-shrink-0 mr-4 group-hover:grayscale-0 transition-all"
                                />
                                {/* Switched font to Mono and adjusted size */}
                                <span className="font-mono font-medium text-gray-700 text-lg">
                                    {skill.language}
                                </span>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
