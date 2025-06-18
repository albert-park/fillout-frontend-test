import { CSSProperties, useRef, useState } from "react";
import Tab, { TabProps } from "../Tab";
import styles from "./tabItem.module.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Plus from "../svg/plus";
import { useOutsideAlerter } from "@/tools/hooks";
import TabMenu from "../TabMenu";

interface TabItemProps extends TabProps {
  index: number;
  handleHover: (index: number) => void;
  handleMouseLeave: (index: number | null) => void;
  onMouseDown: (event: React.MouseEvent) => void;
  showAddTabButton?: boolean;
  setTabs?: (tabs: TabProps[]) => void;
  tabs: TabProps[];
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
  showAddTabButton = false,
  setTabs,
  tabs
}: TabItemProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const menuRef = useRef(null);
  useOutsideAlerter({ ref: menuRef, callback: () => setShowMenu(false) });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  };

  const handleAddTabClick = () => {
    const newTabs = [...tabs];
    newTabs.splice(index + 1, 0, {
      id: tabs.length + 1,
      Icon,
      label: "New Tab"
    });

    setTabs && setTabs(newTabs);
  };

  return (
    <div
      key={id}
      ref={setNodeRef}
      style={style}
      className={styles.tabItem}
      onClick={onMouseDown}
      onContextMenu={isActive ? handleRightClick : undefined}
      {...attributes}
      {...listeners}
    >
      {showMenu && <TabMenu ref={menuRef} />}
      <Tab id={id} Icon={Icon} label={label} isActive={isActive} />
      <div
        className={styles.addTab}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleMouseLeave(null)}
      >
        {showAddTabButton && (
          <div className={styles.addTabButton} onClick={handleAddTabClick}>
            <Plus />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabItem;
