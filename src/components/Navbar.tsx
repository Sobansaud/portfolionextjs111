



import React, { useState } from 'react';
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"; // Close icon bhi import karenge

const Navbar = () => {
  // State for handling mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function to open/close menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">
          {/* You can add a logo or your name here */}
          <a href="#" className="text-2xl font-bold">My Portfolio</a>
        </div>

        {/* Desktop Menu */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <IoCloseSharp size={30} />
          ) : (
            <IoMenuSharp size={30} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center mt-6 space-y-6 md:hidden">
          <li className="menuLink"><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li className="menuLink"><a href="#about" onClick={toggleMenu}>About</a></li>
          <li className="menuLink"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li className="menuLink"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li className="menuLink"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
