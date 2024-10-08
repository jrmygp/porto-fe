/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { FaDiscord, FaInstagram, FaGithub, FaSteam, FaLinkedin, FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AnimationWrapper from "../AnimationWrapper";
import { Button2 } from "../Button/Button";

const Footer = () => {
  const downloadResumeHandler = () => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = "http://localhost:5173/src/assets/resume.pdf";
    a.download = "resume jeremy gerald puglisi";
    a.click();
    a.remove();
  };

  return (
    <div className="absolute w-full flex flex-col gap-20 px-2 md:px-[100px] lg:px-[400px] font-ubuntu h-full">
      <div className="flex flex-col items-start">
        <AnimationWrapper delay={1}>
          <p className="text-5xl opacity-90">Let's work together.</p>
        </AnimationWrapper>

        <AnimationWrapper delay={1.25}>
          <Button2 title="Download resume" onClick={downloadResumeHandler} />
        </AnimationWrapper>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-end gap-4">
          <AnimationWrapper delay={1.5}>
            <p className="text-2xl opacity-90">Follow me</p>
          </AnimationWrapper>

          <div className="flex items-center gap-4">
            <AnimationWrapper delay={1.75}>
              <a target="_blank" href="https://discord.com/users/239732139535368213">
                <FaDiscord size={28} />
              </a>
            </AnimationWrapper>

            <AnimationWrapper delay={2}>
              <a target="_blank" href="https://www.instagram.com/jrmygp/">
                <FaInstagram size={28} />
              </a>
            </AnimationWrapper>

            <AnimationWrapper delay={2.25}>
              <a target="_blank" href="https://github.com/jrmygp">
                <FaGithub size={28} />
              </a>
            </AnimationWrapper>

            <AnimationWrapper delay={2.5}>
              <a target="_blank" href="https://steamcommunity.com/profiles/76561198174082859/">
                <FaSteam size={28} />
              </a>
            </AnimationWrapper>

            <AnimationWrapper delay={2.75}>
              <a target="_blank" href="https://www.linkedin.com/in/jeremy-puglisi-00b8bb1ab/">
                <FaLinkedin size={28} />
              </a>
            </AnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <AnimationWrapper delay={3}>
            <p className="text-2xl opacity-90">Contact</p>
          </AnimationWrapper>

          <AnimationWrapper delay={3.25} className="flex items-center gap-2">
            <MdEmail size={20} />
            <p className="text-lg opacity-90">jeremy.puglisi17@gmail.com</p>
          </AnimationWrapper>

          <AnimationWrapper delay={3.5} className="flex items-center gap-2">
            <FaWhatsapp size={20} />
            <p className="text-lg opacity-90">+62 857 1543 1049</p>
          </AnimationWrapper>
        </div>
      </div>

      <div className="flex items-center mt-auto mb-10 self-center gap-1">
        <FaRegCopyright className="mt-0.5" size={12} />
        <p className="text-sm">2024 | Jeremy Gerald Puglisi</p>
      </div>
    </div>
  );
};

export default Footer;
