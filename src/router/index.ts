import { useRoutes } from "react-router";
import { getRoutes } from "./routesConfig";

export const RouteRenderer = () => {
  const routesConfig = getRoutes();
  return useRoutes(routesConfig);
};
