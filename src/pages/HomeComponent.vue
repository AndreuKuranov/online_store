<template>
  <BannerComponent
    class="page__banner"
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    ListProducts,
    BannerComponent,
  },
  data() {
    return {
      titleTop: 'Топ продаж',
    }
  },
  computed: {
    ...mapState({
      productsTop: state => state.shop.productsTop,
    }),
  }
};
</script>

<style lang="scss">

</style>