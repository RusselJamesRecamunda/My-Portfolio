// Tools.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // ✅ FIXED
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  SiCanva,
  SiNotion,
  SiGoogledrive,
  SiGooglesheets,
  SiGmail,
  SiGoogle,
  SiOpenai,
  SiPostman,
  SiVercel,
  SiGithub,
  SiDiscord,
  SiGooglekeep,
  SiGooglecalendar,
  SiZoom,
  SiGooglemeet,
  SiGooglemarketingplatform,
  SiGooglemaps,
} from "react-icons/si";
import { FaFigma, FaGithub, FaFileWord, FaFileExcel, FaRobot, FaVideo, FaTeamspeak } from "react-icons/fa";
import { TbAsterisk, TbBrain, TbBrandVscode, TbLetterG } from "react-icons/tb";

const tools = [
  { id: 1, name: "Canva", Icon: SiCanva, color: "#00C4CC", link: "https://www.canva.com" },
  { id: 2, name: "Notion", Icon: SiNotion, color: "#000000", link: "https://www.notion.so" },
  { id: 3, name: "Google", Icon: SiGoogle, color: "#4285F4", link: "https://www.google.com" },
  { id: 4, name: "Google Drive", Icon: SiGoogledrive, color: "#34A853", link: "https://drive.google.com" },
  { id: 5, name: "Google Sheets", Icon: SiGooglesheets, color: "#0F9D58", link: "https://sheets.google.com" },
  { id: 6, name: "Gmail", Icon: SiGmail, color: "#EA4335", link: "https://mail.google.com" },
  { id: 7, name: "Figma", Icon: FaFigma, color: "#F24E1E", link: "https://www.figma.com" },
  { id: 8, name: "GitHub", Icon: FaGithub, color: "#FFFFFF", link: "https://github.com" },
  { id: 9, name: "ChatGPT", Icon: SiOpenai, color: "#10A37F", link: "https://chat.openai.com" },
  { id: 10, name: "Microsoft Word", Icon: FaFileWord, color: "#2B579A", link: "https://office.com" },
  { id: 11, name: "Microsoft Excel", Icon: FaFileExcel, color: "#217346", link: "https://office.com" },
  { id: 12, name: "Claude", Icon: TbAsterisk, color: "#FF6F3C", link: "https://claude.ai" },
   {
    id: 13,
    name: "Google Gemini",
    Icon: () => (
    <img 
    src="https://ai.google.dev/static/site-assets/images/share.png" 
    alt="Google Gemini" 
    style={{ width: "5em", height: "3em" }} 
    />
    ), 
    color: "#4285F4",
    link: "https://gemini.google.com",
  },
  {
    id: 14,
    name: "Perplexity AI",
    Icon: () => (
    <img 
    src="https://digino.org/wp-content/uploads/2023/12/perplexity-ai-logo.png" 
    alt="Perplexity AI" 
    style={{ width: "3.9em", height: "3em" }} 
    />
    ), 
    color: "#00A67E",
    link: "https://www.perplexity.ai",
  },
  { id: 15, 
    name: "GitHub Copilot", 
    Icon: () => (
    <img 
    src="https://user-images.githubusercontent.com/28068/123712981-02676c80-d839-11eb-919a-96ee0c895e15.png" 
    alt="Github Copilot" 
    style={{ width: "3.9em", height: "3em" }} 
    />
    ),  
    color: "#181717", 
    link: "https://github.com/features/copilot" 
  },
  { id: 16, name: "VS Code", Icon: TbBrandVscode, color: "#007ACC", link: "https://code.visualstudio.com" },
  { id: 17, name: "Postman", Icon: SiPostman, color: "#FF6C37", link: "https://www.postman.com" },
  { id: 18, name: "Vercel", Icon: SiVercel, color: "#000000", link: "https://vercel.com" },
  { id: 19, 
    name: "CapCut", 
     Icon: () => (
    <img 
    src="https://www.moosoft.com/wp-content/uploads/2022/01/CapCut.png" 
    alt="CapCut" 
    style={{ width: "3em", height: "3em" }} 
    />
    ),  
    color: "#000000", 
    link: "https://www.capcut.com" },
  { id: 20,
    name: "Grammarly", 
     Icon: () => (
    <img 
    src="https://companieslogo.com/img/orig/grammarly-0336804c.png?t=1701273451" 
    alt="CapCut" 
    style={{ width: "3em", height: "3em" }} 
    />
    ),  
    color: "#00A67E", 
    link: "https://www.grammarly.com" },
{ 
    id: 21, 
    name: "Discord", 
    Icon: SiDiscord, 
    color: "#5865F2", // official brand color
    link: "https://discord.com"
  },
 { 
    id: 23, 
    name: "QuillBot", 
     Icon: () => (
    <img 
      src="https://hdrobots.com/wp-content/uploads/2023/05/QuillBot_2019_28Icon29-logo.png" 
      alt="QuillBot Logo" 
      style={{ width: "3em", height: "3em" }} 
    />
  ), 
    color: "#499557", // official QuillBot green
    link: "https://quillbot.com"
  },
  { 
  id: 24, 
  name: "DeepSeek", 
  Icon: () => (
    <img 
      src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png" 
      alt="DeepSeek Logo" 
      style={{ width: "3em", height: "3em" }} 
    />
  ), 
  color: "#000000", 
  link: "https://www.deepseek.com" 
},
 {
    id: 25,
    name: "Google Keep",
    Icon: SiGooglekeep,
    color: "#FFBB00",
    link: "https://keep.google.com",
  },
  {
    id: 26,
    name: "Google Calendar",
    Icon: SiGooglecalendar,
    color: "#4285F4",
    link: "https://calendar.google.com",
  },
  {
    id: 27,
    name: "Zoom",
    Icon: SiZoom,
    color: "#2D8CFF",
    link: "https://zoom.us",
  },
  {
    id: 28,
    name: "Google Meet",
    Icon: SiGooglemeet,
    color: "#00897B",
    link: "https://meet.google.com",
  },
  {
  id: 29,
  name: "Google Ads",
  Icon: SiGooglemarketingplatform,
  color: "#4285F4",
  link: "https://ads.google.com",
},
{
  id: 30,
  name: "Google Maps",
  Icon: SiGooglemaps,
  color: "#34A853",
  link: "https://maps.google.com",
},

];

const Tools = () => {
  return (
    <div className="bg-gray-900 text-white py-20" id="tools">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12">Tools I Use</h2>

        <Swiper
          modules={[Navigation, Pagination]} // ✅ FIXED
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={false}
          grabCursor
        >
          {tools.map((tool) => {
            const Icon = tool.Icon;
            return (
              <SwiperSlide key={tool.id}>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center"
                  aria-label={tool.name}
                >
                  <Icon size={48} style={{ color: tool.color }} />
                  <h3 className="text-sm font-bold mt-4">{tool.name}</h3>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Tools;
