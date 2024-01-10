import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

function Navbar() {
  return (
    <nav className="flex justify-between items-center absolute top-0 left-0 w-full px-28 py-11">
      <p className="text-3xl">Jeremy's Portfolio</p>

      <div className="flex justify-between items-center gap-20">
        <p className="text-3xl">Projects</p>
        <p className="text-3xl">Technologies</p>
        <p className="text-3xl">About me</p>
      </div>

      <div className="flex justify-between items-center gap-20">
        <a href="https://github.com/jrmygp" target="_blank">
          <IoLogoGithub className="text-3xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/jeremy-puglisi-00b8bb1ab/"
          target="_blank"
        >
          <IoLogoLinkedin className="text-3xl" />
        </a>

        <a href="https://www.instagram.com/jrmygp/" target="_blank">
          <IoLogoInstagram className="text-3xl" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
