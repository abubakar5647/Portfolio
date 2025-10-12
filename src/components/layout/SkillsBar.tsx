import { cn } from "@/lib/utils";

interface SkillsBarProps {
  skillName: string;
  percentage: number;
  proficiencyLevel: string;
  progressColor?: string;
  className?: string;
}

export function SkillsBar({
  skillName,
  percentage,
  proficiencyLevel,
  progressColor = "bg-cyan-400",
  className,
}: SkillsBarProps) {
  return (
    <div
      className={cn(
        "bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium text-lg">{skillName}</h3>
        <span className="text-slate-300 font-medium">{percentage}%</span>
      </div>

      <div className="mb-3">
        <div className="w-full bg-slate-700/50 rounded-full h-2">
          <div
            className={cn(
              "h-2 rounded-full transition-all duration-500 ease-out",
              progressColor
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className={cn("w-2 h-2 rounded-full", progressColor)} />
        <span className="text-slate-400 text-sm">{proficiencyLevel}</span>
      </div>
    </div>
  );
}
