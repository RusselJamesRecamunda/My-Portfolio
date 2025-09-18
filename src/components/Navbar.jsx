import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav
      className={`fixed top-0 left-0 w-full px-6 md:px-16 lg:px-24 shadow-md z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#339af0]/40 backdrop-blur-sm" : "bg-gray-900"
      }`}
      >

      <div className="container py-3 flex justify-between items-center text-white">
        {/* Logo / Name */}
        <div className="text-xl md:text-2xl font-bold">Russ Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-300">
            Services
          </a>
          <a href="#project" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden flex flex-col items-center space-y-4 pb-6 text-white"
          >
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-gray-200 mt-4">
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              About Me
            </a>
            <a href="#service" onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              Services
            </a>
            <a href="#project" onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
