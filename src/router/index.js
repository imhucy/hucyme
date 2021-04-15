import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "views/Home"), // require("views/Home").default
  },
  {
    path: "/project",
    name: "Project",
    component: () => import(/* webpackChunkName: "project" */ "views/Project"),
  },
  // article
  {
    path: "/article",
    name: "Article",
    component: () => import(/* webpackChunkName: "article" */ "views/Article"),
  },
  {
    path: "/article/:id",
    name: "ArticleDetail",
    component: () =>
      import(/* webpackChunkName: "article" */ "views/ArticleDetail"),
  },
  // about
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "views/About"),
  },
  {
    path: "*",
    component: () => import("views/NotFound"),
  },
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
