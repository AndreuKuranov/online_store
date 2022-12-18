<template>
  <TitleBlock class="page__title">
    Каталог
  </TitleBlock>

  <FilterComponent
    class="page__filter"
    title="Тип"
    :listElements="typeProduct"
    :selected="selectedType"
    @setSelected="setSelectedTypePage"
  />

  <FilterComponent
    class="page__filter"
    title="Бренд"
    :listElements="brandProduct"
    :selected="selectedBrand"
    @setSelected="setSelectedBrandPage"
  />

  <ListProducts
    v-if="checkIfThereAreProducts"
    class="page__products"
    :products="products"
  />

  <PaginationComponent
    v-if="checkIfThereAreProducts"
    class="page__pagination" 
  />

  <WarningComponent 
    class="page__warning"
    v-if="!checkIfThereAreProducts"
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
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

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
    }),
    ...mapGetters({
      queryParameters: 'shop/queryParameters',
    }),

    checkIfThereAreProductsWithoutFilter() {
      let value = false;
      if (this.selectedType == null && this.selectedBrand == null && this.products.length === 0) {
        value = true;
      } 
      return value;
    },
    checkIfThereAreProductsWithFilter() {
      let value = false;
      if ((this.selectedType !== null || this.selectedBrand !== null) && this.products.length === 0) {
        value = true;
      }
      return value;
    },
    checkIfThereAreProducts() {
      let value = false;
      if (!this.checkIfThereAreProductsWithoutFilter && !this.checkIfThereAreProductsWithFilter) {
        value = true;
      }
      return value;
    },

    textWarning() {
      if (this.checkIfThereAreProductsWithoutFilter) {
        return 'Нет товаров';
      }

      if (this.checkIfThereAreProductsWithFilter) {
        return 'Товары не найдены, измените параметры фильтра';
      }
    },
  
    setParametersQuery() {
      const query = {};

      if (this.page > 1) {
        query.page = this.page;
      }

      if (this.selectedType?.id) {
        query.type = this.selectedType.id
      }

      if (this.selectedBrand?.id) {
        query.brand = this.selectedBrand.id
      }

      return query
    },
  },
  methods: {
    ...mapMutations({
      setSelectedType: 'shop/setSelectedType',
      setSelectedBrand: 'shop/setSelectedBrand',
      setSelectedTypePage: 'shop/setSelectedTypePage',
      setSelectedBrandPage: 'shop/setSelectedBrandPage',
      setPage: 'shop/setPage',
    }),
    ...mapActions({
      getTypesAction: 'shop/getTypesAction',
      getBrandsAction: 'shop/getBrandsAction',
      getDevicesAction: 'shop/getDevicesAction',
    }),

    checkParametersQuery() {
      if (this.$route.query.page) {
        this.setPage(this.$route.query.page)
      } else {
        this.setPage(1);
      }

      if (this.$route.query.type) {
        this.setSelectedType({id: this.$route.query.type})
      } else {
        this.setSelectedType(null);
      }

      if (this.$route.query.brand) {
        this.setSelectedBrand({id: this.$route.query.brand})
      } else {
        this.setSelectedBrand(null);
      }
    }
  },
  created() {
    this.checkParametersQuery();
  },
  mounted() {
    this.getTypesAction();
    this.getBrandsAction();

    if (JSON.stringify(this.$route.query) === '{}') {
      this.getDevicesAction({});
    }
  },
  watch: {
    queryParameters() {
      this.getDevicesAction({});
      this.$router.replace({ query: this.setParametersQuery });
    },

    $route(toRoute, ftomRoute) {
      if (JSON.stringify(toRoute.query) === '{}') {
        this.setPage(1);
        this.setSelectedType(null);
        this.setSelectedBrand(null);
      } else {
        // this.checkParametersQuery();
      }
    }
  }
}
</script>

<style lang="scss">

</style>