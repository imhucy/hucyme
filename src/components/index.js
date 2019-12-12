let components = require.context('./', true, /\.vue$/)
let keys = components.keys()

export default {
  install (Vue) {
    keys.map(components).forEach((component, i) => {
      let comp = component.default || component
      let name = comp.name || keys[i].match(/(\w+)\.vue/)[1]
      Vue.component(name, comp)
    })
  }
}
