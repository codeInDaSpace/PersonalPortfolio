import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { motion } from 'framer-motion';
import { projects } from "../data";

export default function Projects () {

    return ( 
        <section id="projects" className="text-gray-800 body-font">
            <div className="container px-5 mx-auto text-center lg:px-40 lg:px-40">
                 <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }} 
                >
                <div className="flex flex-col w-full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-baloo font-medium mb-4 text-gray-800">
                            Projects I've Built
                        </h1>
                        <p className="lg:w-2/3 font-mono mx-auto leading-relaxed text-base ">
                            I've worked on multiple projects exploring different areas of software engineering, including data handling, bot development, full-stack applications, and natural language processing. 
                            Some of these projects include a Discord music bot, a theme park database management system, a PDF financial data locator, and an Amazon review opinion search engine
                        </p>
                </div>
                </motion.div>
                <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                <div className="flex relative flex-col">
                    <img
                        alt="gallery"
                        className="w-full h-48 object-cover rounded-t-xl"
                        src={project.image}
                    />
                    <div className="px-8 py-10 relative z-0 w-full border-4 bg-white/80 hover:bg-amber-50 border-4 border-amber-200 text-gray-800 shadow-sm hover:shadow-md transition rounded-xl">
                        <h2 className="tracking-widest text-sm title-font font-medium text-green-700 mb-1">
                            {project.subtitle}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-800 mb-3">
                            {project.title}
                        </h1>
                        <p className="font-roboto leading-relaxed">{project.description}</p>
                    </div>
                </div>
                </a>
                ))}
                </div>

            </div>

        </section>
      
    );
}
