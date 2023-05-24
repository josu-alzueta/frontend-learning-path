import { NavLink } from "react-router-dom";
import styles from "./SidebarLink.module.css";

type LinkProps = {
  path: string;
  name: string;
};

export const SidebarLink: React.FC<LinkProps> = ({ path, name }) => {
  return (
    <NavLink to={path} end className={styles.SidebarLink}>
      {name}
    </NavLink>
  );
};
