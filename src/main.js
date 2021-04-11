import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import components from "./components";
import Modal from "./plugins/Modal";
import modals from "modals";
Vue.use(components);
Vue.use(Modal, { store, router, modals });
Vue.config.productionTip = false;
Vue.prototype.COLORS = [
  "#eccc68",
  "#ff7f50",
  "#ff6b81",
  "#a4b0be",
  "#57606f",
  "#ffa502",
  "#ff6348",
  "#ff4757",
  "#747d8c",
  "#2f3542",
  "#7bed9f",
  "#70a1ff",
  "#5352ed",
  "#2ed573",
  "#1e90ff",
  "#3742fa",
];
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
