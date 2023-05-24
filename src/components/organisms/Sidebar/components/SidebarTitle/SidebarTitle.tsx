import { Link } from "react-router-dom";
import styles from "./SidebarTitle.module.css";

export const SidebarTitle = () => {
  return (
    <div className={styles.Wrapper}>
      <Link to="/" className={styles.Title}>
        <h2 className={styles.TitleHeading}>Frontend</h2>
        <p>Learning Path</p>
      </Link>
    </div>
  );
};
