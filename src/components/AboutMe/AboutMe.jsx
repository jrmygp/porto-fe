import classes from "./AboutMe.module.css";

const AboutMe = () => {
  // const downloadResumeHandler = () => {
  //   const a = document.createElement("a");
  //   a.style.display = "none";
  //   a.href = "http://localhost:5173/src/assets/resume.pdf";
  //   a.download = "resume jeremy gerald puglisi";
  //   a.click();
  //   a.remove();
  // };

  return (
    <div className={classes["text_container"]}>
      <div>2 years of experience</div>

      <div className={classes.past}>Kolabora Group as Front End Developer</div>

      <div className={classes.current}>Sprint Asia as Full Stack Engineer</div>
    </div>
  );
};

export default AboutMe;
