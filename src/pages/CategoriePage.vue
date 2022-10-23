<template>
  <TitleBlock
    class="page__title"
  >
    Название категории
  </TitleBlock>

  <ListProducts
    class="page__products"
    :products="products"
  />

  <div class="page__pagination pagination">
    <div class="pagination__container container">
      <ul class="pagination__list">
        <li class="pagination__item pagination__item--chevron">
          <span class="pagination__material-symbols-outlined material-symbols-outlined">chevron_left</span>
        </li>

        <li class="pagination__item pagination__item--active">
          1
        </li>
        <li class="pagination__item">
          2
        </li>
        <li class="pagination__item">
          3
        </li>
        <li class="pagination__item">
          4
        </li>
        <li class="pagination__item">
          5
        </li>

        <li class="pagination__item pagination__item--chevron">
          <span class="pagination__material-symbols-outlined material-symbols-outlined">chevron_right</span>
        </li>
      </ul>
    </div>
  </div>

  <ListProducts
    class="page__products"
    :title="titleTop"
    :products="productsTop"
  />
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import TitleBlock from '@/components/TitleBlock.vue';

export default {
  components: {
    ListProducts,
    TitleBlock,
  },
  data() {
    return {
      title: 'Название категории',
      products: [
        {id: 'products1', link: '/product', name: 'Название товара', price: '9 999', img: '01.jpg'},
        {id: 'products2', link: '/product', name: 'Название товара', price: '9 999', img: '02.jpg'},
        {id: 'products3', link: '/product', name: 'Название товара', price: '9 999', img: '03.jpg'},
        {id: 'products4', link: '/product', name: 'Название товара', price: '9 999', img: '04.jpg'},
        {id: 'products5', link: '/product', name: 'Название товара', price: '9 999', img: '01.jpg'},
        {id: 'products6', link: '/product', name: 'Название товара', price: '9 999', img: '02.jpg'},
        {id: 'products7', link: '/product', name: 'Название товара', price: '9 999', img: '03.jpg'},
        {id: 'products8', link: '/product', name: 'Название товара', price: '9 999', img: '04.jpg'},
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
}
</script>

<style lang="scss">
.pagination {
  margin: px2rem(12px) 0 px2rem(45px) 0;

  &__container {
    display: flex;
    justify-content: center;
  }

  &__list {
    @extend %list;
    display: flex;
    gap: px2rem(46px);

    @media (max-width: 768px) {
      gap: px2rem(26px);
    }
    @media (max-width: 480px) {
      gap: px2rem(12px);
    }
  }

  &__item {
    @include blockCenter;
    background-color: rgba($mutedColor, 0.7);
    cursor: pointer;
    height: px2rem(60px);
    width: px2rem(60px);
    border-radius: px2rem($smallBorderRadius);
    font-size: px2rem($titleFontSize);

    @media (max-width: 768px) {
      height: px2rem(40px);
      width: px2rem(40px);
      font-size: px2rem(26px);
    }
  }

  &__item--chevron {
    background-color: $baseBGColor;
  }

  &__item--active {
    cursor: default;
    background-color: $baseBGColor;
  }

  &__material-symbols-outlined {
    font-size: px2rem($bigFontSize);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: px2rem(30px);
    }
  }
}
</style>