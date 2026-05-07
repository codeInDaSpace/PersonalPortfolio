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
                        <h1 className="sm:text-5xl text-3xl font-baloo font-medium mb-4 text-gray-800">
                        Projects I've <span className="relative inline-block">
                            Built
                            {/* This is the subtle highlight that matches your 'Alyssa' header */}
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-100/60 -z-10 rounded-full"></span>
                        </span>
                        </h1>
                      <p className="lg:w-2/3 font-mono mx-auto leading-relaxed text-gray-600 text-lg">
                                    I’ve built a range of systems, from <span className="text-emerald-700/80 font-semibold">complex data tools</span>,  <span className="text-emerald-700/80 font-semibold">trading simulators</span> and 
                                     <span className="text-emerald-700/80 font-semibold"> discord bots </span> to <span className="text-emerald-700/80 font-semibold">full-stack apps</span> and  <span className="text-emerald-700/80 font-semibold"> NLP research. </span> 
                                    Each project was a chance to solve real problems and level up my technical skills.
                                </p>
                </div>
                </motion.div>
                <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4 mx-auto group">
                <div className="flex flex-col h-full group bg-transparent transition-all duration-500 hover:-translate-y-2">
                    {/* Centered Image Wrapper with no background */}
                    <div className="w-full h-56 flex items-center justify-center p-4">
                        <img
                            alt={project.title}
                            className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:drop-shadow-xl transition-all duration-500"
                            src={project.image}
                        />
                    </div>
                    {/* 3. TEXT SECTION - The white card containing your text */}
<div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col flex-grow items-center text-center shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-500/10 transition-all duration-500">
    
    {/* Subtitle (Mono) */}
    <h2 className="tracking-widest text-xs font-mono font-bold text-emerald-600 uppercase mb-3">
        {project.subtitle}
    </h2>

    {/* Title (Baloo) */}
    <h1 className="text-2xl font-baloo font-medium text-gray-800 mb-4 px-2">
        {project.title}
    </h1>

    {/* Description (Mono) - max-w-sm keeps it perfectly centered */}
    <p className="font-mono text-sm text-gray-500 leading-relaxed flex-grow max-w-sm">
        {project.description}
    </p>

    {/* View Project Link (Appears on Hover) */}
    <div className="mt-8 flex items-center justify-center opacity-0 group-hover:opacity-100 text-emerald-600 transition-all duration-500 text-xs font-mono font-bold uppercase tracking-widest">
        <span>View Project</span>
        <span className="ml-2 transition-transform group-hover:translate-x-3">→</span>
    </div>
</div>
                </div>
                </a>
                ))}
                </div>

            </div>

        </section>
      
    );
}
