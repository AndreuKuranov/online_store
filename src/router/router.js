import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/pages/HomeComponent'


const routes = [
  {
    path: '/',
    component: HomeComponent,
    name: 'HomeComponent',
  },
  // {
  //   path: '/about',
  //   component: AboutComponent,
  //   name: 'AboutComponent',
  //   children: [
  //     {
  //       path: 'about-app',
  //       component: AboutApp,
  //       name: 'AboutApp'
  //     }
  //   ]
  // },
  // {
  //   path: '/tasklist',
  //   component: TaskListComponent,
  //   name: 'TaskListComponent',
  //   beforeEnter: managwrAuthGuard
  // },
  // {
  //   path: '/tasklist/:id',
  //   component: TaskId,
  //   name: 'TaskId',
  //   beforeEnter: managwrAuthGuard
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: Error404Component,
  //   name: 'Error404Component'
  // },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
