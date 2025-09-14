import React from "react";
import {
  FaPaintBrush,
  FaHtml5,
  FaServer,
  FaCode,
  FaPenNib,
  FaBullhorn,
  FaTasks,
  FaBookOpen,
  FaRobot,
  FaComments,
  FaFolderOpen,
  FaChartLine,
  FaSearch,
  FaGithub
} from "react-icons/fa";

// ✅ Import Swiper + Navigation
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaBootstrap, FaJs, FaLaravel, FaPython, FaReact, FaResearchgate } from "react-icons/fa6";


const services = [
  {
    id: <FaPaintBrush className="text-blue-400 text-1xl" />,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: <FaHtml5 className="text-orange-500 text-1xl" />,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: <FaServer className="text-gray-400 text-1xl" />,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: <FaCode className="text-green-400 text-1xl" />,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: <FaPenNib className="text-yellow-400 text-1xl" />,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: <FaBullhorn className="text-red-500 text-1xl" />,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
  {
    id: <FaPaintBrush className="text-pink-400 text-1xl" />,
    title: "Landing Page Design",
    description: "Designing Landing Page with creativity and usability.",
  },
  {
    id: <FaReact className="text-cyan-400 text-1xl" />, 
    title: "React JS",
    description: "Developing responsive UIs with React.js",
  },
  {
    id: <FaLaravel className="text-red-500 text-1xl" />, 
    title: "Laravel Framework",
    description: "Building efficient web applications with Laravel",
  },
  {
    id: <FaPython className="text-yellow-400 text-1xl" />,
    title: "Python",
    description: "Creating versatile solutions with Python",
  },
  {
    id: <FaJs className="text-yellow-500 text-1xl" />, 
    title: "JavaScript",
    description: "Enhancing interactivity with JavaScript",
  },
  {
    id: <FaBootstrap className="text-purple-600 text-1xl" />, 
    title: "Bootstrap",
    description: "Designing responsive layouts using Bootstrap",
  },
  {
    id: <FaResearchgate className="text-green-500 text-1xl" />, 
    title: "Researching",
    description: "Exploring ideas through research and analysis",
  },
  {
    id: <FaTasks className="text-blue-500 text-1xl" />,
    title: "Requirement Analysis",
    description: "Gathering and analyzing system and business requirements",
  },
  {
  id: <FaBookOpen className="text-indigo-500 text-1xl" />,
  title: "English Language",
  description: "Improving communication and language proficiency",
  },

{
  id: <FaRobot className="text-pink-500 text-1xl" />, 
  title: "AI Prompting",
  description: "Crafting effective prompts for AI tools",
},
{
  id: <FaComments className="text-blue-500 text-1xl" />, 
  title: "Communication",
  description: "Conveying ideas clearly and effectively",
},
{
  id: <FaFolderOpen className="text-yellow-500 text-1xl" />, 
  title: "File Management",
  description: "Organizing and maintaining digital documents",
},
{
  id: <FaGithub className="text-black-500 text-1xl" />,
  title: "GitHub",
  description: "Collaborating and managing code repositories",
},
{
  id: <FaChartLine className="text-green-500 text-1xl" />, 
  title: "Analyzation",
  description: "Evaluating data to gain insights",
},
{
  id: <FaSearch className="text-indigo-500 text-1xl" />, 
  title: "SEO",
  description: "Optimizing content for search visibility",
},

];

// ✅ Helper: chunk into groups of 6
const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const Service = () => {
  const serviceChunks = chunkArray(services, 6);

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>

        {services.length > 6 ? (
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={30}
            className="relative"
          >
            {serviceChunks.map((chunk, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {chunk.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                          {service.title}
                        </h3>
                        <span>{service.id}</span>
                      </div>
                      <p className="mt-2 text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {service.title}
                  </h3>
                  <span>{service.id}</span>
                </div>
                <p className="mt-2 text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* ✅ Custom Swiper Navigation Styles */}
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            background: rgba(0, 0, 0, 0.5);
            padding: 12px;
            border-radius: 50%;
            font-size: 20px;
            transition: all 0.3s ease;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(0, 0, 0, 0.8);
            color: #4dabf7;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px;
            font-weight: bold;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Service;
