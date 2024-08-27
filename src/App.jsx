import { useEffect, useRef, useState } from "react";

import MobileMenuButton from "./components/MobileMenuButton";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import MobileMenuList from "./components/MobileMenuList";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutMe from "./components/AboutMe/AboutMe";
import AnimationWrapper from "./components/AnimationWrapper";
import Footer from "./components/Footer/Footer";
import ProjectsV2 from "./components/ProjectsV2/ProjectsV2";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const textRef = useRef(null);
  const parallaxRef = useRef(null);

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const parallaxElement = parallaxRef.current.container.current;

  //     // Trigger hide 300px before reaching the bottom
  //     const earlyTriggerOffset = 200;
  //     const scrolledToEarlyBottom =
  //       parallaxElement.scrollTop + parallaxElement.clientHeight >= parallaxElement.scrollHeight - earlyTriggerOffset;

  //     if (scrolledToEarlyBottom) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //   };

  //   const parallaxElement = parallaxRef.current.container.current;

  //   if (parallaxElement) {
  //     parallaxElement.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (parallaxElement) {
  //       parallaxElement.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, [parallaxRef]);

  return (
    <div className="h-full">
      <div className="hidden lg:block sticky top-0 z-50">
        <Navbar parallaxRef={parallaxRef} />
      </div>

      <div className="flex lg:hidden sticky top-10 z-50 justify-end mr-5">
        <MobileMenuButton toggle={toggleMenu} isOpen={menuIsOpen} />
      </div>

      <div className={`${classes.menu} ${!menuIsOpen && classes.close}`}>
        <MobileMenuList onClick={toggleMenu} />
      </div>

      <Parallax ref={parallaxRef} pages={4} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0}>
          <section className="h-full" style={{ backgroundImage: "url(/background-full.jpg)", backgroundSize: "cover" }}>
            <div className={classes.container}>
              <div className={`${classes["layer"]} ${classes["dark_layer"]}`}>
                <div
                  className={`text-6xl lg:text-8xl ${classes["text_container"]}`}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <div>JEREMY</div>
                  <div>GERALD</div>
                  <div>PUGLISI</div>
                </div>
              </div>

              <div className={`${classes["layer"]} ${classes["layer_red"]}`}>
                <div className={`${`text-6xl lg:text-8xl ${classes["text_container"]}`} ${classes["text_black"]}`}>
                  <div>SOFTWARE</div>
                  <div>ENGINEER</div>
                  <div>DEVELOPER</div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <div>
            <AboutMe />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <div id="projects">
            <div className="rounded-3xl bg-[#e7e8ea] flex flex-col justify-center items-center gap-20 py-20 px-2 lg:px-[400px]">
              <AnimationWrapper delay={0.15} className="items-center">
                <h1 className="text-5xl lg:text-8xl text-center text-text-primary font-bold">WHAT I DO</h1>
              </AnimationWrapper>

              <AnimationWrapper delay={0.5} className="items-center">
                <div className="flex flex-col items-center gap-1 opacity-55">
                  <div className={classes.arrow} />
                  <p className="text-text-primary">SCROLL</p>
                  <p className="text-text-primary">TO EXPLORE</p>
                  <div className={classes.arrow} />
                </div>
              </AnimationWrapper>

              <AnimationWrapper delay={0.75}>
                <ProjectsV2 />
              </AnimationWrapper>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1}>
          <Footer />
        </ParallaxLayer>
      </Parallax>

      <div
        className={`${classes["circle-wrapper"]} transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
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
