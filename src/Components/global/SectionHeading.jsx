import styles from "./SectionHeading.module.css";
function SectionHeading({ heading, subHeading }) {
  return (
    <>
      <h1 className={`h1 text-white text-uppercase ${styles.aboutHeading}`}>
        {heading}
      </h1>
      <p className={`${styles.subHeading} text-white-50`}>{subHeading}</p>
    </>
  );
}

export default SectionHeading;
