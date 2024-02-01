import { memo, useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectCard from "./ProjectCard";
import axiosInstance from "@/config/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const fetchProjects = async () => {
    try {
      const res = await axiosInstance.get("/project");
      setProjects(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10">Projects</h1>
      <Carousel
        responsive={responsive}
        draggable
        swipeable
        infinite
        showDots
        renderButtonGroupOutside
        keyBoardControl
        itemClass="p-[10px] pb-[40px]"
      >
        {projects.length > 0 &&
          projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
                stacks={project.stacks}
              />
            );
          })}
      </Carousel>

      {/* <section className="grid grid-cols-1 gap-40 lg:grid-cols-2"></section> */}
    </div>
  );
}

export default memo(Projects);
