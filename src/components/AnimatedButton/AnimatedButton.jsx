import classes from "./AnimatedButton.module.css";
import { IoDocumentAttachOutline } from "react-icons/io5";

const AnimatedButton = ({ onClick }) => {
  return (
    <div className={classes.wrapper}>
      <button className={classes.button} target="_blank" onClick={onClick ? onClick : null}>
        <IoDocumentAttachOutline size={36} className={classes.icon} />
      </button>

      <div className={classes.text}>Download</div>
    </div>
  );
};

export default AnimatedButton;
