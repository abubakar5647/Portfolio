import { About } from "./components/homepage/about";
import Contact from "./components/homepage/contact";
import { Experience } from "./components/homepage/Experience";
import { HeroSection } from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import { ScrollToTopButton } from "./components/layout/ScrollToTopButton";

function App() {
  return (
    <>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
