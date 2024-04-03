import { shallowRef } from 'vue'
import router from '@/router'
import layouts from '@/layouts'

export const useLayouts = () => {
  const layout = shallowRef('div')

  router.afterEach((to) => {
    layout.value = layouts[to.meta.layout] || 'div'
  })

  return { layout }
}
