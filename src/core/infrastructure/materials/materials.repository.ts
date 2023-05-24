import materials from "@/core/infrastructure/materials/materials.json";
import { materialsRepositoryMapper } from "./materials.repository.mapper";

const getList = () => {
  return materialsRepositoryMapper.mapMaterials(materials);
};

const getTree = () => {
  const mappedMaterials = getList();

  return materialsRepositoryMapper.mapTree(mappedMaterials);
};

export const materialsRepository = {
  getList,
  getTree,
};
