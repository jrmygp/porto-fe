/* eslint-disable no-unused-vars */
import { IoMdLink } from "react-icons/io";
import classes from "./ProjectCard.module.css";

function ProjectCard({ id, title, description, url, image, stacks = [], onClick, checked }) {
  return (
    <>
      <input type="radio" name="slide" id={id} checked={checked} onChange={() => onClick(id)} />
      <label htmlFor={id} className={classes.card} style={{ backgroundImage: `url(${image})` }}>
        <div className={classes.row}>
          <div className={classes.icon}>{id}</div>
          <div className={classes.description}>
            <div className={classes.text}>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>

            <a className="mr-10" href={url} target="_blank" rel="noreferrer">
              <IoMdLink size={24} />
            </a>
          </div>
        </div>
      </label>
    </>
  );
}

export default ProjectCard;
