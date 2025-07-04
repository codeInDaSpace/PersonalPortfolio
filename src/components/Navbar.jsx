import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-amber-50/75 shadow">
      <div className="text-2xl sm:text-4xl font-mono pl-4 sm:pl-8">Alyssa Trejo</div>

      <div
        className="flex flex-col justify-between w-10 h-8 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block h-1 bg-gray-800 rounded"></span>
        <span className="block h-1 bg-gray-800 rounded"></span>
        <span className="block h-1 bg-gray-800 rounded"></span>
      </div>

      {/* Bigger dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-amber-50 shadow rounded p-6 z-50">
          <a
            href="#about"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-mono"
          >
            About
          </a>
          <a
            href="#experiences"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-mono"
          >
            Experiences
          </a>
          <a
            href="#skills"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-mono"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-mono"
          >
            Projects
          </a>
          <a
            href="contact"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg  "
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
