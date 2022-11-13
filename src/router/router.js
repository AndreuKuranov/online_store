import { createRouter, createWebHistory } from 'vue-router';
import { 
  ADMIN_ROUTE,
  SHOP_ROUTE,
  REGISTRATION_ROUTE,
  BASKET_ROUTE,
  CATEGORIE_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE
} from '@/utils/consts';
import HomeComponent from '@/pages/HomeComponent';
import DitalPageProduct from '@/pages/DitalPageProduct';
import Error404Component from '@/pages/Error404Component';
import CategoriePage from '@/pages/CategoriePage';
import BasketProducts from '@/pages/BasketProducts';
import AuthorizationPage from '@/pages/AuthorizationPage';
import AdminPage from '@/pages/AdminPage';
import jwt_decode from "jwt-decode";

const isAuthorized = localStorage.hasOwnProperty('token');
const roleUser = isAuthorized ? jwt_decode(localStorage.getItem('token')) : '';

const authGuard = function (to, from, next) {
  if (!isAuthorized) {
    next(REGISTRATION_ROUTE)
  } else {
    next()
  };
}

const managwrAuthGuard = function (to, from, next) {
  if (!isAuthorized) {
    next(REGISTRATION_ROUTE)
  } else if (roleUser.role !== 'ADMIN') {
    next(SHOP_ROUTE)
  } else {
    next()
  };
}


const routes = [
  {
    path: SHOP_ROUTE,
    component: HomeComponent,
    name: 'HomeComponent',
  },
  {
    path: ADMIN_ROUTE,
    component: AdminPage,
    name: 'AdminPage',
    beforeEnter: managwrAuthGuard
  },
  {
    path: BASKET_ROUTE,
    component: BasketProducts,
    name: 'BasketProducts',
    beforeEnter: authGuard,
  },
  {
    path: CATEGORIE_ROUTE,
    component: CategoriePage,
    name: 'CategoriePage',
  },
  {
    path: `${DEVICE_ROUTE}/:id`,
    component: DitalPageProduct,
    name: 'DitalPageProduct',
  },
  {
    path: LOGIN_ROUTE,
    component: AuthorizationPage,
  },
  {
    path: REGISTRATION_ROUTE,
    component: AuthorizationPage,
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
