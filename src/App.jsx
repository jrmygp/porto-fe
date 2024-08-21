import { useEffect, useRef, useState } from "react";

// import Hero from "./components/Hero";
import MobileMenuButton from "./components/MobileMenuButton";
import Navbar from "./components/Navbar";
import classes from "./App.module.css";
import MobileMenuList from "./components/MobileMenuList";
// import Projects from "./components/Projects";
// import TechStacks from "./components/TechStacks";
// import AdditionalTech from "./components/AdditionalTech";
// import AboutMe from "./components/AboutMe";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutMe from "./components/AboutMe/AboutMe";
import Button from "./components/Button/Button";
// import Footer from "./components/Footer";
// import AnimationWrapper from "./components/AnimationWrapper";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const textRef = useRef(null);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const onMouseEnter = () => {
    document.documentElement.style.setProperty("--cursor-size", "240px");
  };

  const onMouseLeave = () => {
    document.documentElement.style.setProperty("--cursor-size", "32px");
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      document.documentElement.style.setProperty("--cursor-x", e.clientX + 5 + "px");
      document.documentElement.style.setProperty("--cursor-y", e.clientY + "px");
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.innerHTML = text?.innerText
        .split("")
        .map((char, i) => {
          return `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`;
        })
        .join("");
    }
  }, []);

  return (
    <div>
      <div className="hidden lg:block sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex lg:hidden sticky top-10 z-50 justify-end mr-5">
        <MobileMenuButton toggle={toggleMenu} isOpen={menuIsOpen} />
      </div>

      <div className={`${classes.menu} ${!menuIsOpen && classes.close}`}>
        <MobileMenuList onClick={toggleMenu} />
      </div>

      <Parallax pages={2} style={{ top: "0", left: "0" }} className={classes.animation}>
        <ParallaxLayer offset={0} speed={0.25}>
          <section className="h-full" style={{ backgroundImage: "url(/background-full.jpg)", backgroundSize: "cover" }}>
            <div className={classes.container}>
              <div className={`${classes["layer"]} ${classes["dark_layer"]}`}>
                <div className={classes["text_container"]} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <div>JEREMY</div>
                  <div>GERALD</div>
                  <div>PUGLISI</div>
                </div>
              </div>

              <div className={`${classes["layer"]} ${classes["layer_red"]}`}>
                <div className={`${classes["text_container"]} ${classes["text_black"]}`}>
                  <div>SOFTWARE</div>
                  <div>ENGINEER</div>
                  <div>DEVELOPER</div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} factor={3}>
          <div className={`${classes["animation_layer"]} ${classes.image1}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={0.5}>
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={0.25}>
          <div className="flex w-full items-center justify-center">
            <Button title="Check My Project" />
          </div>
        </ParallaxLayer>
      </Parallax>

      <div className={classes["circle-wrapper"]}>
        <div className={classes.circle}>
          <div className={classes.text}>
            <p ref={textRef}>Scroll Down To See More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
