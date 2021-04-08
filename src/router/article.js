export default [
  {
    name: "Article",
    path: "",
    component: () =>
      import(
        /* webpackChunkName: "home" */
        "views/home/Main"
      ),
  },
];
