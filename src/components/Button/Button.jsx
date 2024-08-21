/* eslint-disable react/jsx-no-target-blank */
import classes from "./Button.module.css";

function Button({ title, href, onClick }) {
  return (
    <button
      className={classes["material-bubble"]}
      href={!onClick ? href : null}
      target="_blank"
      onClick={onClick ? onClick : null}
    >
      {title}
    </button>
  );
}

export default Button;
