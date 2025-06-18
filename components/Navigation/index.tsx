"use client";
import { useState } from "react";
import styles from "./navigation.module.css";
import { TabProps } from "../Tab";
import TabItem from "../TabItem";
import File from "../svg/file";

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";

const tabsData: TabProps[] = [
  { id: "1", Icon: File, label: "Info" },
  { id: "2", Icon: File, label: "Details" },
  { id: "3", Icon: File, label: "Other" },
  { id: "4", Icon: File, label: "Ending" }
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = tabs.findIndex((tab) => tab.id === active.id);
      const newIndex = tabs.findIndex((tab) => tab.id === over?.id);

      setActiveTabIndex(newIndex);
      setTabs((items) => {
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
            const { id, Icon, label } = tab;
            const isTabActive = index === activeTabIndex;
            const showAddTabButton = addTabIndex === index;

            return (
              <TabItem
                index={index}
                key={id}
                id={id}
                Icon={Icon}
                label={label}
                isActive={isTabActive}
                handleHover={() => setAddTabIndex(index)}
                handleMouseLeave={() => setAddTabIndex(null)}
                onMouseDown={() => {
                  setActiveTabIndex(index);
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
