import AnimationWrapper from "../AnimationWrapper";

const AboutMe = () => {
  const careerStartYear = 2022;
  const yearsOfExperience = new Date().getFullYear() - careerStartYear;

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
              Senior Full Stack Developer with {yearsOfExperience}+ years of experience building scalable web and fintech applications
              across frontend, backend, and cloud infrastructure. Experienced in leading product development,
              modernizing engineering workflows with CI/CD and micro frontend architecture, and designing reliable
              systems that support business growth. Passionate about solving complex technical problems and delivering
              products that create real user value.
            </p>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
