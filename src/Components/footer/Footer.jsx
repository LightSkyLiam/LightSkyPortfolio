import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className={` ${styles.footer} container-fluid`}>
      <div className="container">
        <div className={`d-flex ${styles.footerDetails}`}>
          <div className={styles.details}>
            <h1>Liam Lasry</h1>
            <h2>
              Dedicated Frontend Web Developer crafting exceptional websites for
              seamless user experiences and project success
            </h2>
          </div>
          <div
            className={`d-flex align-items-center justify-content-center flex-column`}
          >
            <h1>Social</h1>
            <div className={styles.socialIcons}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/LightSkyLiam"
                className={styles.socialIcon}
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/liamlasry/"
                className={styles.socialIcon}
              >
                <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className={`text-center ${styles.copyright}`}>
          <h3> ©Copyright 2023. Made by Liam Lasry </h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
