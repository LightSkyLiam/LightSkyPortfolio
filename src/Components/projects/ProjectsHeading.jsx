import SectionHeading from "../global/SectionHeading";
import styles from "./ProjectsHeading.module.css";
function ProjectsHeading({ isMobile }) {
  return (
    <div className={!isMobile ? `col-4` : `text-center mb-5`}>
      {!isMobile && (
        <>
          <h1 className={`text-uppercase mt-5 ${styles.projectsHeading}`}>
            My <br /> Work
          </h1>
          <p className={`mt-5 text-white-50 ${styles.featuredDetails}`}>
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
        </>
      )}
      {isMobile && (
        <SectionHeading
          heading="My Work"
          subHeading=" It was so fun creating them, you should take A view "
        />
      )}
    </div>
  );
}

export default ProjectsHeading;
