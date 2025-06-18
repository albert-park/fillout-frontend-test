import { CSSProperties } from "react";
import Tab, { TabProps } from "../Tab";
import styles from "./tabItem.module.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Plus from "../svg/plus";

interface TabItemProps extends TabProps {
  index: number;
  handleHover: (index: number) => void;
  handleMouseLeave: (index: number | null) => void;
  onMouseDown: (event: React.MouseEvent) => void;
  showAddTabButton?: boolean;
}

const TabItem = ({
  index,
  id,
  Icon,
  label,
  isActive = false,
  handleHover,
  handleMouseLeave,
  onMouseDown,
  showAddTabButton = false
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
      className={styles.tabItem}
      onClick={onMouseDown}
      {...attributes}
      {...listeners}
    >
      <Tab id={id} Icon={Icon} label={label} isActive={isActive} />
      <div
        className={styles.addTab}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleMouseLeave(null)}
      >
        {showAddTabButton && (
          <div className={styles.addTabButton}>
            <Plus />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabItem;
