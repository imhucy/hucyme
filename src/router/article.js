export default [
  {
    name: 'Article',
    path: '',
    component: () =>
      import(
        /* webpackChunkName: "article" */
        'views/article/Main'
      )
  }
]
