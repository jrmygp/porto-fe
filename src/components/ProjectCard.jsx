import React from "react";

import placeholder from "../assets/placeholder.jpg";
import Button from "./Button";

function ProjectCard() {
  return (
    <div className="h-[700px] max-w-[550px] shadow-[0px_0px_12px_0px_#fff] rounded-tl-[50px] rounded-br-[50px] z-20 flex flex-col items-center gap-7 p-6 bg-primary">
      <img className="h-64 w-full object-cover rounded-tl-[40px]" src={placeholder} alt="project-img" />

      <h2 className="text-4xl">Project Title</h2>

      <div className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] h-1 w-[300px]" />

      <article>
        <p className="text-left text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab eveniet voluptas id dicta necessitatibus
          repellendus quis, commodi autem maxime recusandae, ut quasi deserunt ipsa, perspiciatis impedit accusantium?
          Doloribus suscipit ex veritatis porro consequuntur dignissimos. Mollitia nostrum dolorum quidem quae?
        </p>
      </article>

      <Button title="Look it up" />
    </div>
  );
}

export default ProjectCard;
