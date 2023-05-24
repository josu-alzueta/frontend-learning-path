import { materialsService } from "@/core/services/materials.service";
import styles from "./Sidebar.module.css";
import { SidebarTitle } from "./components/SidebarTitle";
import { SidebarLink } from "./components/SidebarLink";

export const Sidebar = () => {
  const materialsList = materialsService.getTree();

  return (
    <aside className={styles.Sidebar}>
      <SidebarTitle />

      <ul className={styles.SidebarList}>
        {materialsList.map((material) => (
          <li key={material.path}>
            <SidebarLink path={material.path} name={material.name} />
            {!!material.subMaterials.length && (
              <ul>
                {material.subMaterials.map((material) => (
                  <li key={material.path}>
                    <SidebarLink path={material.path} name={material.name} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};
