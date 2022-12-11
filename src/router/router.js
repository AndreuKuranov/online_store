import jwt_decode from "jwt-decode";

import { createRouter, createWebHistory } from 'vue-router';
import { pathRouters } from '@/router/routes.js';
import { routerAdmin } from '@/router/routerAdmin.js';

import HomeComponent from '@/pages/HomeComponent';
import DetailPageProduct from '@/pages/DetailPageProduct';
import Error404Component from '@/pages/Error404Component';
import CategoriePage from '@/pages/CategoriePage';
import BasketProducts from '@/pages/BasketProducts';
import AuthorizationPage from '@/pages/AuthorizationPage';
import NewsPage from '@/pages/NewsPage';
import AboutCompany from '@/pages/AboutCompany';
import AdminPage from '@/pages/AdminPage';

const isAuthorized = localStorage.hasOwnProperty('token');
const roleUser = isAuthorized ? jwt_decode(localStorage.getItem('token')) : '';

const authGuard = function (to, from, next) {
  if (!isAuthorized) {
    next(pathRouters.registration)
  } else {
    next()
  };
}

const managwrAuthGuard = function (to, from, next) {
  if (!isAuthorized) {
    next(pathRouters.registration)
  } else if (roleUser?.role !== 'ADMIN') {
    next(pathRouters.shop)
  } else {
    next()
  };
}

const logoutGuard = function (to, from, next) {
  if (isAuthorized) {
    next(pathRouters.shop)
  } else {
    next()
  };
}

const routes = [
  {
    path: pathRouters.shop,
    component: HomeComponent,
    name: 'HomeComponent',
  },
  {
    path: pathRouters.admin,
    component: AdminPage,
    name: 'AdminPage',
    beforeEnter: managwrAuthGuard,
    children: routerAdmin,
  },
  {
    path: pathRouters.basket,
    component: BasketProducts,
    name: 'BasketProducts',
    beforeEnter: authGuard,
  },
  {
    path: pathRouters.categorie,
    component: CategoriePage,
    name: 'CategoriePage',
  },
  {
    path: `${pathRouters.device}/:id`,
    component: DetailPageProduct,
    name: 'DetailPageProduct',
  },
  {
    path: pathRouters.login,
    component: AuthorizationPage,
    beforeEnter: logoutGuard,
  },
  {
    path: pathRouters.registration,
    component: AuthorizationPage,
    beforeEnter: logoutGuard,
  },
  {
    path: pathRouters.news,
    component: NewsPage,
    name: 'NewsPage',
  },
  {
    path: pathRouters.company,
    component: AboutCompany,
    name: 'AboutCompany',
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
