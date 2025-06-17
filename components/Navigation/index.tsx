"use client";
import styles from "./navigation.module.css";
import Tab, { TabProps } from "../Tab";
import { Fragment, useState } from "react";

const tabsData: TabProps[] = [
  { icon: "/file.svg", label: "Info" },
  { icon: "/file.svg", label: "Details" },
  { icon: "/file.svg", label: "Other" },
  { icon: "/file.svg", label: "Ending" }
];
const Navigation = () => {
  const [tabs, setTabs] = useState(tabsData);
  const [addTabIndex, setAddTabIndex] = useState<number | null>(null);
  const handleHover = (index: number) => {
    setAddTabIndex(index);
  };
  return (
    <footer className={styles.footer}>
      {tabs.map((tab, index) => {
        const { icon, label } = tab;
        return (
          <Fragment key={index}>
            <Tab icon={icon} label={label} />
            <div
              className={styles.addTab}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setAddTabIndex(null)}
            >
              {addTabIndex === index && <div>000 + {index} 000</div>}
            </div>
          </Fragment>
        );
      })}
    </footer>
  );
};

export default Navigation;
