import Image from "next/image";
import styles from "./tab.module.css";

export type TabProps = {
  icon: string;
  label: string;
};

const Tab = ({ label, icon }: TabProps) => {
  return (
    <div className={styles.tab}>
      <Image aria-hidden src={icon} alt="File icon" width={16} height={16} />
      {label}
    </div>
  );
};

export default Tab;
