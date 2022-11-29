import { DirectiveBinding, VNode } from 'vue'

const permissionList = ['add', 'update']

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, prevVnode: VNode | null) {
    console.log('mounted', el, binding, vnode, prevVnode)
    const isHas = permissionList.includes(binding.value)
    if (!isHas) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}
