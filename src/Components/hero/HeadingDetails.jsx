import styles from "./HeadingDetails.module.css";
import PrimaryButton from "../Global/PrimaryButton";
import { Link } from "react-scroll";
import data from "../../assets/lottie-scroll.json";
import Lottie from "lottie-react-web";
import HeadingText from "./HeadingText";

function HeadingDetails({ isMobile }) {
  return (
    <div className={`container ${styles.headerWrap}`}>
      <HeadingText isMobile={isMobile} />
      <PrimaryButton message="View My Work" href="projects" />
      {isMobile && (
        <Link
          offset={-60}
          to={`about`}
          className={`${styles.svgWrap}`}
          href="#"
        >
          <Lottie options={{ animationData: data }} />
        </Link>
      )}
    </div>
  );
}

export default HeadingDetails;
