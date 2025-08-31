import React from "react";
import { TerminalIcon, OfficeBuildingIcon } from "@heroicons/react/solid";
import { motion } from 'framer-motion';
import {experiences } from "../data";


export default function Experiences(){
    return (
         <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        >
        <section id="experiences">
            <div className="container px-5 py-10 mx-auto text-center">
                <OfficeBuildingIcon className="w-10 inline-block mb-4 lg:px-40 lg:px-40" />
                <h1 className="sm:text-4xl text-3xl font-baloo font-medium text-gray-800 mb-12">
                    Work Experience
                </h1>
                <div className="flex flex-wrap m-4">
                    {experiences.map((experience)=> (
                        <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-white/80 hover:bg-amber-50 border-4 border-amber-200 bg-opacity-40 p-8 rounded-xl">
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
                            <p className="font-roboto leading-relaxed mb-6 pt-2">{experience.desc}</p>
                            </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
        </motion.div>
    )
}