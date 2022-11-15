import axios from "axios";

export const shopModule = {
  state: () => ({
    products: [
      { id: 'products1', link: '/product', name: 'Название товара', price: '9 999', img: '01.jpg' },
      { id: 'products2', link: '/product', name: 'Название товара', price: '9 999', img: '02.jpg' },
      { id: 'products3', link: '/product', name: 'Название товара', price: '9 999', img: '03.jpg' },
      { id: 'products4', link: '/product', name: 'Название товара', price: '9 999', img: '04.jpg' },
      { id: 'products5', link: '/product', name: 'Название товара', price: '9 999', img: '01.jpg' },
      { id: 'products6', link: '/product', name: 'Название товара', price: '9 999', img: '02.jpg' },
      { id: 'products7', link: '/product', name: 'Название товара', price: '9 999', img: '03.jpg' },
      { id: 'products8', link: '/product', name: 'Название товара', price: '9 999', img: '04.jpg' },
    ],
    productsTop: [
      { id: 'products1', link: '/product', name: 'Название товара', price: '8 888', img: '01.jpg' },
      { id: 'products2', link: '/product', name: 'Название товара', price: '8 888', img: '02.jpg' },
      { id: 'products3', link: '/product', name: 'Название товара', price: '8 888', img: '03.jpg' },
      { id: 'products4', link: '/product', name: 'Название товара', price: '8 888', img: '04.jpg' },
    ],
    typeProduct: [
      { id: 'typeProduct1', text: 'смартфоны' },
      { id: 'typeProduct2', text: 'телевизоры' },
      { id: 'typeProduct3', text: 'холодильники' },
    ],
    brandProduct: [
      { id: 'brandProduct1', text: 'samsung' },
      { id: 'brandProduct2', text: 'apple' },
      { id: 'brandProduct3', text: 'huawei' },
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