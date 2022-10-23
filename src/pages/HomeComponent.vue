<template>
  <BannerComponent
    class="page__banner"
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
import ListProducts from '@/components/ListProducts.vue';
import BannerComponent from '@/components/BannerComponent.vue';

export default {
  components: {
    ListProducts,
    BannerComponent,
  },
  data() {
    return {
      title: 'Товары',
      products: [
        {id: 'products1', link: '/product', name: 'Название товара', price: '9 999', img: '01.jpg'},
        {id: 'products2', link: '/product', name: 'Название товара', price: '9 999', img: '02.jpg'},
        {id: 'products3', link: '/product', name: 'Название товара', price: '9 999', img: '03.jpg'},
        {id: 'products4', link: '/product', name: 'Название товара', price: '9 999', img: '04.jpg'},
      ],
      titleTop: 'Топ продаж',
      productsTop: [
        {id: 'products1', link: '/product', name: 'Название товара', price: '8 888', img: '01.jpg'},
        {id: 'products2', link: '/product', name: 'Название товара', price: '8 888', img: '02.jpg'},
        {id: 'products3', link: '/product', name: 'Название товара', price: '8 888', img: '03.jpg'},
        {id: 'products4', link: '/product', name: 'Название товара', price: '8 888', img: '04.jpg'},
      ]
    }
  },
};
</script>

<style lang="scss">
.banner {
  background-color: $additionalBGColor;
  margin: 0 0 px2rem(32px) 0;

  &__container {

  }

  &__my-swiper {
    
  }
}
</style>