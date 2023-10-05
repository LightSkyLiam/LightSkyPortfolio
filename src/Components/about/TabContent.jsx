import styles from "./TabContent.module.css";
import Skeleton from "react-loading-skeleton";

function TabContent({ id, heading, text, isLoading, isMobile }) {
  return (
    <div key={id} className={`${styles.content} col-6`}>
      {isLoading && (
        <>
          <Skeleton
            highlightColor="#527563"
            baseColor="#40464b"
            count={isMobile ? 1 : 2}
            height="3.5rem"
            className="mb-4"
          />
          <Skeleton
            highlightColor="#527563"
            baseColor="#40464b"
            count={isMobile ? 3 : 5}
            height="3rem"
            className={isMobile ? `mt-4` : `mt-5`}
          />
        </>
      )}
      {!isLoading && (
        <div className={styles.tabContentContainer}>
          <h1 className={`mb-5 ${styles.tabContentHeading}`}>{heading}</h1>
          <p className={`text-white-50 lead ${styles.tabContentText}`}>
            {text}
          </p>
        </div>
      )}
    </div>
  );
}

export default TabContent;
