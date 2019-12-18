export default [
  {
    name: 'About',
    path: '',
    component: () =>
      import(
        /* webpackChunkName: "about" */
        'views/about/Main'
      )
  }
]
