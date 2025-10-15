import { Images } from "@/assets";
import { SkillsBar } from "@/components/layout/SkillsBar";
import { skill, skillsData } from "@/utils/skillsData";

export function Experience() {
  return (
    <div className="bg-[#0d1224]">
      <section
        id="skills"
        className="relative w-full bg-cover bg-center py-[7%]"
        style={{ backgroundImage: `url(${Images.Experience})` }}
      >
        <div className="absolute inset-0 bg-[#0d1224]/80"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center py-8 ">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                Skills & Expertise
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
            {skillsData.map((item) => (
              <div
                key={item.id}
                className="transform transition-all duration-300 hover:-translate-y-3"
              >
                <SkillsBar
                  skillName={item.skillName}
                  percentage={item.percentage}
                  proficiencyLevel={item.proficiencyLevel}
                  progressColor={item.progressColor}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:py-8 my-[4%]">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                Other Skills & Technologies
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="w-full overflow-hidden relative">
            <div className="animate-scrollX">
              {skill.concat(skill).map((s, index) => (
                <div
                  key={index}
                  className={`${s.borderColor} border rounded-xl p-6 flex flex-col items-center justify-center space-y-4 mx-3 min-w-[180px]`}
                >
                  <div className="flex items-center justify-center">
                    <img src={s.icon} alt={s.name} className="w-12 h-12" />
                  </div>
                  <h3 className="text-white font-medium text-lg text-center">
                    {s.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
