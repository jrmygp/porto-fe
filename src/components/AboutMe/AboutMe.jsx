import AnimatedButton from "../AnimatedButton/AnimatedButton";
import AnimationWrapper from "../AnimationWrapper";
import classes from "./AboutMe.module.css";

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
          <div>2 years of experience</div>
        </AnimationWrapper>

        <AnimationWrapper delay={1}>
          <div className="flex flex-col items-center">
            <div className={classes.current}>Sprint Asia as Full Stack Engineer</div>
            <div className={classes.past}>Kolabora Group as Front End Developer</div>
          </div>
        </AnimationWrapper>
        <br />
        <br />
        <AnimationWrapper delay={1.5}>
          <div className={classes.skills}>
            <div>Proficient in</div>
            <div>React</div>
            <div>Node</div>
            <div>Golang</div>
            <div>MERN Stack</div>
          </div>
        </AnimationWrapper>

        <div className="absolute top-10 right-10">
          <AnimatedButton onClick={downloadResumeHandler} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
