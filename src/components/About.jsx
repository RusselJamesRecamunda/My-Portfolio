import React from "react";
import AboutImage from "../assets/russ-creative.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-10">About Me</h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image */}
          <img
            src={AboutImage}
            alt="Russel James Recamunda"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />

          {/* Text */}
          <div className="flex-1">
            <p className="text-lg mb-8">
              Hi, I’m <span className="font-semibold">Russel James Recamunda</span>, 
              a graduate in Bachelor of Science in Information Technology and an aspiring 
              Full Stack Developer with a passion for building practical and impactful digital solutions. 
              With hands-on experience from academic and personal projects, I specialize in creating responsive 
              front-end interfaces, integrating robust back-end functionalities, and managing databases to deliver 
              seamless web applications. I enjoy working at the intersection of creativity and technology, 
              continuously learning new tools and frameworks to stay ahead in the ever-evolving tech landscape. 
              One of my goals is to contribute to real-world development projects, especially for businesses that 
              not only meet operational needs but also provide meaningful value to users. I am eager to contribute 
              professionally, grow through new challenges, and continue expanding my skills by adapting to the 
              fast-changing world of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
