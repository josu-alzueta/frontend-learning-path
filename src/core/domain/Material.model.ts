type BasicMaterial = {
  name: string;
  path: string;
  slug: string;
  parentSlug?: string;
};

export type Material = BasicMaterial & {
  subMaterials?: BasicMaterial[];
};
