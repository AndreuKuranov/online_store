<template>
  <TitleBlock class="page__title">
    Каталог
  </TitleBlock>

  <div class="page__filter filter">
    <div class="filter__container container">
      <h3 class="filter__title">Тип</h3>
      <ul class="filter__list list-filter">
        <li
          class="list-filter__item"
          v-for="item in typeProduct"
          :key="item.id"
        >
          <my-button
            class="list-filter__btn"
            type="button"
          >
            {{ item.text }}
          </my-button>
        </li>
      </ul>

      <h3 class="filter__title">Бренд</h3>
      <ul class="filter__list list-filter">
        <li
          class="list-filter__item"
          v-for="item in brandProduct"
          :key="item.id"
        >
          <my-button
            class="list-filter__btn"
            type="button"
          >
            {{ item.text }}
          </my-button>
        </li>
      </ul>
    </div>
  </div>

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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    ListProducts,
    TitleBlock,
    PaginationComponent,
  },
  data() {
    return {
      titleTop: 'Топ продаж',
    }
  },
  computed: {
    ...mapState({
      products: state => state.shop.products,
      productsTop: state => state.shop.productsTop,
      typeProduct: state => state.shop.typeProduct,
      brandProduct: state => state.shop.brandProduct,
    }),
  }
}
</script>

<style lang="scss">
.filter {

  &__container {

  }

  &__list {
    margin-bottom: 20px;
  }
}

.list-filter {
  @extend %list;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  &__item {
    
  }

  &__btn {

  }
}
</style>