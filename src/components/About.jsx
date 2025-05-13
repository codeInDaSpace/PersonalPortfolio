import React from "react";
import Typewriter from "../Typewriter";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex justify-between items-center px-10 py-20 md:flex-row flex-col">
        <div className="lg:flex-grow md:w-2/3 w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-xl mb-4 font-medium text-gray-800">
          Hi, I'm Alyssa!
            <br /><Typewriter text ="I like to code" delay={100} />
          </h1>
          <p className="mb-8 leading-relaxed">
         I'm a computer science student at the University of Houston with a minor in mathematics. 
         I truly enjoy learning about the subject and it's applications, and I'm excited to make an impact in the field.
         
          </p>
          <div className="flex justify-center">
            <a
              href="#connect"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Connect or Follow
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-full">
          <img
            className="object-cover object-center rounded"
            alt="Astronaut"
            src="./astronaut3.jpg"
          />
        </div>
      </div>
    </section>
  );
}