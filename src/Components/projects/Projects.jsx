import styles from "./Projects.module.css";
import FeaturedProject from "./FeaturedProject";
import ProjectList from "./ProjectList";
import ProjectsHeading from "./ProjectsHeading";

function Projects({ isMobile }) {
  return (
    <div className={`container-fluid ${styles.projectsSection}`} id="projects">
      {!isMobile && (
        <div
          className={`${styles.projectsFlex} container justify-content-between d-flex`}
        >
          <ProjectsHeading />
          <FeaturedProject />
        </div>
      )}
      {isMobile && (
        <>
          <ProjectsHeading isMobile={isMobile} />
          <FeaturedProject isMobile={isMobile} />
        </>
      )}
      <ProjectList />
    </div>
  );
}

export default Projects;
