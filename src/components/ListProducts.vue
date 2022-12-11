<template>
  <div class="products">
    <div class="products__container container">
      <h2 v-if="title" class="products__title">{{ title }}</h2>
      <div class="products__body">

        <CardProduct
          v-for="product in products"
          :key="product.id"
          class="products__card-product"
          :product="product"
        />

      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue';

export default {
  components: {
    CardProduct,
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.products {
  padding: 0 0 24px 0;

  @include min-width-xs {
    padding: 0 0 34px 0;
  }

  @include min-width-md {
    padding: 0 0 42px 0;
  }

  &__container {

  }

  &__title {
    font-size: 26px;
    font-weight: 400;
    line-height: 1.16;
    margin: 0 0 10px 0;

    @include min-width-xs {
      font-size: 32px;
    }

    @include min-width-md {
      font-size: var(--title-font-size);
    }
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(var(--layout-grid-min-width, 290px),1fr));
    gap: var(--layout-grid-gap, 20px);
  }

  &__card-product {
    
  }
}
</style>