import styles from "./ProjectList.module.css";
import Project from "./Project";
import { ProjectListArr } from "../../Data/Projects";

function ProjectList() {
  return (
    <div className={`${styles.ProjectListContainer} container`}>
      {ProjectListArr.map((project) => (
        <Project
          key={project.id}
          img={project.img}
          heading={project.heading}
          description={project.description}
          projectLink={project.projectLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}

export default ProjectList;
