import React from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Connnect from "./components/Connect";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="text-gray-800 bg-gradient-to-br from-[#e7d7c9] via-[#ffd9dd] to-[#fef9f5] body-font">
      <Navbar />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Contact />
      <Connnect />
    </main>
  );
}