import { Link } from "react-router-dom";
import styles from "./SidebarTitle.module.css";

export const SidebarTitle = () => {
  return (
    <div className={styles.Wrapper}>
      <Link to="/" className={styles.Title}>
        <p className={styles.TitleHeading}>Frontend</p>
        <p>Learning Path</p>
      </Link>
    </div>
  );
};
