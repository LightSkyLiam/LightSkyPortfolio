import styles from "./Tab.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faCode, faBullseye } from "@fortawesome/free-solid-svg-icons";

function Tab({ heading, subHeading, icon, onClick, isActive, isMobile }) {
  return (
    <div
      onClick={onClick}
      className={`d-flex justify-content-between ${
        isActive ? styles.active : ``
      } ${styles.tab}`}
    >
      <div>
        <p
          className={`${styles.tabHeading} ${styles.letterSpacing} ${
            !isMobile && `mb-3`
          }`}
        >
          {heading}
        </p>
        {!isMobile && <p className="lead text-white-50">{subHeading}</p>}
      </div>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon
          className={styles.icon}
          icon={
            icon === `figma` ? faFigma : icon === `code` ? faCode : faBullseye
          }
        />
      </div>
    </div>
  );
}

export default Tab;
