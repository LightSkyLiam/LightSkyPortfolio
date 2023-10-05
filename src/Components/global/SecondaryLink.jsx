import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SecondaryLink.module.css";

function SecondaryLink({ message, icon = null, fontSize = `1.4rem` }) {
  return (
    <a style={{ fontSize: fontSize }} className={styles.secondaryLink} href="#">
      {icon && <FontAwesomeIcon icon={icon} />} {message}
    </a>
  );
}

export default SecondaryLink;
