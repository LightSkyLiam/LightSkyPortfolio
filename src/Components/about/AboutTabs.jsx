import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import TabContent from "./TabContent";
import "react-loading-skeleton/dist/skeleton.css";
import Tabs from "./Tabs";
import styles from "./AboutTabs.module.css";
import { getAllTabs } from "../../Data/api";

function AboutTabs({ isMobile }) {
  const [activeTab, setActiveTab] = useState(null);
  const [error, isLoading, tabsArr, retry] = useFetch(
    [],
    getAllTabs,
    setActiveTab
  );
  useEffect(() => {
    setActiveTab(tabsArr?.[0]);
  }, [tabsArr]);

  return (
    <div className={`${styles.aboutTabs} container`}>
      <Tabs
        isMobile={isMobile}
        tabsArr={tabsArr}
        retry={retry}
        error={error}
        isLoading={isLoading}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent
        isMobile={isMobile}
        heading={activeTab?.content.heading}
        text={activeTab?.content.text}
        isLoading={isLoading}
        error={error}
        key={activeTab?.id}
      />
    </div>
  );
}

export default AboutTabs;
