import { useEffect, useRef, useState } from "react";

import MobileMenuButton from "./components/MobileMenuButton";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import MobileMenuList from "./components/MobileMenuList";
import AboutMe from "./components/AboutMe/AboutMe";
import AnimationWrapper from "./components/AnimationWrapper";
import Footer from "./components/Footer/Footer";
import ProjectsV2 from "./components/ProjectsV2/ProjectsV2";

function App() {
  const indicatorRef = useRef(null);
  const textRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;

      // Calculate the distance from the bottom
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

      // Set isNearBottom to true if the distance is less than or equal to 500px
      if (distanceFromBottom <= 500) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <div className="hidden lg:block fixed top-0 z-50 w-full">
        <Navbar />
      </div>

      <div className="flex lg:hidden fixed top-10 right-0 z-50 justify-end mr-5">
        <MobileMenuButton toggle={toggleMenu} isOpen={menuIsOpen} />
      </div>

      <div className={`${classes.menu} ${!menuIsOpen && classes.close}`}>
        <MobileMenuList onClick={toggleMenu} />
      </div>

      <section className="h-screen" style={{ backgroundImage: "url(/background-full.jpg)", backgroundSize: "cover" }}>
        <div className={classes.container}>
          <div className={`${classes["layer"]} ${classes["dark_layer"]}`}>
            <div
              className={`text-5xl md:text-8xl ${classes["text_container"]}`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div>JEREMY</div>
              <div>GERALD</div>
              <div>PUGLISI</div>
            </div>
          </div>

          <div className={`${classes["layer"]} ${classes["layer_red"]}`}>
            <div className={`${`text-5xl md:text-8xl ${classes["text_container"]}`} ${classes["text_black"]}`}>
              <div>SOFTWARE</div>
              <div>ENGINEER</div>
              <div>DEVELOPER</div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen relative flex items-center" id="about-me">
        <div className="absolute top-20 right-20 w-40 h-40 md:w-[500px] md:h-[500px] rounded-full bg-white filter blur-3xl opacity-10 animate-blob" />
        <AboutMe />
      </section>

      <section className="h-[700px] md:h-[500px] relative" id="technologies">
        <div className="absolute top-10 left-40 w-40 h-40 md:w-[500px] md:h-[500px] rounded-full bg-yellow-300  filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-20 w-40 h-40 md:w-[500px] md:h-[500px] rounded-full bg-pink-300  filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="flex flex-col gap-10 px-2 md:px-[100px] lg:px-[400px] font-ubuntu">
          <AnimationWrapper delay={1}>
            <p className="opacity-80">TECH STACKS & SKILLS</p>
          </AnimationWrapper>

          <AnimationWrapper delay={1.5}>
            <div className="flex items-center gap-5 flex-wrap">
              <p className="text-5xl">React.JS</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Next.JS</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">React Native</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Golang</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Node.JS</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Express</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Gin & GORM</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Sequelize</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">MySQL</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Redux</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">AWS</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Docker</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Firebase</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">Expo</p>
              <div className="bg-white rounded-full h-2 w-2" />
              <p className="text-5xl">HTML & CSS</p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      <section className="h-screen relative" id="projects">
        <div className="absolute top-40 right-20 w-40 h-40 md:w-[500px] md:h-[500px] rounded-full bg-pink-300 filter blur-3xl mix-blend-luminosity opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-80 w-40 h-40 md:w-[500px] md:h-[500px] rounded-full bg-blue-300 filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <ProjectsV2 />
      </section>

      <section className="h-[500px] relative">
        <div className="absolute left-32 right-0 ml-auto mr-auto w-40 h-40 md:w-[500px] md:h-[500px] rounded-full bg-green-300 filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -left-32 right-0 ml-auto mr-auto w-40 h-40 md:w-[500px] md:h-[500px] rounded-full bg-red-300 filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <Footer />
      </section>

      <div
        ref={indicatorRef}
        className={`${classes["circle-wrapper"]} ${
          isNearBottom ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
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
