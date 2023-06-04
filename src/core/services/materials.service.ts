import { materialsRepository } from '@/core/infrastructure/materials/materials.repository'

const getList = () => {
  return materialsRepository.getList()
}

const getActiveList = () => {
  return materialsRepository.getActiveList()
}

const getTree = () => {
  return materialsRepository.getTree()
}

export const materialsService = {
  getList,
  getActiveList,
  getTree,
}
