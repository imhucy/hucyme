import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let child_routes = require.context('./', true, /\.js$/)
let keys = child_routes.keys()
const childRoutes = []

keys.map(child_routes).forEach((child_route, i) => {
  let route = child_route.default || child_route
  let name = keys[i].match(/(\w+)\.js/)[1]
  if (name !== 'index') {
    childRoutes.push({
      path: name === 'home' ? '' : name,
      component: () =>
        import(
          /* webpackChunkName: "[request]" */
          `views/${name}/Home`
        ),
      // component: require(`views/${name}/Home`).default,
      children: route
    })
  }
})
const routes = [
  {
    path: '/',
    component: require('views/Home').default,
    children: childRoutes
  }
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
