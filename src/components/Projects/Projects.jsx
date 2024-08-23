import Nest from "@/assets/project/nest.png";
import KSS from "@/assets/project/kss.jpg";
import Prezent from "@/assets/project/prezent.jpg";
import SandezaBills from "@/assets/project/sandeza-bills.jpg";
import Healthymed from "@/assets/project/healthymed.png";
import Konekt from "@/assets/project/konekt.png";
import classes from "./Projects.module.css";
import AnimationWrapper from "../AnimationWrapper";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useState } from "react";

function Projects() {
  const [checked, setIsChecked] = useState(1);

  const openCard = (id) => {
    setIsChecked(id);
  };

  const projects = [
    {
      id: 1,
      title: "Kolabora Smart System",
      description: "Multi function productivity app",
      image: KSS,
      url: "https://kolabora.ksshub.com/",
      stacks: [],
    },
    {
      id: 2,
      title: "KSS Nest",
      description: "Mobile app version of Kolabora Smart System",
      image: Nest,
      url: "https://play.google.com/store/apps/details?id=com.kolabora.kssmobileapp&hl=id",
      stacks: [],
    },
    {
      id: 3,
      title: "Prezent",
      description: "Digital voucher management app",
      image: Prezent,
      url: "https://www.prezent.id/login",
      stacks: [],
    },
    {
      id: 4,
      title: "Sandeza Bills",
      description:
        "Sandeza Bills is a product that connects all billers into one single product to provide all PPOB at one.",
      image: SandezaBills,
      url: "https://sandeza.id/login",
      stacks: [],
    },
    {
      id: 5,
      title: "Healthymed",
      description: "An e-commerce based platform for medicine",
      image: Healthymed,
      url: "https://github.com/purwadhikafullstack/jcwd-2002-02-fe",
      stacks: [],
    },
    {
      id: 6,
      title: "Konekt",
      description: "Social media app",
      image: Konekt,
      url: "https://github.com/jrmygp/project-next.git",
      stacks: [],
    },
  ];

  return (
    <div className={`h-full ${classes.wrapper}`}>
      <AnimationWrapper delay={0.5}>
        <h1 className={classes.title}>MY PROJECTS</h1>
      </AnimationWrapper>

      <AnimationWrapper delay={0.75}>
        <div className={classes.container}>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                image={project.image}
                url={project.url}
                title={project.title}
                description={project.description}
                onClick={openCard}
                checked={checked === project.id}
              />
            );
          })}
        </div>
      </AnimationWrapper>
    </div>
  );
}

export default Projects;
