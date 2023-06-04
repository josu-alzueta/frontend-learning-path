import { materialsService } from '@/core/services/materials.service'
import { lazyLoadRoutes } from './lazyLoadRoutes'

const getComponentPath = (path: string) => {
  if (path === '/') {
    return '/introduccion'
  }

  return path
}

export const getRoutes = () => {
  const activeMaterialsList = materialsService.getActiveList()

  return activeMaterialsList.map((material) => {
    const componentPath = getComponentPath(material.path)

    return {
      path: material.path,
      element: lazyLoadRoutes(componentPath),
    }
  })
}
