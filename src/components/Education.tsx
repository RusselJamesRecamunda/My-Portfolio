import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
// ✅ Import Swiper + Navigation
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import CollegeGraduated from "../assets/bu-logo.png";
import CiscoNetworkingAcademy from "../assets/cisco-logo.png";
import Google from "../assets/google-logo.jpg";
import CodeCademy from "../assets/codecademy.png";
import AmazonWebServices from "../assets/aws-logo.jpg";
import Microsoft from "../assets/microsoft_logo.png";

// ✅ Helper: chunk into groups of 6
const chunkArray = (arr: any[], size: number) => {
  return arr.reduce((acc: any[], _, i: number) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};
type EducationItem = {
  id: number;
  name: string;
  details: string;
  image: string;
  credential: string;
};

const educations: EducationItem[] = [
  {
    id: 1,
    name: "Graduated in Bicol University from the College of Science  | Issued June 2025",
    details: "2021 - 2025 | Cum Laude",
    image: CollegeGraduated,
    credential: "https://bicol-u.edu.ph/",
  },
  {
    id: 2,
    name: "Introduction to Modern AI | Issued March 2025",
    details: "Cisco Networking Academy Offered by DICT-ITU DTC Initiative",
    image: CiscoNetworkingAcademy,
    credential:
      "https://www.credly.com/badges/38ad17f8-c959-44f0-a676-0bbc1a232366",
  },
  {
    id: 3,
    name: "HTML Essentials | Issued June 2025",
    details: "Cisco Networking Academy Offered by DICT-ITU DTC Initiative",
    image: CiscoNetworkingAcademy,
    credential:
      "https://www.credly.com/badges/d59619b5-7520-410d-ab7e-8bc0195101d1",
  },
  {
    id: 4,
    name: "CSS Essentials | Issued July 2025",
    details: "Cisco Networking Academy Offered by DICT-ITU DTC Initiative",
    image: CiscoNetworkingAcademy,
    credential:
      "https://www.credly.com/badges/25f6dbc7-7221-4c12-acdb-b97137f1c627",
  },
  {
    id: 5,
    name: "Google Digital Marketing & E-commerce Specialization | Issued August 2025",
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
  {
    id: 7,
    name: "Learn React Course | Issued July 2025",
    details: "CodeCademy Certification",
    image: CodeCademy,
    credential:
      "https://www.codecademy.com/profiles/css0974142707/certificates/af00e5032d0a68cc84879983f5d8333b",
  },
  {
    id: 8,
    name: "Foundations of Prompt Engineering | Issued July 2025",
    details: "Amazon Web Services (AWS) Certification",
    image: AmazonWebServices,
    credential:
      "https://skillbuilder.aws/learn/VF6H4SZ1BU/foundations-of-prompt-engineering/7U8XFUVXDT",
  },
  {
    id: 9,
    name: "Microsoft Introduction to Computers | Issued June 2025",
    details: "Microsoft Certification",
    image: Microsoft,
    credential: "https://coursera.org/share/5c1adfc354f02d83f12905ceac1a1c51",
  },
];

const Education = () => {
  const educationChunks = chunkArray(educations, 3);

  return (
    <div className="bg-gray-900 text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative">
        <h2 className="text-5xl font-bold text-center mb-12">
          Education and Certifications
        </h2>

        {educations.length > 3 ? (
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={30}
            className="relative"
          >
            {educationChunks.map((chunk, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {chunk.map((education: EducationItem) => (

                    <div
                      key={education.id}
                      className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col"
                    >
                      <img
                        src={education.image}
                        alt={education.name}
                        className="rounded-lg mb-4 w-full h-48 object-cover"
                      />
                      <h3 className="text-2xl font-bold mb-2">
                        {education.name}
                      </h3>
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
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
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
        )}

        {/* ✅ Custom Swiper Navigation Styles */}
        <style>{`
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

export default Education;
