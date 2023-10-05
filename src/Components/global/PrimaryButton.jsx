import styles from "./PrimaryButton.module.css";
import { Link } from "react-scroll";
function PrimaryButton({ href = "#", message, onClick }) {
  return (
    <Link
      onClick={onClick}
      offset={-60}
      to={href}
      className={styles.primaryButton}
      href="#"
    >
      {message}
    </Link>
  );
}

export default PrimaryButton;
