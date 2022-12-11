import { 
  getTypes,
  deleteTypes,
  putTypes,
  getOneTypes,
  getBrands,
  getOneBrands,
  putBrands,
  deleteBrands,
  getDevices,
  getOneDevice,
  deleteDevices,
  putDevices,
} from '@/http/productAPI';

export const shopModule = {
  state: () => ({
    products: [],
    productsTop: [],
    typeProduct: [],
    brandProduct: [],
    selectedType: null,
    selectedBrand: null,
    page: 1,
    totalProduct: 0,
    limit: 4,
    correctUrl: '',
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
    setCorrectUrl(state, correctUrl) {
      state.correctUrl = correctUrl;
    }
  },

  actions: {
    // ------------ type ------------
    async getTypesAction({ state, commit }) {
      try {
        const data = await getTypes();
        commit('setTypeProduct', data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getOneTypesAction({ state, commit }, id) {
      try {
        const data = await getOneTypes(id);
        return data
      } catch (e) {
        console.log(e.message);
      }
    },
    async deleteTypesAction({ state, commit }, id) {
      try {
        await deleteTypes(id);
        commit('setTypeProduct', state.typeProduct.filter(item => item.id !== id));
      } catch (e) {
        console.log(e.message);
      }
    },
    async putTypesAction({ state, commit }, value) {
      try {
        await putTypes(value.id, value.name);
      } catch (e) {
        console.log(e.message);
      }
    },
    // -------------------------

    // ------------ brand ------------
    async getBrandsAction({ state, commit }) {
      try {
        const data = await getBrands();
        commit('setBrandProduct', data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getOneBrandsAction({ state, commit }, id) {
      try {
        const data = await getOneBrands(id);
        return data
      } catch (e) {
        console.log(e.message);
      }
    },
    async deleteBrandsAction({ state, commit }, id) {
      try {
        await deleteBrands(id);
        commit('setBrandProduct', state.brandProduct.filter(item => item.id !== id));
      } catch (e) {
        console.log(e.message);
      }
    },
    async putBrandsAction({ state, commit }, value) {
      try {
        await putBrands(value.id, value.name);
      } catch (e) {
        console.log(e.message);
      }
    },
    // -------------------------

    // ------------ device ------------
    async getDevicesAction( { state, commit }, value) {
      try {
        let typeId = value.typeId ? value.typeId : state.selectedType?.id;
        let brandId = value.brandId ? value.brandId : state.selectedBrand?.id;
        let page = value.page ? value.page : state.page;
        let limit = value.limit ? value.limit : state.limit;

        const data = await getDevices(
          typeId, 
          brandId, 
          page, 
          limit
        );
        commit('setProducts', data.rows);
        commit('setTotalProduct', data.count);
      } catch (e) {
        console.log(e.message);
      }
    },
    // временно, пока не реализую рейтинг
    async getDevicesTopAction( { state, commit }, value) {
      try {
        let typeId = value.typeId ? value.typeId : state.selectedType?.id;
        let brandId = value.brandId ? value.brandId : state.selectedBrand?.id;
        let page = value.page ? value.page : state.page;
        let limit = value.limit ? value.limit : state.limit;

        const data = await getDevices(
          typeId, 
          brandId, 
          page, 
          limit
        );
        
        commit('setProductsTop', data.rows);
      } catch (e) {
        console.log(e.message);
      }
    },
    // ----------------------------------
    async getOneDevicesAction({ state, commit }, id) {
      try {
        const data = await getOneDevice(id);
        return data
      } catch (e) {
        console.log(e.message);
      }
    },
    async deleteDevicesAction({ state, commit }, id) {
      try {
        await deleteDevices(id);
        commit('setProducts', state.products.filter(item => item.id !== id));
      } catch (e) {
        console.log(e.message);
      }
    },
    async putDevicesAction({ state, commit }, value) {
      try {
        await putDevices(
          value.id,
          value.name,
          value.price,
          value.img,
          value.brandId,
          value.typeId,
          value.info,
        );
      } catch (e) {
        console.log(e.message);
      }
    },
    // -------------------------
  },
  namespaced: true
}