import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navMenu } from "@/utils/nav-menu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full text-white shadow-md z-50 ${
        scrolled ? "bg-[#14112a]  drop-shadow-[0_0_0.2black]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-main">
            Abubakar Dev
          </h1>

          <div className="hidden md:flex space-x-10">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="relative text-lg font-medium group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#9f59f7] via-[#5877f7] to-[#15a8de] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1224] px-4 pb-4 space-y-2">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-lg font-medium hover:text-[#16f2b3] transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
