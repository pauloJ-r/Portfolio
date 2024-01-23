import React, { useRef, useEffect } from "react";
import Nav from "./assets/components/Navbar/Nav";
import Home from "./assets/sections/Home";
import About from "./assets/sections/About";
import Projects from "./assets/sections/Projects";
import Contact from "./assets/sections/Contact";
import { Links } from "./assets/constants";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToSection(homeRef);
  }, []);

  return (
    <>
      <div>
        <header>
          <Nav
            onHomeClick={() => scrollToSection(homeRef)}
            onAboutClick={() => scrollToSection(aboutRef)}
            onProjectsClick={() => scrollToSection(projectsRef)}
            onContactClick={() => scrollToSection(contactRef)}
          />
        </header>
        <main className="mt-20">
          <section ref={homeRef} className="pt-85 h-[375px] flex flex-col items-center justify-center content-center">
            <Home />
          </section>
          <section ref={aboutRef} className="pt-85 h-[375px] flex flex-col items-center justify-center content-center">
            <About />
          </section>
          <section ref={projectsRef} className="pt-85 h-[375px] flex flex-col items-center justify-center content-center">
            <Projects />
          </section>
          <section ref={contactRef} className="pt-85 h-[375px] flex flex-col items-center justify-center content-center">
            <Contact />
          </section>
          {/* Adicione outras seções aqui, conforme necessário */}
        </main>
      </div>
    </>
  );
}

export default App;