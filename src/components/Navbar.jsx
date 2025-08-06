import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#about", title: "About" },
  { href: "#experiences", title: "Experiences" },
  { href: "#skills", title: "Skills" },
  { href: "#projects", title: "Projects" },
  { href: "#connect", title: "Connect" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-amber-50/75 shadow">
      <div className="text-2xl sm:text-4xl font-baloo font-medium pl-4 sm:pl-8">
        Alyssa Trejo
      </div>

      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-lg font-roboto hover:text-emerald-600">
            {link.title}
          </a>
        ))}
      </div>


      <button
        ref={buttonRef}
        className="md:hidden flex flex-col justify-between w-8 h-6 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="block h-1.5 bg-gray-800 rounded"></span>
        <span className="block h-1.5 bg-gray-800 rounded"></span>
        <span className="block h-1.5 bg-gray-800 rounded"></span>
      </button>


      {menuOpen && (
        <div ref={menuRef} className="absolute top-full right-0 mt-2 w-56 bg-amber-50 shadow rounded p-4 z-50 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 px-4 hover:bg-gray-100 rounded text-lg font-roboto"
              onClick={() => setMenuOpen(false)} 
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}