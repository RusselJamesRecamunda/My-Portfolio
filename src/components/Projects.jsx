import BUQuarta from "../assets/bu-quarta.jpg";
import BPOBridge from "../assets/bpo-bridge.png";
import HiFiPrototype from "../assets/prototype.png";
import DataStructuresInC from "../assets/data-structures.jpg";
import PersonalPortfolio from "../assets/portfolio.jpg";
import EmployeeAttendance from "../assets/employee-attendance.jpg";
import { FaCode, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "BU E-Receipt System",
    technologies: "Laravel and React JS",
    image: BUQuarta,
    project_link: "https://www.facebook.com/share/1JUvmsm82t/",
  },
  {
    id: 2,
    name: "BPO Bridge: Job Recruitment System",
    technologies: "Laravel and Bootstrap",
    image: BPOBridge,
    project_link: "https://github.com/RusselJamesRecamunda/New_BPO_BRIDGE_SYSTEM.git",
  },
  {
    id: 3,
    name: "High Fidelity Prototype",
    technologies: "HTML, CSS, JavaScript",
    image: HiFiPrototype,
    project_link: "https://github.com/RusselJamesRecamunda/High_Fidelity_Prototype.git",
  },
  {
    id: 4,
    name: "Data Structures and Algorithms in C",
    technologies: "C Programming Language",
    image: DataStructuresInC,
    project_link: "https://github.com/RusselJamesRecamunda/Data_Structures_and_Algorithms.git",
  },
  {
    id: 5,
    name: "Portfolio Website",
    technologies: "React JS and Mantine with Tailwind CSS",
    image: PersonalPortfolio,
    project_link: "https://github.com/RusselJamesRecamunda/My-Portfolio.git",
  },
  {
    id: 6,
    name: "Web Development Employee Attendance System Project",
    technologies: "PHP, MySQL, HTML, CSS, JavaScript",
    image: EmployeeAttendance,
    project_link: "https://github.com/RusselJamesRecamunda/MasterProgrammers_Web_Dev_Project.git",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>

              <div className="mt-auto">
                <a
                  href={project.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#4dabf7] hover:bg-[#339af0] text-white px-4 py-2 rounded-full transition"
                >
                  <FaCode className="text-xl" />
                  <span>Go to Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
