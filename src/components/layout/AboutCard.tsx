import type { LucideIcon } from "lucide-react";

interface AboutCardProps {
  title: string;
  icon: LucideIcon;
  description?: string;
}

export function AboutCard({ title, icon: Icon, description }: AboutCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden max-w-sm ">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.01),rgba(0,0,0,0.9))]" />

      <div className="relative bg-slate-900/50 border border-slate-700 rounded-xl p-8 h-full flex flex-col items-center text-center">
        <div className="bg-purple-600 p-3 rounded-lg mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base mt-1">{description}</p>
      </div>
    </div>
  );
}
