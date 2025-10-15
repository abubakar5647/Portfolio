import { Images } from "@/assets";
import ProjectCard from "@/components/layout/ProjectCard";
import ProjectModal from "@/components/layout/ProjectModal";
import { projects } from "@/utils/project-data";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  return (
    <div className="bg-[#0d1224]">
      <section
        id="projects"
        className="relative w-full bg-cover bg-center pb-10"
        style={{ backgroundImage: `url(${Images.Skills})` }}
      >
        <div className="absolute inset-0 bg-[#0d1224]/80"></div>
        <div className="relative z-10 sm:px-6 w-[85%] m-auto ">
          {/* Section Heading */}
          <div className="flex justify-center pb-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="hidden sm:block w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] text-white px-4 sm:px-6 py-2 text-lg sm:text-xl rounded-md text-center">
                Featured Projects
              </span>
              <span className="hidden sm:block w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </section>
    </div>
  );
}
