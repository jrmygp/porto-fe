import React from "react";

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-10">
      <section className="flex items-center flex-wrap gap-10">
        <div>
          <p className="text-white text-3xl">Call me:</p>
          <p className="text-white text-3xl">(+62) 85715431049</p>
        </div>

        <div>
          <p className="text-white text-3xl">Email:</p>
          <p className="text-white text-3xl break-all">jeremy.puglisi17@gmail.com</p>
        </div>
      </section>

      <section className="flex items-center gap-10 z-10">
        <a href="https://github.com/jrmygp" target="_blank">
          <IoLogoGithub className="text-5xl" />
        </a>

        <a href="https://www.linkedin.com/in/jeremy-puglisi-00b8bb1ab/" target="_blank">
          <IoLogoLinkedin className="text-5xl" />
        </a>

        <a href="https://www.instagram.com/jrmygp/" target="_blank">
          <IoLogoInstagram className="text-5xl" />
        </a>
      </section>
    </div>
  );
};

export default Footer;
