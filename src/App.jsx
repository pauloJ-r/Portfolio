import React, { useRef, useEffect } from "react";
import Nav from "./assets/components/Navbar/Nav";
import Home from "./assets/sections/Home";
import About from "./assets/sections/About";
import Projects from "./assets/sections/Projects";
import Contact from "./assets/sections/Contact";
import Footer from "./assets/components/Footer/Footer";

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
        <main>
          <section ref={homeRef}>
            <Home />
          </section>
          <section ref={aboutRef}>
            <About />
          </section>
          <section ref={projectsRef} >
            <Projects />
          </section>
          <section ref={contactRef} >
            <Contact />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;