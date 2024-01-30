import { memo, useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import axiosInstance from "@/config/api";

function Projects() {
  const [projects, setProjects] = useState([]);

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

      <section className="grid grid-cols-1 gap-40 lg:grid-cols-2">
        {projects.length > 0 &&
          projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
              />
            );
          })}
      </section>
    </div>
  );
}

export default memo(Projects);
