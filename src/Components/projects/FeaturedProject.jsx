import ViewProjectButton from "../global/ViewProjectButton";
import styles from "./FeaturedProject.module.css";

function FeaturedProject({ isMobile }) {
  return (
    <div className={styles.container}>
      <div className={` ${styles.content}`}>
        <div className={styles.spacer}></div>
        <img src="..\src\assets\Arrow.png" />
        <h3 className={!isMobile ? `mb-4` : `mb-3`}>Featured Project</h3>
        <h2 className={!isMobile ? `mb-5` : `mb-4`}>WebApp Web App</h2>
        <div>
          <ViewProjectButton message="View Project" link="https://google.com" />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="..\src\assets\MacBook.png" />
      </div>
    </div>
  );
}

export default FeaturedProject;
