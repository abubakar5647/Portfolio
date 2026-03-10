import { ToastContainer } from "react-toastify";
import { About } from "./components/homepage/about";
import Contact from "./components/homepage/contact";
import { Experience } from "./components/homepage/Experience";
import { HeroSection } from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import { ScrollToTopButton } from "./components/layout/ScrollToTopButton";
import { ResumeSection } from "./components/homepage/resume-section";
import { OfflineModal } from "./components/layout/OfflineModal";

function App() {
  return (
    <>
      <OfflineModal />
      <HeroSection />
      <About />
      <ResumeSection />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <ToastContainer />
    </>
  );
}

export default App;
