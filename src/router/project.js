export default [
  {
    name: 'Project',
    path: '',
    component: () =>
      import(
        /* webpackChunkName: "home" */
        'views/home/Main'
      )
  }
]
