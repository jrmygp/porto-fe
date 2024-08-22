import { memo, useEffect, useRef } from "react";

import "react-multi-carousel/lib/styles.css";

import "react-responsive-modal/styles.css";

import Nest from "@/assets/project/nest.png";
import KSS from "@/assets/project/kss.png";
import Prezent from "@/assets/project/prezent.jpg";
import SandezaBills from "@/assets/project/sandeza-bills.jpg";
import Healthymed from "@/assets/project/healthymed.png";
import Konekt from "@/assets/project/konekt.png";
import classes from "./Projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects() {
  const boxRef = useRef(null);
  const contentRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Kolabora Smart System",
      description:
        "Multi function app which includes HRGA, CMS, and accounting modules. On top of that the app also provides built-in project & task management and real time chat feature for internal usage. This app intends to make people’s jobs easier to track and reduce the use of long-winded paper forms. After this application was implemented in this company, there has been a reduction in the use of paper forms for internal administration problems and an increase in ease of work between different divisions.",
      image: KSS,
      url: "https://kolabora.ksshub.com/",
      stacks: [],
    },
    {
      id: 2,
      title: "KSS Nest",
      description:
        "This is the mobile application version for Kolabora Smart System. Light multi functional app where users can be mobile with their work. Developed this application and also deployed it to the app store and play store.",
      image: Nest,
      url: "https://play.google.com/store/apps/details?id=com.kolabora.kssmobileapp&hl=id",
      stacks: [],
    },
    {
      id: 3,
      title: "Prezent",
      description:
        "Prezent offers comprehensive tools for your organization to develop a loyalty program, including point generation systems, campaign administration, digital voucher distribution, and comprehensive analytical reports. Prezent is designed to be incredibly user-friendly, making it simple to use.",
      image: Prezent,
      url: "",
      stacks: [],
    },
    {
      id: 4,
      title: "Sandeza Bills",
      description:
        "Currently, Sprint Asia Technology wants to provide a new Payment Point Online Bank (PPOB) service. Still, the billers available at Sprint Asia Technology are only primary billers without any backup billers. Sandeza Bills is a product that connects all billers into one single product to provide all PPOB at one.",
      image: SandezaBills,
      url: "",
      stacks: [],
    },
    {
      id: 5,
      title: "Healthymed",
      description:
        "An e-commerce based platform for medicine. This project I did for my final project at my bootcamp in Purwadhika School and developed with a team of 3 developers. My role in this project as full stack developer using React, Next, and express with fully working transactional flow from user end to admin end.",
      image: Healthymed,
      url: "",
      stacks: [],
    },
    {
      id: 6,
      title: "Konekt",
      description: "Simple social media platform where user can share their picture with customable caption.",
      image: Konekt,
      url: "",
      stacks: [],
    },
  ];

  useEffect(() => {
    const box = boxRef.current;
    const content = contentRef.current;
    const sensitivity = 20;

    const addCoors = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      box.style.backgroundPosition = `${x / sensitivity}px ${y / sensitivity}px`;
    };

    if (box) {
      box.addEventListener("mousemove", addCoors);
      content.addEventListener("mousemove", addCoors);
    }
  }, []);

  return (
    <div className={classes.container}>
      <div ref={boxRef} className={classes.projects} />
      <div ref={contentRef} className={classes["project-list"]}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(Projects);
