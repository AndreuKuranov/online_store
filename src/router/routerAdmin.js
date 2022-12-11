import { pathAdminRouters } from '@/router/routes.js';
import Error404Component from '@/pages/Error404Component';

import AdminBrand from '@/pages/AdminBrand.vue';
import AdminBrandDetail from '@/pages/AdminBrandDetail.vue';
import AdminType from '@/pages/AdminType.vue';
import AdminTypeDetail from '@/pages/AdminTypeDetail';
import AdminProduct from '@/pages/AdminProduct.vue';
import AdminProductDetail from '@/pages/AdminProductDetail';

export const routerAdmin = [
  {
    path: pathAdminRouters.type,
    component: AdminType,
  },
  {
    path: `${pathAdminRouters.type}/${pathAdminRouters.createType}`,
    component: AdminTypeDetail,
  },
  {
    path: `${pathAdminRouters.type}/:id`,
    component: AdminTypeDetail,
  },
  {
    path: pathAdminRouters.brand,
    component: AdminBrand,
  },
  {
    path: `${pathAdminRouters.brand}/${pathAdminRouters.createBrand}`,
    component: AdminBrandDetail,
  },
  {
    path: `${pathAdminRouters.brand}/:id`,
    component: AdminBrandDetail,
  },
  {
    path: pathAdminRouters.product,
    component: AdminProduct,
  },
  {
    path: `${pathAdminRouters.product}/${pathAdminRouters.createProduct}`,
    component: AdminProductDetail,
  },
  {
    path: `${pathAdminRouters.product}/:id`,
    component: AdminProductDetail,
  },
  {
    path: ':pathMatch(.*)*',
    component: Error404Component,
  },
]