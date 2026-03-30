import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import {follows} from "../data";

export default function Connect(){
    return (
        <section id="connect">
            <div className="container px-5 py-10 mx-auto">
                 <motion.div
                initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.8, ease: "easeOut" }} 
              >
                <div className="text-center mb-20">
                    <UserGroupIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-5xl text-4xl font-baloo font-medium text-gray-800 mb-4">
                        Connect With Me!
                    </h1>
                    <p className="font-mono text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
                        Follow my <span className="text-emerald-600 font-semibold">LinkedIn or GitHub</span> to see more of my work or connect with me.
                    </p>
                    </div>
                </motion.div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {follows.map((follow)=> (
                        <div key={follow.name} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white border border-gray-100 flex p-4 h-full items-center rounded-xl shadow-sm transition-all hover:border-emerald-200">
                            <img
                            src={follow.logo}
                            alt={follow.name}
                            className="w-6 h-6 flex-shrink-0 mr-4 object-contain"
                            />
                            <a
                            href={follow.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-lg font-medium text-gray-800 hover:text-emerald-600 transition-colors"
                            >
                            {follow.name}
                            </a>
                        </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
   
    )
}