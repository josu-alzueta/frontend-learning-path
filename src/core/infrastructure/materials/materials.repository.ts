import materials from '@/core/infrastructure/materials/materials.json'
import { materialsRepositoryMapper } from './materials.repository.mapper'

const getList = () => {
  return materialsRepositoryMapper.mapMaterials(materials)
}

const getActiveList = () => {
  const activeMaterials = materials.filter((material) => material.active)

  return materialsRepositoryMapper.mapMaterials(activeMaterials)
}

const getTree = () => {
  const mappedActiveMaterials = getActiveList()

  return materialsRepositoryMapper.mapTree(mappedActiveMaterials)
}

export const materialsRepository = {
  getList,
  getActiveList,
  getTree,
}
