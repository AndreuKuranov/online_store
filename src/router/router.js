import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/pages/HomeComponent';
import DitalPageProduct from '@/pages/DitalPageProduct';
import Error404Component from '@/pages/Error404Component';
import CategoriePage from '@/pages/CategoriePage';
import BasketProducts from '@/pages/BasketProducts';

const routes = [
  {
    path: '/',
    component: HomeComponent,
    name: 'HomeComponent',
  },
  {
    path: '/basket',
    component: BasketProducts,
    name: 'BasketProducts',
  },
  {
    path: '/categorie',
    component: CategoriePage,
    name: 'CategoriePage',
  },
  {
    // path: '//:id',
    path: '/product', //пока так
    component: DitalPageProduct,
    name: 'DitalPageProduct',
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error404Component,
    name: 'Error404Component'
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
