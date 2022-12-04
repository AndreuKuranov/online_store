<template>
  <div class="page-admin__product product">
    <h2 class="product__title">Продукты</h2>

    <ElementsList
      class="product__elements-list"
      :elements="products"
      @deleteElement="deleteDevicesAction"
      url="product"
    />

    <LinkAdd
      class="product__link-add"
      url="product/creatingNewProduct" 
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import ElementsList from '@/components/admin/ElementsList.vue';
import LinkAdd from '@/components/admin/LinkAdd.vue';

export default {
  components: {
    ElementsList,
    LinkAdd,
  },
  methods: {
    ...mapActions({
      getDevicesAction: 'shop/getDevicesAction',
      deleteDevicesAction: 'shop/deleteDevicesAction',
    }),
    ...mapMutations({
      setSelectedType: 'shop/setSelectedType',
      setSelectedBrand: 'shop/setSelectedBrand',
    }),
  },
  computed: {
    ...mapState({
      products: state => state.shop.products,
    }),
  },
  mounted() {
    this.setSelectedType({});
    this.setSelectedBrand({});

    this.getDevicesAction({
      typeId: null, 
      brandId: null,
      page: 1,
      limit: 100,
    });
  },
}
</script>

<style lang="scss">
.product {

  &__title {

  }

  &__elements-list {

  }

  &__link-add {
    margin-top: 20px;
    margin-left: auto;
  }
}
</style>