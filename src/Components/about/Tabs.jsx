import Tab from "./Tab";
import ErrorMessage from "../global/ErrorMessage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Tabs.module.css";
function Tabs({
  isLoading,
  error,
  retry,
  tabsArr,
  activeTab,
  setActiveTab,
  isMobile,
}) {
  return (
    <div className={`${isMobile ? `` : `col-5`} ${styles.tabs}`}>
      {isLoading && (
        <Skeleton
          containerClassName={styles.skeletonConatiner}
          height={isMobile ? `8rem` : `15rem`}
          highlightColor="#527563"
          baseColor="#40464b"
          count={3}
          duration={2}
          className="mb-3"
        />
      )}
      {error && (
        <ErrorMessage
          tryAgain={true}
          message={`There Was An Error, Please Refresh The Page`}
          onClick={retry}
        />
      )}
      {tabsArr.map((tab) => (
        <Tab
          isMobile={isMobile}
          key={tab.id}
          isActive={activeTab === tab}
          heading={tab.heading}
          subHeading={tab.subHeading}
          icon={tab.icon}
          onClick={() => {
            setActiveTab(tab);
          }}
        />
      ))}
    </div>
  );
}

export default Tabs;
