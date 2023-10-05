import styles from "./About.module.css";
import AboutTabs from "./AboutTabs";
import SectionHeading from "../global/SectionHeading";

function About({ isMobile }) {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={`container-fluid text-center`}>
        <SectionHeading
          heading="About Me"
          subHeading="Discover My World: Coding, Design, and Gaming Adventures"
        />
      </div>
      <AboutTabs isMobile={isMobile} />
    </div>
  );
}

export default About;
