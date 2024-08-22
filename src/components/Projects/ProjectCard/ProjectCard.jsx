/* eslint-disable no-unused-vars */
import classes from "./ProjectCard.module.css";

function ProjectCard({ id, title, description, url, image, stacks = [], onClick, checked }) {
  return (
    <>
      <input type="radio" name="slide" id={id} checked={checked} onChange={() => onClick(id)} />
      <label htmlFor={id} className={classes.card} style={{ backgroundImage: `url(${image})` }}>
        <div className={classes.row}>
          <div className={classes.icon}>{id}</div>
          <div className={classes.description}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </>
  );
}

export default ProjectCard;
