import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#projects", title: "Projects" },
  { href: "#experiences", title: "Experiences" },
  { href: "#skills", title: "Skills" },
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
    <nav className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-xl border border-gray-100 rounded-full shadow-lg shadow-gray-200/50">
        <div className="text-xl sm:text-2xl font-baloo font-medium">
          <a href="#about" className="text-gray-800 hover:text-emerald-600 transition-colors">
            Alyssa Trejo
          </a>
        </div>


      {/* NEW CODE */}
<div className="hidden md:flex items-center space-x-8">
  {navLinks.map((link) => (
    <a 
      key={link.href} 
      href={link.href} 
      className="text-sm font-mono font-bold uppercase tracking-widest text-gray-600 hover:text-emerald-600 transition-colors"
    >
      {link.title}
    </a>
  ))}
  <a href="#contact" className="bg-gray-800 text-white font-mono text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-emerald-600 transition-all shadow-md">
    Let's Talk
  </a>
</div>


     {/* NEW CODE */}
        <div
          ref={buttonRef}
          className="md:hidden flex flex-col justify-between w-6 h-4 cursor-pointer group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>



      {menuOpen && (
  <div 
    ref={menuRef} 
    className="absolute top-16 right-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 z-50 md:hidden animate-in fade-in zoom-in duration-200"
  >
    <div className="flex flex-col space-y-2">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="block py-3 px-4 hover:bg-emerald-50 rounded-xl text-sm font-mono font-bold uppercase tracking-widest text-gray-700 hover:text-emerald-600 transition-colors"
          onClick={() => setMenuOpen(false)} 
        >
          {link.title}
        </a>
      ))}
      
      {/* Adding the CTA to the mobile menu too for consistency */}
      <hr className="border-gray-100 my-2" />
      <a 
        href="#contact" 
        className="block text-center bg-gray-800 text-white font-mono text-xs font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-emerald-600 transition-all"
        onClick={() => setMenuOpen(false)}
      >
        Let's Talk
      </a>
    </div>
  </div>
)}
      </div>
    </nav>
  );
}