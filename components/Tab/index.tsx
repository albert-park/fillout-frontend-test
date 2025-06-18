import Image from "next/image";
import styles from "./tab.module.css";

export type TabProps = {
  id: string;
  icon: string;
  label: string;
  isActive?: boolean;
};

const Tab = ({ id, label, icon, isActive = false }: TabProps) => {
  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("Right click on tab:", label);
  };

  return (
    <div
      id={id}
      className={`${styles.tab} ${isActive && styles.active}`}
      onContextMenu={handleRightClick}
    >
      <Image aria-hidden src={icon} alt="File icon" width={16} height={16} />
      {label}
    </div>
  );
};

export default Tab;
