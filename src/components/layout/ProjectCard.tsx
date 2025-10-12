import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  status: string;
  image: string;
  description: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}
export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const statusStyles: Record<Project["status"], string> = {
    "In Development":
      "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    Completed: "bg-green-500/20 text-green-400 border border-green-500/30",
    "In Progress": "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-800 transition-transform duration-300 hover:scale-105"
      )}
    >
      <div className="absolute inset-0 z-10 bg-purple-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span
        className={cn(
          "absolute top-4 left-4 z-20 px-3 py-1 text-xs font-medium rounded-full",
          statusStyles[project.status]
        )}
      >
        {project.status}
      </span>

      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />

      <div className="relative z-20 p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-slate-300 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-700 px-2 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-md bg-slate-700 px-2 py-1 text-xs text-slate-300">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
