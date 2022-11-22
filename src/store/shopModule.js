import axios from "axios";

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
  }),
  getters: {

  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProductsTop(state, productsTop) {
      state.productsTop = productsTop
    },
    setTypeProduct(state, typeProduct) {
      state.typeProduct = typeProduct
    },
    setBrandProduct(state, brandProduct) {
      state.brandProduct = brandProduct
    },
    setSelectedType(state, selectedType) {
      state.selectedType = selectedType
    },
    setSelectedBrand(state, selectedBrand) {
      state.selectedBrand = selectedBrand
    },
  },
  actions: {

  },
  namespaced: true
}