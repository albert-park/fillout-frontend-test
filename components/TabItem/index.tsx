import { CSSProperties } from "react";
import Tab, { TabProps } from "../Tab";
import styles from "./tabItem.module.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TabItemProps extends TabProps {
  id: string;
  index: number;
  handleHover: (index: number) => void;
  handleMouseLeave: (index: number | null) => void;
  onMouseDown: (event: React.MouseEvent) => void;
  showAddTabButton?: boolean;
}

const TabItem = ({
  index,
  id,
  icon,
  label,
  isActive,
  handleHover,
  handleMouseLeave,
  onMouseDown,
  showAddTabButton
}: TabItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div
      key={id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.tabItem}
      onClick={onMouseDown}
    >
      <Tab id={id} icon={icon} label={label} isActive={isActive} />
      <div
        className={styles.addTab}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleMouseLeave(null)}
      >
        {showAddTabButton && <div className={styles.addTabButton}>+</div>}
      </div>
    </div>
  );
};

export default TabItem;
