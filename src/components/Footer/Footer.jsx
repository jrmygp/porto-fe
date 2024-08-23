/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useRef } from "react";
import golang from "@/assets/golang.png";
import eye from "@/assets/eye.jpeg";
import classes from "./Footer.module.css";

import { FaDiscord, FaInstagram, FaGithub, FaSteam, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import AnimationWrapper from "../AnimationWrapper";

const Footer = () => {
  const anchorRef = useRef(null);
  const eyeRefs = useRef([]);

  useEffect(() => {
    const angle = (cx, cy, ex, ey) => {
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy, dx);
      const deg = (rad * 180) / Math.PI;
      return deg;
    };

    const handleMouseMove = (e) => {
      const anchor = anchorRef.current;
      const rect = anchor.getBoundingClientRect();
      const anchorX = rect.left + rect.width / 2;
      const anchorY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      eyeRefs.current.forEach((eye) => {
        if (eye) {
          eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex h-full relative">
      <div className={`${classes.quote} absolute right-20 top-40 w-72`}>
        <AnimationWrapper delay={2} className="flex flex-col">
          <p className="text-4xl text-left mb-2 underline">Quote of the day</p>
          <p className="text-xl text-left italic">
            “Dreams without goals are just dreams, and ultimately they fuel disappointment. On the road to achieving
            your dreams, you must apply discipline but more importantly consistency, because without commitment you'll
            never start, but without consistency you'll never finish.”
          </p>
        </AnimationWrapper>
      </div>

      <div className={`${classes.text} absolute top-40 w-full px-20`}>
        <p className="text-8xl mb-4">Follow me</p>
        <div className="flex items-center gap-4">
          <AnimationWrapper delay={0.5}>
            <a
              target="_blank"
              className="h-20 w-20 rounded-full flex items-center justify-center hover:h-24 hover:w-24 hover:rotate-45 transition-all duration-500"
              style={{ background: "rgb(235, 89, 57)" }}
              href="https://discord.com/users/239732139535368213"
            >
              <FaDiscord size={45} />
            </a>
          </AnimationWrapper>

          <AnimationWrapper delay={0.75}>
            <a
              target="_blank"
              className="h-20 w-20 rounded-full flex items-center justify-center hover:h-24 hover:w-24 hover:-rotate-45 transition-all duration-500"
              style={{ background: "rgb(235, 89, 57)" }}
              href="https://www.instagram.com/jrmygp/"
            >
              <FaInstagram size={45} />
            </a>
          </AnimationWrapper>

          <AnimationWrapper delay={1}>
            <a
              target="_blank"
              className="h-20 w-20 rounded-full flex items-center justify-center hover:h-24 hover:w-24 hover:rotate-45 transition-all duration-500"
              style={{ background: "rgb(235, 89, 57)" }}
              href="https://github.com/jrmygp"
            >
              <FaGithub size={45} />
            </a>
          </AnimationWrapper>

          <AnimationWrapper delay={1.25}>
            <a
              target="_blank"
              className="h-20 w-20 rounded-full flex items-center justify-center hover:h-24 hover:w-24 hover:-rotate-45 transition-all duration-500"
              style={{ background: "rgb(235, 89, 57)" }}
            >
              <FaSteam size={45} />
            </a>
          </AnimationWrapper>

          <AnimationWrapper delay={1.5}>
            <a
              target="_blank"
              className="h-20 w-20 rounded-full flex items-center justify-center hover:h-24 hover:w-24 hover:rotate-45 transition-all duration-500"
              style={{ background: "rgb(235, 89, 57)" }}
              href="https://www.linkedin.com/in/jeremy-puglisi-00b8bb1ab/"
            >
              <FaLinkedin size={45} />
            </a>
          </AnimationWrapper>
        </div>
      </div>

      <div
        ref={anchorRef}
        id="anchor"
        className="h-40 w-full self-end rounded-t-full relative"
        style={{ background: "rgb(235, 89, 57)" }}
      >
        <div className="absolute flex items-center gap-1 bottom-5 left-20 text-lg">
          <FaRegCopyright />
          <p>Created by Jeremy Gerald Puglisi</p>
        </div>

        <img
          src={golang}
          alt="golang"
          className="absolute left-0 right-0 h-96 w-h-96 ml-auto mr-auto"
          style={{ top: "-100px" }}
        />
        <img
          ref={(el) => (eyeRefs.current[0] = el)}
          className="absolute w-20 h-30 rounded-full"
          src={eye}
          style={{ top: "-40px", left: "990px" }}
        />
        <img
          ref={(el) => (eyeRefs.current[1] = el)}
          className="absolute w-20 h-30 rounded-full"
          src={eye}
          style={{ top: "-40px", left: "850px" }}
        />
      </div>
    </div>
  );
};

export default Footer;
