import { App } from 'vue'
const directivesList = import.meta.globEager('@/directives/*.ts')

const autoRegist = {
  install(app: App) {
    for (const [key, value] of Object.entries(directivesList)) {
      const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
      app.directive(name, value.default)
      // console.log(directivesList)
    }
  }
}

export default autoRegist
