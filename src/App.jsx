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
import Background from "./assets/texture1.gif";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
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
      document.documentElement.style.setProperty("--cursor-x", e.clientX + "px");
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
    <div className="flex flex-col gap-20">
      <div className="hidden lg:block fixed top-0 z-50 w-full">
        <Navbar />
      </div>

      <div className="flex lg:hidden sticky top-10 z-50 justify-end mr-5">
        <MobileMenuButton toggle={toggleMenu} isOpen={menuIsOpen} />
      </div>

      <div className={`${classes.menu} ${!menuIsOpen && classes.close}`}>
        <MobileMenuList onClick={toggleMenu} />
      </div>

      <section className="h-screen" style={{ backgroundImage: "url(/background-full.jpg)", backgroundSize: "cover" }}>
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

      <section className="h-screen relative border flex items-center">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-white filter blur-3xl opacity-10 animate-blob" />
        <AboutMe />
        {/* <div className="absolute top-10 left-40 w-72 h-72 rounded-full bg-yellow-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-pink-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
      </section>

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
