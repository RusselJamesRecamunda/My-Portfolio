import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaCss3,
  FaViber,
  FaFacebook,
  FaFacebookMessenger,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiGoogle,
  SiGoogledrive,
  SiGooglesheets,
  SiGmail,
  SiGeeksforgeeks,
  SiPython,
  SiNotion,
  SiDiscord,
  SiViber,
  SiZoom,
  SiFigma,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiSupabase,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import HeroImage from "../assets/russ.jpg";
import { FaMeta } from "react-icons/fa6";

const floatingIcons = [
  { Icon: SiReact, color: "#61DBFB" },
  { Icon: SiNodedotjs, color: "#3C873A" },
  { Icon: FaJs, color: "#F7DF1E" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#38BDF8" },
  { Icon: SiBootstrap, color: "#7952B3" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiCss3, color: "#1572B6" },
  { Icon: FaGithub, color: "#fff" },
  { Icon: FaLinkedin, color: "#0A66C2" },
  { Icon: FaNodeJs, color: "#3C873A" },
  { Icon: FaMeta, color: "#1877F2" },
  { Icon: FaCss3, color: "#1572B6" },
  { Icon: SiGoogle, color: "#4285F4" },
  { Icon: SiGoogledrive, color: "#34A853" },
  { Icon: SiGooglesheets, color: "#34A853" },
  { Icon: SiGmail, color: "#EA4335" },
  { Icon: SiGeeksforgeeks, color: "#0F9D58" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiNotion, color: "#000000" },
  { Icon: SiDiscord, color: "#5865F2" },
  { Icon: SiViber, color: "#7360F2" },
  { Icon: SiZoom, color: "#2D8CFF" },
  { Icon: SiFigma, color: "#F24E1E" },
  { Icon: SiPhp, color: "#777BB4" },
  { Icon: SiLaravel, color: "#FF2D20" },
  { Icon: SiSupabase, color: "#3ECF8E" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiPostgresql, color: "#4169E1" },
];

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-gray-900 px-6 md:px-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 z-10">
        {/* Right Side Image - shown first on mobile */}
        <div className="order-1 md:order-2 mb-6 md:mb-0">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-green-500"
          />
        </div>

        {/* Left Content */}
        <div className="order-2 md:order-1 text-center md:text-left max-w-xl">
          <p className="text-gray-300">Hello 👋, I'm</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Russel James Recamunda
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-500 mt-2">
            Full Stack Developer and Part-time Assistant
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            1 Year of Experience
          </p>

          <a
            href="https://www.linkedin.com/in/russel-james-recamunda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              class="text-white bg-[#0077B5] hover:bg-[#0077B5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077B5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#0077B5]/55 mt-4 me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.266 2.372 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.993 20.452H3.681V9h3.312v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.206 24 24 23.225 24 22.271V1.729C24 .774 23.206 0 22.225 0z" />
              </svg>
              Get in Touch
            </button>
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6 text-xl md:text-2xl text-white">
            <a href="https://www.facebook.com/russeljames.recamunda">
              <FaFacebook />
            </a>
            <a href="https://www.facebook.com/russeljames.recamunda">
              <FaFacebookMessenger />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=russeljamesrecamunda@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail />
            </a>
            <a href="https://github.com/RusselJamesRecamunda">
              <FaGithub />
            </a>
            <a
              href="viber://chat?number=%2B639388541155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaViber />
            </a>
          </div>
        </div>
      </div>


  {/* Floating Background Icons in a streaming river effect */}
    {[...Array(floatingIcons.length * 2)].map((_, i) => { 
      const { Icon, color } = floatingIcons[i % floatingIcons.length];

      const row = Math.floor(i / 10); 
      const col = i % 10;

      const startX = -1500; 
      const endX = 2000;    
      const posY = row * 100 - window.innerHeight / 3 - 80;

      const offset = col * 250; 
      const duration = 20;      

      return (
        <motion.div
          key={i}
          className="absolute text-5xl opacity-20"
          style={{ color }}
          initial={{ x: startX - offset, y: posY }}
          animate={{ x: endX }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
            delay: -(offset / 250) * 2, 
          }}
        >
          <Icon />
        </motion.div>
      );
    })}


    </section>
  );
};

export default Hero;
