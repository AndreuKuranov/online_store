<template>
  <TitleBlock class="page__title">
    Каталог
  </TitleBlock>

  <FilterComponent
    class="page__filter"
    title="Тип"
    :listElements="typeProduct"
    :selected="selectedType"
    @setSelected="setSelectedType"
  />

  <FilterComponent
    class="page__filter"
    title="Бренд"
    :listElements="brandProduct"
    :selected="selectedBrand"
    @setSelected="setSelectedBrand"
  />

  <ListProducts
    v-if="check"
    class="page__products"
    :products="products"
  />

  <PaginationComponent
    v-if="check"
    class="page__pagination" 
  />

  <WarningComponent 
    class="page__warning"
    v-if="!check"
  >
    {{ textWarning }}
  </WarningComponent>

  <ListProducts
    class="page__products"
    title="Топ продаж"
    :products="productsTop"
  />
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';
import WarningComponent from '@/components/WarningComponent.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    ListProducts,
    TitleBlock,
    PaginationComponent,
    FilterComponent,
    WarningComponent,
  },
  data() {
    return {
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
      productsTop: state => state.shop.productsTop,
    }),

    checkProduct() {
      if (JSON.stringify(this.selectedType) == '{}' && JSON.stringify(this.selectedBrand) == '{}' && this.products.length === 0) {
        return true;
      } 
    },
    checkFilter() {
      if ((JSON.stringify(this.selectedType) !== '{}' || JSON.stringify(this.selectedBrand) !== '{}') && this.products.length === 0) {
        return true;
      }
    },
    check() {
      if (!this.checkProduct && !this.checkFilter) {
        return true;
      }
    },
    textWarning() {
      if (this.checkProduct) {
        return 'Нет товаров';
      }

      if (this.checkFilter) {
        return 'Товары не найдены, измените параметры фильтра';
      }
    }
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
  },
  mounted() {
    this.setSelectedType({});
    this.setSelectedBrand({});
    this.getTypesAction();
    this.getBrandsAction();
    this.getDevicesAction({});
  },
  watch: {
    page() {
      this.getDevicesAction({});
    },
    selectedType() {
      this.getDevicesAction({});
    },
    selectedBrand() {
      this.getDevicesAction({});
    }
  }
}
</script>

<style lang="scss">

</style>