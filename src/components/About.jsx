import React from "react";
import AboutImage from "../assets/russ-creative.jpg";
import { FaCheckCircle, FaExternalLinkSquareAlt } from "react-icons/fa";
import CollegeGraduated from "../assets/bu-logo.png";
import CiscoNetworkingAcademy from "../assets/cisco-logo.png";
import Google from "../assets/google-logo.jpg";

const educations = [
  {
    id: 1,
    name: "Graduated in Bicol University",
    details: "2021 - 2025 | Cum Laude",
    image: CollegeGraduated,
    credential: "https://bicol-u.edu.ph/",
  },
  {
    id: 2,
    name: "Introduction to Modern AI | Issued March 2025",
    details: "Cisco Networking Academy Offered by DICT-ITU DTC Initiative",
    image: CiscoNetworkingAcademy,
    credential: "https://www.credly.com/badges/38ad17f8-c959-44f0-a676-0bbc1a232366",
  },
  {
    id: 3,
    name: "HTML Essentials | Issued June 2025",
    details: "Cisco Networking Academy Offered by DICT-ITU DTC Initiative",
    image: CiscoNetworkingAcademy,
    credential: "https://www.credly.com/badges/d59619b5-7520-410d-ab7e-8bc0195101d1",
  },
  {
    id: 4,
    name: "CSS Essentials | Issued July 2025",
    details: "Cisco Networking Academy Offered by DICT-ITU DTC Initiative",
    image: CiscoNetworkingAcademy,
    credential: "https://www.credly.com/badges/25f6dbc7-7221-4c12-acdb-b97137f1c627",
  },
    {
    id: 5,
    name: "Google Digital Marketing & E-commerce Specialization | Issued July 2025",
    details: "Google Certification",
    image: Google,
    credential: "https://coursera.org/share/3880be51416220ba12dd2ed2e2062367",
  },
    {
    id: 6,
    name: "Accelerate Your Job Search with AI | Issued August 2025",
    details: "Google Certification",
    image: Google,
    credential: "https://coursera.org/share/1e521376fec2b28b50bff36a1bf7706d",
  },
];

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

        {/* Experience Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-10">Experiences</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                BU Information and Communications Technology Office - ICTO
              </h3>
              <p className="italic mb-2">On the Job Training | 2025</p>
              <div className="flex items-start space-x-2 text-lg">
                <FaCheckCircle className="text-blue-400 mt-1" />
                <span>
                  Contribution as a Backend Developer for the Bicol University Asset Management System
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                Capstone Project Research
              </h3>
              <p className="italic mb-2">Lead Developer | 2024-2025</p>
              <div className="flex items-start space-x-2 text-lg">
                <FaCheckCircle className="text-blue-400 mt-1" />
                <span>
                  Lead Developer for our school capstone project research{" "}
                  <span className="font-semibold">
                    BPO Bridge: A JOB RECRUITMENT PLATFORM FOR THE BPO INDUSTRY
                  </span>
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                Part Time Work
              </h3>
              <p className="italic mb-2">Staff Assistant | 2023-2025</p>
              <div className="flex items-start space-x-2 text-lg">
                <FaCheckCircle className="text-blue-400 mt-1" />
                <span>
                  Part Time Work at Ranulfo R. Lafuente CPA Lawyer Notary Public Office
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-black text-white py-20" id="education">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">
              Education and Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educations.map((education) => (
                <div
                  key={education.id}
                  className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col"
                >
                  <img
                    src={education.image}
                    alt={education.name}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2">{education.name}</h3>
                  <p className="text-gray-400 mb-4">{education.details}</p>

                  <div className="mt-auto">
                  <a
                    href={education.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#4dabf7] hover:bg-[#339af0] text-white px-4 py-2 rounded-full transition"
                  >
                    <FaExternalLinkSquareAlt className="text-xl" />
                    <span>See Credential</span>
                  </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
