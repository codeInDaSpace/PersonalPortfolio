import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium font-mono text-gray-800 mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        These are the Skills and Technologies I've gained through school, internships, and personal projects.
                    </p>
                </div>
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
                                <div className="bg-white/80 hover:bg-amber-50 border-4 border-amber-200 rounded flex p-4 h-full items-center">
                                    <img
                                        alt={skill.language}
                                        src={skill.languageIcon}
                                        className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                                    />
                                    <span className="title-font font-medium text-gray-800 ">
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
