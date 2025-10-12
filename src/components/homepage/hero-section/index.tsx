import { Images } from "@/assets";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { personalData } from "@/utils/personal-data";
import { useEffect, useState } from "react";

export function HeroSection() {
  const roles = [
    "React Native Developer",
    "React.js Developer",
    "Next.js Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen w-full bg-[#0d1224] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${Images.Hero})`,
      }}
    >
      <Navbar />
      <section className="flex items-center justify-center h-screen text-center">
        <div>
          <h1 className="mt-30 text-6xl bg-gradient-main font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_white] animate-float">
            {personalData.name}
          </h1>

          <div>
            <h5 className="mt-6 max-w-3xl mx-auto text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
              I’m a passionate{" "}
              <span className="text-[#16f2b3] font-semibold transition-all duration-500">
                {roles[index]}
              </span>{" "}
              and {personalData.description}
            </h5>
          </div>
          <div className="flex justify-center pt-2 mt-10">
            <Button
              onClick={scrollToContact}
              type="submit"
              className="bg-gradient-to-r from-[#e91e8c] to-[#8b5cf6] hover:from-[#d11a7d] hover:to-[#7c4ee0] text-white font-medium px-8 py-6 rounded-full text-base uppercase tracking-wide flex items-center"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
