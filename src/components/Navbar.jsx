import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar(){
    return (
        <header className="bg-orange-300 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-gray-800 mb-4 md:mb-0">
                    <a href="#about" className="ml-0 text-2xl">
                        Alyssa Trejo
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:ml-4 pr-2 pl-3 md:border-gray-700     flex flex-wrap items-center text-base justify-center">
                    <a href="#experiences" className="mr-5 hover:text-white">
                        Work Experience
                    </a>
                    <a href="#projects" className="mr-5 hover:text-white">
                        Past Projects
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                </nav>
                <a
                href="#contact"
                className="inline-flex items-center bg-orange-300 border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0">
                Hire Me
                <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}