<template>
  <my-swiper
    class="page__my-swiper"
  />
  <ListProducts
    class="page__products"
    :title="title"
    :products="products"
  />
  <ListProducts
    class="page__products"
    :title="titleTop"
    :products="productsTop"
  />
</template>

<script>
import MySwiper from '@/components/UI/MySwiper.vue'
import ListProducts from '@/components/ListProducts.vue'

export default {
  components: {
    MySwiper,
    ListProducts,
  },
  data() {
    return {
      title: 'Товары',
      products: [
        {id: "products1", link: "#", name: "Название товара", price: "9 999", img: '01.jpg'},
        {id: "products2", link: "#", name: "Название товара", price: "9 999", img: '02.jpg'},
        {id: "products3", link: "#", name: "Название товара", price: "9 999", img: '03.jpg'},
        {id: "products4", link: "#", name: "Название товара", price: "9 999", img: '04.jpg'},
      ],
      titleTop: 'Топ продаж',
      productsTop: [
        {id: "products1", link: "#", name: "Название товара", price: "8 888", img: '01.jpg'},
        {id: "products2", link: "#", name: "Название товара", price: "8 888", img: '02.jpg'},
        {id: "products3", link: "#", name: "Название товара", price: "8 888", img: '03.jpg'},
        {id: "products4", link: "#", name: "Название товара", price: "8 888", img: '04.jpg'},
      ]
    }
  },
};
</script>

<style lang="scss">

</style>