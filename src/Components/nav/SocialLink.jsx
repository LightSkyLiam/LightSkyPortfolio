import styles from "./SocialLink.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialLink({ name, className, link }) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      className={`${styles[className]} ${styles.socialLink}`}
      href={link}
    >
      <FontAwesomeIcon
        className={styles.icon}
        icon={name === `GitHub` ? faGithub : faLinkedin}
      />
    </a>
  );
}

export default SocialLink;
