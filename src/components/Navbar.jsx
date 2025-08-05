import React, { useState, useEffect, useRef} from "react";

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
      <div className="text-2xl sm:text-4xl font-baloo font-medium pl-4 sm:pl-8">Alyssa Trejo</div>

      <button
        ref={buttonRef}
        className="flex flex-col justify-between w-10 h-8 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block h-1 bg-gray-800 rounded"></span>
        <span className="block h-1 bg-gray-800 rounded"></span>
        <span className="block h-1 bg-gray-800 rounded"></span>
      </button>

      {menuOpen && (
        <div ref={menuRef} className="absolute top-full right-0 mt-2 w-56 bg-amber-50 shadow rounded p-6 z-50">
          <a
            href="#about"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-roboto"
          >
            About
          </a>
          <a
            href="#experiences"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-roboto"
          >
            Experiences
          </a>
          <a
            href="#skills"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-roboto"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-roboto"
          >
            Projects
          </a>
          <a
            href="#connect"
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded text-lg font-roboto"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
