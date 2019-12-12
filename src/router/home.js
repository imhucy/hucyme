export default [
  {
    name: 'Home',
    path: '',
    component: () =>
      import(
        /* webpackChunkName: "home" */
        'views/home/Main'
      )
  }
]
