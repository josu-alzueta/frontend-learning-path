import { materialsService } from "@/core/services/materials.service";
import { lazyLoadRoutes } from "./lazyLoadRoutes";

const getComponentPath = (path: string) => {
  if (path === "/") {
    return "/introduccion";
  }

  return path;
};

export const getRoutes = () => {
  const materialsList = materialsService.getList();

  return materialsList.map((material) => {
    const componentPath = getComponentPath(material.path);

    return {
      path: material.path,
      element: lazyLoadRoutes(componentPath),
    };
  });
};
