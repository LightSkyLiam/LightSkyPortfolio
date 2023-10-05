import PrimaryButton from "../Global/PrimaryButton";
import SecondaryLink from "../Global/SecondaryLink";
import styles from "./Project.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ heading, img, description, projectLink, githubLink }) {
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className={`${styles.card}`}>
      <img src={`${img}`} />
      <div className={styles.cardDetails}>
        <h1>{heading}</h1>
        <p>{description}</p>
        <div className="mt-5">
          <PrimaryButton
            onClick={() => handleLinkClick(projectLink)}
            message={`View Project`}
          />
        </div>
        <div className={styles.secondaryLinkContainer}>
          <SecondaryLink
            message={`View On Github`}
            icon={faGithub}
            onClick={() => handleLinkClick(githubLink)}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
