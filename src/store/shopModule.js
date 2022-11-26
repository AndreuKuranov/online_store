import { getTypes, getBrands, getDevices } from '@/http/productAPI';

export const shopModule = {
  state: () => ({
    products: [],
    productsTop: [
      { id: 'products1', name: 'Название товара', price: '8 888', img: '01.jpg' },
      { id: 'products2', name: 'Название товара', price: '8 888', img: '02.jpg' },
      { id: 'products3', name: 'Название товара', price: '8 888', img: '03.jpg' },
      { id: 'products4', name: 'Название товара', price: '8 888', img: '04.jpg' },
    ],
    typeProduct: [],
    brandProduct: [],
    selectedType: {},
    selectedBrand: {},
    page: 1,
    totalProduct: 0,
    limit: 4,
  }),

  getters: {

  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProductsTop(state, productsTop) {
      state.productsTop = productsTop;
    },
    setTypeProduct(state, typeProduct) {
      state.typeProduct = typeProduct;
    },
    setBrandProduct(state, brandProduct) {
      state.brandProduct = brandProduct;
    },
    setSelectedType(state, selectedType) {
      state.page = 1;
      state.selectedType = selectedType;
    },
    setSelectedBrand(state, selectedBrand) {
      state.page = 1;
      state.selectedBrand = selectedBrand;
    },
    setTotalProduct(state, totalProduct) {
      state.totalProduct = totalProduct;
    },
    setPage(state, page) {
      state.page = page;
    },
    setLimit(state, setLimit) {
      state.setLimit = setLimit;
    },
  },

  actions: {
    async getTypesAction({state, commit}) {
      try {
        const data = await getTypes();
        commit('setTypeProduct', data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getBrandsAction({state, commit}) {
      try {
        const data = await getBrands();
        commit('setBrandProduct', data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getDevicesAction(
      {state, commit}, 
      typeId = state.selectedType.id, 
      brandId = state.selectedBrand.id, 
      page = state.page, 
      limit = state.limit
    ) {
      try {
        const data = await getDevices(typeId, brandId, page, limit);
        commit('setProducts', data.rows);
        commit('setTotalProduct', data.count);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  namespaced: true
}