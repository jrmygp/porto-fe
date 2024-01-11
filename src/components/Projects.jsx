import React, { memo } from "react";

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10">Projects</h1>

      <section className="grid grid-cols-1 gap-40 lg:grid-cols-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </div>
  );
}

export default memo(Projects);
