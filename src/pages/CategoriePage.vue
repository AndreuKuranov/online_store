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
            :class="{ 'btn-active': item.id === selectedType.id }"
            class="list-filter__btn"
            type="button"
            @click="checkSelected(item, item.id, selectedType, setSelectedType)"
          >
            {{ item.name }}
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
            :class="{ 'btn-active': item.id === selectedBrand.id }"
            class="list-filter__btn"
            type="button"
            @click="checkSelected(item, item.id, selectedBrand, setSelectedBrand)"
          >
            {{ item.name }}
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

  <!-- <ListProducts
    class="page__products"
    :title="titleTop"
    :products="productsTop"
  /> -->
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
      selectedType: state => state.shop.selectedType,
      selectedBrand: state => state.shop.selectedBrand,
      page: state => state.shop.page,
    }),
  },
  methods: {
    ...mapMutations({
      setSelectedType: 'shop/setSelectedType',
      setSelectedBrand: 'shop/setSelectedBrand',
    }),
    ...mapActions({
      getTypesAction: 'shop/getTypesAction',
      getBrandsAction: 'shop/getBrandsAction',
      getDevicesAction: 'shop/getDevicesAction',
    }),
    checkSelected(item, id, selected, setSelected) {
      if (JSON.stringify(selected) !== '{}' && id === selected.id) {
        setSelected({});
      } else {
        setSelected(item);
      }
    }
  },
  mounted() {
    this.getTypesAction();
    this.getBrandsAction();
    this.getDevicesAction(null, null);
  },
  watch: {
    page() {
      this.getDevicesAction();
    },
    selectedType() {
      this.getDevicesAction();
    },
    selectedBrand() {
      this.getDevicesAction();
    }
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

.btn-active {
  background-color: #ffc107;
}
</style>