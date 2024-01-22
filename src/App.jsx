import Nav from "./assets/components/Navbar/Nav";
import Home from "./assets/sections/Home";
import About from "./assets/sections/About";
import Projects from "./assets/sections/Projects";
import Contact from "./assets/sections/Contact";
import { Links } from "./assets/constants";

function App() {
 
  return (
    <>
    <div>
      <header>
        <nav>
          <Nav/>
        </nav>
        <div>
          
        </div>
      </header>
      <main>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      </main>
    </div>
    </>
  )
}

export default App
