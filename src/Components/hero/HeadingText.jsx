import styles from "./HeadingText.module.css";

function HeadingText({ isMobile }) {
  return (
    <>
      <h1 className={`${styles.heroHeading} text-white mb-4 mt-3 pt-3`}>
        Hey, I&apos;m Liam Lasry,
        <br /> A Front-End Developer
      </h1>
      {!isMobile && (
        <p className={`${styles.subHeader}`}>
          Frontend is like painting with code, optimizing performance, ensuring
          flawless functionality and delivering excellent designs.
        </p>
      )}
      {isMobile && (
        <p className={`${styles.subHeader}`}>
          Artful code painting for optimized performance, flawless
          functionality, and exquisite designs
        </p>
      )}
    </>
  );
}

export default HeadingText;
