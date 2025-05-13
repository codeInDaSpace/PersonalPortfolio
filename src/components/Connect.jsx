import React from "react";
import {BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import {follows} from "../data";

export default function Connect(){
    return (
        <section id="connect">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4">
                        Connect With Me!
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Follow my Linkedin or Github to see more of my work or connect with me.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {follows.map((follow)=> (
                        <div key={follow.name} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-orange-300 rounded flex p-4 h-full items-center">
                            <img
                                src={follow.logo}
                                alt={follow.name}
                                className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                                />
                                <a
                                    href={follow.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="title-font font-medium text-gray-800 shover:underline"
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