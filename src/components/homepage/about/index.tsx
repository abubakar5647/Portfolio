import { AboutCard } from "@/components/layout/AboutCard";
import { AboutCardsData, aboutMe, slides } from "@/utils/about-data";
import { useEffect, useState } from "react";

export function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <section id="about" className="bg-[#0d1224]">
      <div className="py-10">
        <div className="flex justify-center lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              About Me
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-[10%] mt-10">
          {AboutCardsData.map((card) => (
            <div
              key={card.id}
              className="transition-transform duration-300 hover:translate-y-3"
            >
              <AboutCard
                key={card.id}
                title={card.title}
                icon={card.icon}
                description={card.description}
              />
            </div>
          ))}
        </div>

        <div
          className="relative h-[25rem] w-[80%] bg-cover bg-center m-auto mt-15 rounded-md flex items-center justify-center text-center overflow-hidden group transition-all duration-700"
          style={{
            backgroundImage: `url(${current.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500 rounded-md"></div>

          <div className="relative z-10 p-6 rounded-md">
            <h3 className="text-white text-3xl font-bold mb-3">
              {current.title}
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl m-auto">
              {current.text}
            </p>
          </div>
        </div>

        <div className="border border-slate-700 mt-16 px-6 sm:px-10 py-6 sm:py-8 w-[90%] sm:w-[80%] mx-auto text-center space-y-4 sm:space-y-6 rounded-xl">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold leading-snug">
            {aboutMe.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {aboutMe.description}
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {aboutMe.hobby}
          </p>
        </div>
      </div>
    </section>
  );
}
