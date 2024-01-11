import { useState } from "react";

import Hero from "./components/Hero";
import MobileMenuButton from "./components/MobileMenuButton";
import Navbar from "./components/Navbar";
import classes from "./App.module.css";
import MobileMenuList from "./components/MobileMenuList";
import Projects from "./components/Projects";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div>
      <div className="hidden lg:block sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex lg:hidden sticky top-10 z-50 justify-end mr-5">
        <MobileMenuButton toggle={toggleMenu} isOpen={menuIsOpen} />
      </div>

      <div className="flex flex-col gap-64 px-20 lg:px-40 mt-20">
        <section id="projects">
          <Hero />
        </section>

        <section id="technologies">
          <Projects />
        </section>

        <section id="about-me"></section>

        <div className={`${classes.menu} ${!menuIsOpen && classes.close}`}>
          <MobileMenuList onClick={toggleMenu} />
        </div>
      </div>
    </div>
  );
}

export default App;
