import { defineAsyncComponent, App } from 'vue'
// const componentList = import.meta.g.lobEager('@/components/*.vue')
const componentList = import.meta.glob('@/components/*.vue')

const autoRegist = {
  install(app: App) {
    for (const [key, value] of Object.entries(componentList)) {
      const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
      console.log(name)
      app.component(name, defineAsyncComponent(value))
    }
  }
}

export default autoRegist
