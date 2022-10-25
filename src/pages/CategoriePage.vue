<template>
  <TitleBlock class="page__title">
    Название категории
  </TitleBlock>

  <ListProducts
    class="page__products"
    :products="products"
  />

  <PaginationComponent class="page__pagination" />

  <ListProducts
    class="page__products"
    :title="titleTop"
    :products="productsTop"
  />
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  components: {
    ListProducts,
    TitleBlock,
    PaginationComponent,
  },
  data() {
    return {
      title: 'Название категории',
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
      titleTop: 'Топ продаж',
      productsTop: [
        { id: 'products1', link: '/product', name: 'Название товара', price: '8 888', img: '01.jpg' },
        { id: 'products2', link: '/product', name: 'Название товара', price: '8 888', img: '02.jpg' },
        { id: 'products3', link: '/product', name: 'Название товара', price: '8 888', img: '03.jpg' },
        { id: 'products4', link: '/product', name: 'Название товара', price: '8 888', img: '04.jpg' },
      ]
    }
  },
}
</script>

<style lang="scss">

</style>