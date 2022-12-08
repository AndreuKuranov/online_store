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
import jwt_decode from "jwt-decode";

import HomeComponent from '@/pages/HomeComponent';
import DitalPageProduct from '@/pages/DitalPageProduct';
import Error404Component from '@/pages/Error404Component';
import CategoriePage from '@/pages/CategoriePage';
import BasketProducts from '@/pages/BasketProducts';
import AuthorizationPage from '@/pages/AuthorizationPage';
import NewsPage from '@/pages/NewsPage';
import AboutCompany from '@/pages/AboutCompany';

import AdminPage from '@/pages/AdminPage';
import AdminBrand from '@/pages/AdminBrand.vue';
import AdminBrandDetail from '@/pages/AdminBrandDetail.vue';
import AdminType from '@/pages/AdminType.vue';
import AdminTypeDetail from '@/pages/AdminTypeDetail';
import AdminProduct from '@/pages/AdminProduct.vue';
import AdminProductDetail from '@/pages/AdminProductDetail';

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

const logoutGuard = function (to, from, next) {
  if (isAuthorized) {
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
    children: [
      {
        path: 'type',
        component: AdminType,
      },
      {
        path: 'type/creatingNewType', // популярнее просто create
        component: AdminTypeDetail,
      },
      {
        path: 'type/:id',
        component: AdminTypeDetail,
      },
      {
        path: 'brand',
        component: AdminBrand,
      },
      {
        path: 'brand/creatingNewBrand',
        component: AdminBrandDetail,
      },
      {
        path: 'brand/:id',
        component: AdminBrandDetail,
      },
      {
        path: 'product',
        component: AdminProduct,
      },
      {
        path: 'product/creatingNewProduct',
        component: AdminProductDetail,
      },
      {
        path: 'product/:id',
        component: AdminProductDetail,
      },
      {
        path: ':pathMatch(.*)*',
        component: Error404Component,
      },
    ],
    beforeEnter: managwrAuthGuard // есть смысл писать до children, а то сложно читать сверху вниз
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
    component: DitalPageProduct, // Dital -> Detail
    name: 'DitalPageProduct',
  },
  {
    path: LOGIN_ROUTE,
    component: AuthorizationPage,
    beforeEnter: logoutGuard,
  },
  {
    path: REGISTRATION_ROUTE,
    component: AuthorizationPage,
    beforeEnter: logoutGuard,
  },
  {
    path: '/news',
    component: NewsPage,
    name: 'NewsPage',
  },
  {
    path: '/aboutCompany',
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
