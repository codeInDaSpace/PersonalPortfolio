import React from "react";
import { TerminalIcon, OfficeBuildingIcon } from "@heroicons/react/solid";
import {experiences } from "../data";


export default function Experiences(){
    return (
        <section id="experiences">
            <div className="container px-5 py-10 mx-auto text-center">
                <OfficeBuildingIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font  text-gray-800 mb-12">
                    Work Experience
                </h1>
                <div className="flex flex-wrap m-4">
                    {experiences.map((experience)=> (
                        <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-orange-300 bg-opacity-40 p-8 rounded">
                        <div className="inline-flex items-center">
                                <span className="flex-grow flex flex-col pl-4 pr-4">
                                    <span className="title-font font-medium text-gray-800 text-2xl w-full text-center">
                                        {experience.position}
                                    </span>
                                    <span>
                                        <span className="font-bold text-gray-800 text-sm uppercase">
                                            {experience.company}
                                        </span>
                                    </span>
                                </span>
                                <img
                                    alt="experience"
                                    src={experience.icon}
                                    className="w-16 h-12 rounded-full flex-shrink-0 object-cover object-center ml-auto"
                                />
                                </div>
                            <p className="leading-relaxed mb-6 pt-2">{experience.desc}</p>
                            </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    )
}