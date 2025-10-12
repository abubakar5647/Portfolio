import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  status: string;
  image: string;
  description: string;
  technologies: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div className="fixed top-20 inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
        {/* Purple accent border */}

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-[1px]">
          <div className="bg-slate-800 rounded-2xl h-full w-full" />
        </div>

        <div className="relative z-10 p-6">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>

          {/* Project image */}
          <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="object-cover"
            />
          </div>

          {/* Project description */}
          <div className="mb-6">
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Technology tags */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    "bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Status:</span>
            <span
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium",
                project.status === "In Development" &&
                  "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
                project.status === "Completed" &&
                  "bg-green-500/20 text-green-400 border border-green-500/30",
                project.status === "In Progress" &&
                  "bg-blue-500/20 text-blue-400 border border-blue-500/30"
              )}
            >
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
