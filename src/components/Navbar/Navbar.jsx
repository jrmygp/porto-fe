/* eslint-disable react/jsx-no-target-blank */
import { memo, useEffect, useState } from "react";

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

import classes from "./Navbar.module.css";

function Navbar({ parallaxRef }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = parallaxRef.current.container.current.scrollTop;
      if (scrollY > 200) {
        setScrolled(true); // Add the class
      } else {
        setScrolled(false); // Remove the class
      }
    };

    const parallaxElement = parallaxRef.current.container.current;

    if (parallaxElement) {
      parallaxElement.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => {
        parallaxElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [parallaxRef]);

  return (
    <nav
      className={`flex justify-center sm:justify-between items-center w-full px-20 py-4 flex-wrap gap-10 transition-all duration-500 ${
        scrolled ? classes["navbar-scrolled"] : ""
      }`}
    >
      <p className="text-3xl">{`Jeremy's Portfolio`}</p>

      <div className="flex justify-between items-center gap-20 flex-wrap">
        <a className="text-3xl" href="#projects">
          Projects
        </a>
        <a className="text-3xl" href="#technologies">
          Technologies
        </a>
        <a className="text-3xl text-center" href="#about-me">
          About me
        </a>
      </div>

      <div className="flex justify-between items-center gap-20">
        <a href="https://github.com/jrmygp" target="_blank">
          <IoLogoGithub className="text-3xl" />
        </a>

        <a href="https://www.linkedin.com/in/jeremy-puglisi-00b8bb1ab/" target="_blank">
          <IoLogoLinkedin className="text-3xl" />
        </a>

        <a href="https://www.instagram.com/jrmygp/" target="_blank">
          <IoLogoInstagram className="text-3xl" />
        </a>
      </div>
    </nav>
  );
}

export default memo(Navbar);