import React, { ComponentType, MemoExoticComponent } from "react";
import styles from "./tab.module.css";

export type TabProps = {
  id: number;
  Icon: MemoExoticComponent<ComponentType<any>>;
  label: string;
  isActive?: boolean;
};

const Tab = ({ id, label, Icon, isActive = false }: TabProps) => {
  const activeFill = isActive ? " #F59D0E" : " #666666";

  return (
    <div
      id={id.toString()}
      className={`${styles.tab} ${isActive && styles.active}`}
    >
      <Icon width={16} height={16} fill={activeFill} />
      {label}
    </div>
  );
};

export default Tab;
