import React, { ComponentType, MemoExoticComponent } from "react";
import styles from "./tab.module.css";

export type TabProps = {
  id: string;
  Icon: MemoExoticComponent<ComponentType<any>>;
  label: string;
  isActive?: boolean;
};

const Tab = ({ id, label, Icon, isActive = false }: TabProps) => {
  const activeFill = isActive ? " #F59D0E" : " #666666";

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();

    // pull right click menu logic here
    console.log("Right click on tab:", label);
  };

  return (
    <div
      id={id}
      className={`${styles.tab} ${isActive && styles.active}`}
      onContextMenu={handleRightClick}
    >
      <Icon width={16} height={16} fill={activeFill} />
      {label}
    </div>
  );
};

export default Tab;
