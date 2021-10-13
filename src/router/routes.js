
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Root', component: () => import('pages/Index.vue') },
      { path: 'authors', name: 'AuthorList', component: () => import('pages/authors/AuthorList.vue') },
      { path: 'authors/:id/edit', name: 'AuthorEdit', component: () => import('pages/authors/AuthorForm.vue') },
      { path: 'authors/new', name: 'AuthorCreate', component: () => import('pages/authors/AuthorForm.vue') },
      { path: 'authors/:id', name: 'AuthorSingle', component: () => import('pages/authors/AuthorList.vue') },
      { path: 'posts', name: 'PostList', component: () => import('pages/posts/PostList.vue') },
      { path: 'posts/:id/edit', name: 'PostEdit', component: () => import('pages/posts/PostForm.vue') },
      { path: 'posts/new', name: 'PostCreate', component: () => import('pages/posts/PostForm.vue') },
      { path: 'posts/:id', name: 'PostSingle', component: () => import('pages/posts/PostSingle.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
