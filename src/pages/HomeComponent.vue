<template>
  <BannerComponent
    class="page__banner"
  />

  <ListProducts
    class="page__products"
    title="Топ продаж"
    :products="productsTop"
  />
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import { mapState } from 'vuex';

export default {
  components: {
    ListProducts,
    BannerComponent,
  },
  data() {
    return {
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