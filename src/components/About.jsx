import React from "react";
import Typewriter from "../Typewriter";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-44">
      <div className="container mx-auto flex justify-between items-center px-10 md:flex-row flex-col">
        <div className="lg:flex-grow md:w-2/3 w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-baloo font-medium sm:text-7xl text-4xl text-gray-800 leading-tight">
            Hi, I'm Alyssa!
            <br />
            <span className="text-emerald-500/80 italic font-light sm:text-6xl text-3xl">
              <Typewriter text="I like to code" delay={100} />
            </span>
          </h1>
          <div className="relative mt-8 max-w-xl">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/40 to-transparent rounded-full -ml-6 hidden md:block"></div>
            
            <p className="leading-relaxed font-mono text-gray-600 text-lg">
              I'm a Computer Science student at the University of Houston with a minor in Mathematics. 
              I focus on building <span className="text-gray-900 font-semibold">clean backend systems</span> and 
              solving <span className="text-gray-900 font-semibold">complex data problems</span>.
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 text-white bg-gray-900 px-10 py-4 rounded-full overflow-hidden transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-200"
            >
              <span className="font-roboto tracking-wide font-medium">Hire Me</span>
              {/* The arrow that slides on hover */}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-full">
          <img
            className="object-cover object-center rounded drop-shadow-lg shadow-emerald-500/20"
            alt="Astronaut"
            src="./astronaut3.jpg"
            width="720"
            height="600"
          />
        </div>
      </div>
    </section>
  );
}