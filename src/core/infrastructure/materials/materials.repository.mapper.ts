import { Material } from "@/core/domain/Material.model";
import { MaterialDTO } from "./Material.dto";

const getCompletePath = (
  materials: MaterialDTO[],
  path: string,
  parentSlug?: string
): string => {
  const parentMaterial = materials.find(({ slug }) => slug === parentSlug);

  if (!parentMaterial) {
    return path;
  }

  return `${parentMaterial.path}${path}`;
};

const mapMaterials = (materials: MaterialDTO[]): Material[] => {
  return materials.map(({ name, slug, path, parentSlug }) => {
    return {
      name,
      slug,
      parentSlug,
      path: getCompletePath(materials, path, parentSlug),
    };
  });
};

const mapTree = (materials: Material[]) => {
  const firstLevelMaterials = materials.filter(
    (material) => !material.parentSlug
  );

  return firstLevelMaterials.map((material) => {
    return {
      ...material,
      subMaterials: materials.filter(
        ({ parentSlug }) => parentSlug === material.slug
      ),
    };
  });
};

export const materialsRepositoryMapper = {
  mapMaterials,
  mapTree,
};
