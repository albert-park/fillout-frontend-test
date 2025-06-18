"use client";
import styles from "./navigation.module.css";
import { TabProps } from "../Tab";
import { useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import TabItem from "../TabItem";

const tabsData: TabProps[] = [
  { id: "1", icon: "/file.svg", label: "Info" },
  { id: "2", icon: "/file.svg", label: "Details" },
  { id: "3", icon: "/file.svg", label: "Other" },
  { id: "4", icon: "/file.svg", label: "Ending" }
];

const Navigation = () => {
  const [tabs, setTabs] = useState(tabsData);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [addTabIndex, setAddTabIndex] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10
      }
    })
  );

  const handleHover = (index: number) => {
    setAddTabIndex(index);
  };

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setActiveTabIndex(tabs.findIndex((tab) => tab.id === over.id));
      setTabs((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <footer className={styles.footer}>
        <SortableContext items={tabs}>
          {tabs.map((tab, index) => {
            const { id, icon, label } = tab;
            const isTabActive = index === activeTabIndex;
            const showAddTabButton = addTabIndex === index;

            return (
              <TabItem
                index={index}
                key={id}
                id={id}
                icon={icon}
                label={label}
                isActive={isTabActive}
                handleHover={() => handleHover(index)}
                handleMouseLeave={() => setAddTabIndex(null)}
                onMouseDown={() => {
                  handleTabClick(index);
                }}
                showAddTabButton={showAddTabButton}
              />
            );
          })}
        </SortableContext>
      </footer>
    </DndContext>
  );
};

export default Navigation;
