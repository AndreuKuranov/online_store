<template>
  <div class="card-product">
    <!--    это ссылка, не div, #футакимбыть, роутер у дива - плохо -->
    <div 
      @click="$router.push(product.link)" 
      class="card-product__img-block"
    >
      <img 
        class="card-product__img"
        :src="require(`@/image/product/${product.img}`)" 
        :alt="product.name"
      >
    </div>
    <div class="card-product__content">
      <h4
        @click="$router.push(product.link)" 
        class="card-product__link"
      >
        {{product.name}}
      </h4>
      <div class="card-product__price">
        <div class="card-product__text">{{product.price}} руб</div>
        <my-button
          v-if="!basket"
          class="card-product__btn"
          type="button"
        >
          Купить
        </my-button>
        <CounterComponent
          v-if="basket"
          class="card-product__btn"
        />
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
  border-radius: px2rem($mediumBorderRadius);
  overflow: hidden;
  line-height: 1.16;
  box-shadow: px2rem(5px) px2rem(5px) px2rem(5px) rgba($darkColor, 0.3);
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  &__img-block {
    position: relative;
    display: block;
    cursor: pointer;
    padding: 0px 0px 60% 0px;
    background-color: $baseBGColor;
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
    background-color: $additionalBGColor;
    padding: px2rem(10px) px2rem(20px) px2rem(20px) px2rem(25px);

    @media (max-width: 768px) {
      padding: px2rem(10px) px2rem(20px) px2rem(20px) px2rem(20px);
    }
  }

  &__link {
    cursor: pointer;
    display: inline-block;
    margin: 0 0 px2rem(45px) 0;
    font-weight: 400;
    font-size: $mainFontSize;

    @media (max-width: 768px) {
      margin: 0 0 px2rem(30px) 0;
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: px2rem(10px);
    justify-content: space-between;
    font-size: px2rem($mainFontSize);
  }

  &__text {
    padding: 0 0 px2rem(10px) 0;
  }

  &__btn {
    flex: 0 1 50%;
    min-height: px2rem($baseHeightBtn);
  }
}
</style>