import React from "react";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import {experiences } from "../data";


export default function Experiences(){
    return (
        <section id="experiences">
            <div className="container px-5 pt-24 pb-12 mx-auto text-center">
                <motion.div
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        >
                <BuildingOffice2Icon className="h-10 inline-block mb-4 lg:px-40 lg:px-40" />
                <h1 className="font-baloo sm:text-5xl text-4xl font-medium text-gray-800 mb-12">
                    Work Experience
                </h1>
                </motion.div>
                <div className="relative border-l-2 border-emerald-100 ml-4 md:mx-auto md:w-3/4 lg:w-2/3">
                    {experiences.map((experience)=> (
                        <div key={experience.company} className="mb-12 ml-10 text-left relative group">
    {/* 1. THE TIMELINE DOT */}
    <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[49px] mt-2 border-4 border-white shadow-sm transition-transform group-hover:scale-150"></div>

    {/* 2. THE HEADER (Position & Company) */}
    <div className="flex items-center justify-between mb-2">
        <div>
            <h3 className="font-baloo text-2xl text-gray-800 leading-none">
                {experience.position}
            </h3>
            <p className="font-mono text-sm font-bold text-emerald-600 uppercase tracking-widest mt-1">
                {experience.company}
            </p>
        </div>
        
        {/* THE LOGO */}
        <img 
            src={experience.icon} 
            alt={experience.company}
            className="w-12 h-12 rounded-lg object-contain bg-white p-1 shadow-sm transition-transform" 
        />
    </div>

    {/* 3. THE DESCRIPTION */}
    <p className="font-mono text-gray-500 text-base leading-relaxed max-w-2xl">
        {experience.desc}
    </p>
</div>
                    ))}
                </div>
            </div>
        </section>
    )
}