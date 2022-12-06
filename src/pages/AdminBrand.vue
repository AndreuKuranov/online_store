<template>
  <div class="page-admin__brand brand">
    <h2 class="brand__title">Бренды</h2>

    <ElementsList
      class="brand__elements-list"
      :elements="brandProduct"
      @deleteElement="deleteBrandsAction"
      url="brand"
    />

    <LinkAdd
      class="brand__link-add"
      url="brand/creatingNewBrand" 
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
      getBrandsAction: 'shop/getBrandsAction',
      deleteBrandsAction: 'shop/deleteBrandsAction',
    }),
  },
  computed: {
    ...mapState({
      brandProduct: state => state.shop.brandProduct,
    }),
  },
  mounted() {
    this.getBrandsAction();
  },
}
</script>

<style lang="scss">
.brand {
  margin-bottom: 30px;

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