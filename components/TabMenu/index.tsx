import { RefObject } from "react";
import styles from "./tabMenu.module.css";
import {
  FaFlag,
  FaPen,
  FaRegClipboard,
  FaRegCopy,
  FaRegTrashAlt
} from "react-icons/fa";

type TabMenuProps = {
  ref: RefObject<any>;
};

const TabMenu = ({ ref }: TabMenuProps) => {
  return (
    <div className={styles.menu} ref={ref}>
      <h3>Settings</h3>
      <div>
        <FaFlag style={{ color: "#2F72E2" }} />
        <p>Set as first page</p>
      </div>
      <div>
        <FaPen />
        <p>Rename</p>
      </div>
      <div>
        <FaRegClipboard />
        <p>Copy</p>
      </div>
      <div>
        <FaRegCopy />
        <p>Duplicate</p>
      </div>
      <div className={styles.delete}>
        <FaRegTrashAlt />
        <p>Delete</p>
      </div>
    </div>
  );
};
export default TabMenu;
