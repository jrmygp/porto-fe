/* eslint-disable no-unused-vars */

import { IoReader, IoLink } from "react-icons/io5";

import classes from "./ProjectCard.module.css";

function ProjectCard({ title, description, url, image, stacks = [], onClick }) {
  return (
    <div className={classes.card}>
      <img src={image} alt={title} className={classes.image} />
      {/* <div className={classes.intro}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default ProjectCard;
