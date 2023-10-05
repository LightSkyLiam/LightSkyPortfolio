import styles from "./Hero.module.css";
import HeadingImg from "./HeadingImg";
import HeadingDetails from "./HeadingDetails";

function Hero({ isMobile }) {
  return (
    <header id="home" className={`container ${styles.hero}`}>
      <HeadingDetails isMobile={isMobile} />
      {!isMobile && <HeadingImg />}
    </header>
  );
}

export default Hero;
