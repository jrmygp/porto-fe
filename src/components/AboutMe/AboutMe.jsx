import AnimatedButton from "../AnimatedButton/AnimatedButton";
import AnimationWrapper from "../AnimationWrapper";
import classes from "./AboutMe.module.css";
import profile from "@/assets/profile-hd2.jpg";

const AboutMe = () => {
  const downloadResumeHandler = () => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = "http://localhost:5173/src/assets/resume.pdf";
    a.download = "resume jeremy gerald puglisi";
    a.click();
    a.remove();
  };

  return (
    <div className={classes.container} id="about-me">
      <div className={classes["text_container"]}>
        <AnimationWrapper delay={0.5}>
          <div className="text-5xl text-left flex text-primary font-bold">ABOUT ME</div>
        </AnimationWrapper>

        <div className={`${classes.description} flex gap-5`}>
          <AnimationWrapper delay={1}>
            <div className="w-[600px] flex flex-col gap-2 text-left text-primary py-4 px-6 rounded-3xl">
              <p className="text-xl text-text-orange font-semibold">
                A dedicated Full Stack Developer based in South Tangerang, Indonesia
              </p>

              <p className="text-lg text-justify font-normal">
                I am a skilled Full Stack Developer with a strong focus on front-end technologies. With 2 years of
                experience in the industry, I have honed my expertise in modern front-end development, mastering
                technologies like HTML, CSS, React.js, Next.js, and Redux. I also have experience in mobile app
                development using React Native and Expo.
                <br />
                <br />
                On the back-end side, I am proficient in Node.js and Express.js, as well as Golang with the Gin
                framework. I have solid experience in managing databases with MySQL.
                <br />
                <br />
                My career began with 1 year and 9 months as a Front End Developer at Kolabora Group, where I deepened my
                knowledge in front-end development. Currently, I am a Full Stack Engineer at Sprint Asia, continuing to
                apply my skills across both front-end and back-end development.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={1.25}>
            <img alt="profile-img" src={profile} className="h-72 w-72 rounded-full object-cover" />
          </AnimationWrapper>
        </div>

        <div className="absolute top-10 right-10">
          <AnimatedButton onClick={downloadResumeHandler} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
