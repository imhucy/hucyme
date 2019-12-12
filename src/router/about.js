export default [
  {
    name: 'About',
    path: '',
    component: () =>
      import(
        /* webpackChunkName: "home" */
        'views/home/Main'
      )
  }
]
