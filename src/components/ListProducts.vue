<template>
  <div class="products">
    <div class="products__container container">
      <div class="products__title">{{title}}</div>
      <div class="products__body">

        <div
          class="products__column"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct
            class="products__card-product"
            :product="product"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'

export default {
  components: {
    CardProduct,
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
};
</script>

<style lang="scss">
.products {
  padding: px2rem(32px) 0 px2rem(42px) 0;

  &__container {

  }

  &__title {
    font-size: px2rem(36px);
    line-height: 1.16;
    margin: 0 0 px2rem(10px) 0;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
    margin: px2rem(-10px);
  }

  &__column {
    flex: 0 1 25%;

    @media (max-width: 1250px) {
      flex: 0 1 33.333%;
    }
    @media (max-width: 900px) {
      flex: 0 1 50%;
    }
    @media (max-width: 480px) {
      flex: 0 1 100%;
    }
  }

  &__card-product {
    margin: px2rem(10px);
  }
}
</style>