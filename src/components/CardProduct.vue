<template>
  <div class="card-product">
    <a 
      href="javascript:;"
      @click="$router.push(product.link)"
      class="card-product__img-block"
    >
      <img 
        class="card-product__img"
        :src="require(`@/image/product/${product.img}`)"
        :alt="product.name"
      >
    </a>
    <div class="card-product__content">
      <a 
        href="javascript:;"
        @click="$router.push(product.link)"
        class="card-product__link"
      >
        <h4 class="card-product__title">{{ product.name }}</h4>
      </a>
      <div class="card-product__price">
        <div class="card-product__text">{{ product.price }} руб</div>
        <my-button 
          v-if="!basket"
          class="card-product__btn"
          type="button"
        >
          Купить
        </my-button>
        <CounterComponent v-if="basket" class="card-product__btn" />
      </div>
    </div>
  </div>
</template>

<script>
import CounterComponent from '@/components/CounterComponent.vue';

export default {
  components: {
    CounterComponent
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    basket: {
      type: Boolean,
      required: false
    }
  },
}
</script>

<style lang="scss">
.card-product {
  border-radius: var(--medium-border-radius);
  overflow: hidden;
  line-height: 1.16;
  box-shadow: 5px 5px 5px rgba(var(--dark-color-rgb), 0.3);
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  &__img-block {
    position: relative;
    display: block;
    padding: 0px 0px 60% 0px;
    background-color: var(--base-bg-color);
  }

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    vertical-align: top;
  }

  &__content {
    background-color: var(--additional-bg-color);
    padding: 10px 20px 20px 25px;

    @include max-width-md {
      padding: 10px 16px 16px 20px;
    }

    @include max-width-xs {
      padding: 10px 12px 12px 16px;
    }
  }

  &__link {
    @extend %link;
    display: inline-block;
    margin: 0 0 45px 0;
    font-size: var(--main-font-size);

    @include max-width-md {
      margin: 0 0 30px 0;
    }

    @include max-width-xs {
      margin: 0 0 20px 0;
    }
  }

  &__title {
    font-weight: 400;
    margin: 0;
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    font-size: var(--main-font-size);

    @include max-width-sm {
      gap: 8px;
      font-size: 16px;
    }
  }

  &__text {
    padding: 0 0 10px 0;

    @include max-width-md {
      padding: 0 0 6px 0;
    }

    @include max-width-xs {
      padding: 0 0 4px 0;
    }
  }

  &__btn {
    flex: 0 1 50%;
  }
}
</style>