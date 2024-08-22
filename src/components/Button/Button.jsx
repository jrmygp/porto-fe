/* eslint-disable react/jsx-no-target-blank */
import classes from "./Button.module.css";

export function Button1({ title, href, onClick }) {
  return (
    <button
      className={`${classes.btn} ${classes.btn1}`}
      href={!onClick ? href : null}
      target="_blank"
      onClick={onClick ? onClick : null}
    >
      {title}
    </button>
  );
}

export function Button2({ title, href, onClick }) {
  return (
    <button
      className={`${classes.btn} ${classes.btn2}`}
      href={!onClick ? href : null}
      target="_blank"
      onClick={onClick ? onClick : null}
    >
      {title}
    </button>
  );
}

export function Button3({ title, href, onClick }) {
  return (
    <button
      className={`${classes.btn} ${classes.btn3}`}
      href={!onClick ? href : null}
      target="_blank"
      onClick={onClick ? onClick : null}
    >
      {title}
    </button>
  );
}

export function Button4({ title, href, onClick }) {
  return (
    <button
      className={`${classes.btn} ${classes.btn4}`}
      href={!onClick ? href : null}
      target="_blank"
      onClick={onClick ? onClick : null}
    >
      {title}
    </button>
  );
}
