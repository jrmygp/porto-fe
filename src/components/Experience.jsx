/* eslint-disable react/no-unescaped-entities */
import AnimationWrapper from "./AnimationWrapper";

const Experience = () => {
  return (
    <div className="flex flex-col gap-10 px-2 md:px-[100px] lg:px-[400px] font-ubuntu">
      <AnimationWrapper delay={1}>
        <p className="opacity-80">EXPERIENCES</p>
      </AnimationWrapper>

      <div className="flex flex-col gap-20">
        <AnimationWrapper delay={1.25}>
          <div className="flex flex-col md:flex-row gap-10">
            <p>MAY 2026 - CURRENT</p>

            <div className="flex flex-col gap-2 max-w-96 md:max-w-[500px]">
              <p>Senior Full Stack Developer, SingaPay</p>

              <p className="text-sm text-justify opacity-55">
                Senior Full Stack Developer and technical lead responsible for driving the architecture, development,
                and delivery of high-availability financial platforms using Laravel, Golang, and React.js. Lead a
                5-member engineering team across technical strategy, architecture decisions, feature planning,
                production troubleshooting, and performance optimization, while serving as the primary technical owner
                for Virtual Account services and banking integrations. Expanded Virtual Account coverage from 4 to 11
                banking partners and helped support 250+ active merchants with over IDR 7 billion in daily transaction
                volume. Drive cross-functional collaboration with Product, Business, and Engineering teams to translate
                business requirements into scalable solutions, while leading major initiatives including the Payment
                Link platform revamp and International Money Withdrawal features.
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  React.js
                </div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Laravel</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Golang</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  PostgreSQL
                </div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  RabbitMQ
                </div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Fiber</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Docker</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  Tailwind
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={1.5}>
          <div className="flex flex-col md:flex-row gap-10">
            <p>JUNE 2024 - APRIL 2026</p>

            <div className="flex flex-col gap-2 max-w-96 md:max-w-[500px]">
              <p>Full Stack Engineer, Sprint Asia</p>

              <p className="text-sm text-justify opacity-55">
                Re-engineer Sprint Asia's products called Prezent and Sandeza Bills from monolithic to microservices.
                Build and maintain critical components used to construct Prezent and Sandeza Bills. Work closely with
                cross-functional teams, including developers, designers, product managers, project managers to implement
                and advocate for best practices in web accessibility.
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  React.js
                </div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Golang</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">MySQL</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Gin</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Gorm</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  RabbitMQ
                </div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Docker</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  Tailwind
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={1.75}>
          <div className="flex flex-col md:flex-row gap-10">
            <p>SEPT 2022 - JUNE 2024</p>

            <div className="flex flex-col gap-2 max-w-96 md:max-w-[500px]">
              <p>Frontend Developer, Kolabora Group</p>

              <p className="text-sm text-justify opacity-55">
                Developed, maintained, and shipped production code for Kolabora Group's product called Kolabora Smart
                System and Nest from zero. Worked with designer and backend developer to deliver both web app and mobile
                app to make user-ready product.
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  React.js
                </div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">Next.js</div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">
                  React Native
                </div>
                <div className="rounded-full py-1.5 px-4 bg-[#122b3c] text-sm items-center justify-center">MUI</div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default Experience;
