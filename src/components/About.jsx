import AboutImage from "../assets/russ-creative.jpg";
import { FaCheckCircle } from "react-icons/fa";

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
          <h2 className="text-5xl font-bold text-center mb-10">Experiences</h2>

          <div className="max-w-3xl mx-auto space-y-10">
            {/* Experience 1 */}
            <div>
              <h3 className="text-2xl font-semibold">BU Information and Communications Technology Office - ICTO</h3>
              <p className="text-blue-400 text-lg font-semibold">Backend Developer (On the Job Training)</p>
              <p className="italic mb-4">2025</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-400 mt-1 mr-2" />
                  <span>
                    Contributed as a Backend Developer for the Bicol University Asset Management System
                  </span>
                </li>
              </ul>
            </div>

             {/* Experience 2 */}
            <div>
              <h3 className="text-2xl font-semibold">Bicol University Quarta Organization</h3>
              <p className="text-blue-400 text-lg font-semibold">Web Developer | Full-Stack</p>
              <p className="italic mb-4">2025</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-400 mt-1 mr-2" />
                  <span>
                    Full-Stack Developer for the ongoing Bicol University Quarta E-Receipt System project. 
                  </span>
                </li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div>
              <h3 className="text-2xl font-semibold">Capstone Project Research</h3>
              <p className="text-blue-400 text-lg font-semibold">Lead Developer</p>
              <p className="italic mb-4">2024 - 2025</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-400 mt-1 mr-2" />
                  <span>
                    Lead Developer for our school capstone project for a Job Recruitment System.
                  </span>
                </li>
              </ul>
            </div>

            {/* Experience 4 */}
            <div>
              <h3 className="text-2xl font-semibold">Part Time Work</h3>
              <p className="text-blue-400 text-lg font-semibold">Staff Assistant</p>
              <p className="italic mb-4">2023 - 2025</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-400 mt-1 mr-2" />
                  <span>
                    Part Time Work at Ranulfo R. Lafuente CPA Lawyer Notary Public Office
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
