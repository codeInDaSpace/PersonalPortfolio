import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        These are the Skills and Technologies I've gained through school, internships, and personal projects.
                    </p>
                </div>


                <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <img
                            className="object-cover object-center rounded mx-auto md:mx-0 md:translate-x-12"
                            alt="Astronaut"
                            src="./lilAstro.webp"
                        />
                    </div>

                    <div className="flex flex-wrap w-full md:w-2/3">
                        {skills.map((skill) => (
                            <div
                                key={skill.language}
                                className="p-2 sm:w-1/2 w-full md:-translate-x-12"
                            >
                                <div className="bg-orange-300 rounded flex p-4 h-full items-center">
                                    <img
                                        alt={skill.language}
                                        src={skill.languageIcon}
                                        className="w-6 h-6 flex-shrink-0 mr-4"
                                    />
                                    <span className="title-font font-medium text-gray-800">
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
