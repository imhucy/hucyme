export default [
  {
    name: 'Project',
    path: '',
    component: () =>
      import(
        /* webpackChunkName: "project" */
        'views/project/Main'
      )
  }
]
