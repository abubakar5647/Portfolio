import { Download } from "lucide-react";
import profileImage from "@/assets/abubakar.png";
import { PDF } from "@/assets";

export function ResumeSection() {
  return (
    <section id="resume" className="bg-[#0d1224] lg:py-12 text-white relative z-50">
      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Get My Resume
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pb-12 lg:pb-20">
        <div className="flex justify-center lg:justify-end">
          <div className="relative group w-[280px] sm:w-[320px] lg:w-[380px] h-[350px] sm:h-[400px] lg:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-[#2a2a46] bg-[#1a1443]/50 shadow-2xl">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-transparent border-t-4 border-r-4 border-violet-500 rounded-tr-xl z-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-transparent border-b-4 border-l-4 border-pink-500 rounded-bl-xl z-20"></div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              My Professional Journey
            </h2>
            <p className="text-[#d3d8e8] text-base sm:text-lg leading-relaxed max-w-lg opacity-90">
              Passionate about creating seamless user experiences and writing clean, efficient code. My resume details my experience, skills, and the projects that define my career as a developer.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <a
              href={PDF.abubakar}
              download="Abubakar_Resume.pdf"
              className="relative px-8 pl-10 py-4 bg-black rounded-full leading-none flex items-center gap-4 hover:bg-black/90 transition-all duration-300 border border-[#2a2a46]"
            >
              <span className="text-gray-200 group-hover:text-white transition duration-200 font-semibold text-lg tracking-wide">
                Download Resume
              </span>
              <div className="bg-[#1a1443] p-2 rounded-full group-hover:bg-violet-600 transition duration-300">
                <Download className="text-white" size={20} />
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400 font-light">
             <div className="w-12 h-[1px] bg-gray-600"></div>
             <span>Available for hire</span>
             <div className="w-12 h-[1px] bg-gray-600"></div>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full opacity-30 mt-10"></div>
    </section>
  );
}
