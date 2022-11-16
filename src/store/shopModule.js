import axios from "axios";

export const shopModule = {
  state: () => ({
    products: [
      { id: 'products1', name: 'Название товара', price: '9 999', img: '01.jpg' },
      { id: 'products2', name: 'Название товара', price: '9 999', img: '02.jpg' },
      { id: 'products3', name: 'Название товара', price: '9 999', img: '03.jpg' },
      { id: 'products4', name: 'Название товара', price: '9 999', img: '04.jpg' },
      { id: 'products5', name: 'Название товара', price: '9 999', img: '01.jpg' },
      { id: 'products6', name: 'Название товара', price: '9 999', img: '02.jpg' },
      { id: 'products7', name: 'Название товара', price: '9 999', img: '03.jpg' },
      { id: 'products8', name: 'Название товара', price: '9 999', img: '04.jpg' },
    ],
    productsTop: [
      { id: 'products1', name: 'Название товара', price: '8 888', img: '01.jpg' },
      { id: 'products2', name: 'Название товара', price: '8 888', img: '02.jpg' },
      { id: 'products3', name: 'Название товара', price: '8 888', img: '03.jpg' },
      { id: 'products4', name: 'Название товара', price: '8 888', img: '04.jpg' },
    ],
    typeProduct: [
      { id: 'typeProduct1', name: 'смартфоны' },
      { id: 'typeProduct2', name: 'телевизоры' },
      { id: 'typeProduct3', name: 'холодильники' },
    ],
    brandProduct: [
      { id: 'brandProduct1', name: 'samsung' },
      { id: 'brandProduct2', name: 'apple' },
      { id: 'brandProduct3', name: 'huawei' },
    ],
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