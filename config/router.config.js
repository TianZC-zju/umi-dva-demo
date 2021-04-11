const routes = [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user/', redirect: '/user/goods' },
      {
        path: '/user/goods',
        component: './user/goods'
      },
      {
        component: './404'
      }
    ]
  },
]

export default routes
