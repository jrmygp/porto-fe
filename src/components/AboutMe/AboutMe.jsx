import AnimationWrapper from "../AnimationWrapper";

const AboutMe = () => {
  return (
    <div className="px-2 md:px-[100px] lg:px-[400px]">
      <div className="h-full flex flex-col items-center gap-5 justify-center font-ubuntu px-4 py-12 md:p-12">
        <div className="flex flex-col gap-10 text-left">
          <AnimationWrapper delay={1}>
            <p className="text-5xl font-semibold opacity-90">
              A dedicated Full Stack Developer based in Jakarta, Indonesia.
            </p>
          </AnimationWrapper>

          <AnimationWrapper delay={1.25}>
            <p className="text-lg text-justify font-normal opacity-70">
              I am a skilled Full Stack Developer with a strong focus on front-end technologies. With 2 years of
              experience in the industry, I have honed my expertise in modern front-end development, mastering
              technologies like HTML, CSS, React.js, Next.js, and Redux. I also have experience in mobile app
              development using React Native and Expo.
              <br />
              <br />
              On the back-end side, I am proficient in Node.js and Express.js, as well as Golang with the Gin framework.
              I have solid experience in managing databases with MySQL.
              <br />
              <br />
              My career began with 1 year and 9 months as a Front End Developer at Kolabora Group, where I deepened my
              knowledge in front-end development. Currently, I am a Full Stack Engineer at Sprint Asia, continuing to
              apply my skills across both front-end and back-end development.
            </p>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
