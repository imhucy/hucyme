import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import components from './components'
import Modal from './plugins/Modal'
import modals from 'modals'
Vue.use(components)
Vue.use(Modal, { store, router, modals })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
