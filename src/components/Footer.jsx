import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Russ. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/russeljames.recamunda/" target="_blank" rel="noopener noreferrer">
              <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-full p-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                <FaFacebook />
              </button>
            </a>
            <a href="https://www.instagram.com/rzzz_zzzj/" target="_blank" rel="noopener noreferrer">
              <button type="button" class="text-white bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full p-3 text-center inline-flex items-center me-2 mb-2">
                  <FaInstagram/>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/russel-james-recamunda/" target="_blank" rel="noopener noreferrer">
              <button type="button" class="text-white bg-[#0077B5] hover:bg-[#0077B5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077B5]/50 rounded-full p-3 text-center inline-flex items-center dark:focus:ring-[#0077B5]/55">
                <FaLinkedin />
              </button>
            </a>
            <a href="https://github.com/RusselJamesRecamunda" target="_blank" rel="noopener noreferrer">
              <button type="button" class="text-white bg-[#333] hover:bg-[#333]/90 focus:ring-4 focus:outline-none focus:ring-gray-500 rounded-full p-3 text-center inline-flex items-center dark:focus:ring-gray-700 me-2 mb-2">
                <FaGithub />
              </button>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
