<template>
  <div class="card-product">
    <a 
      :href="product.link" 
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
        :href="product.link" 
        class="card-product__link"
      >
        {{product.name}}
      </a>
      <div class="card-product__price">
        <div class="card-product__text">{{product.price}} руб</div>
        <my-button 
          class="card-product__btn"
          type="button"
        >
          Купить
        </my-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss">
.card-product {
  border-radius: px2rem(10px);
  overflow: hidden;
  font-size: px2rem(18px);
  line-height: 1.16;
  box-shadow: px2rem(5px) px2rem(5px) px2rem(5px) rgba($blackColor, 0.3);

  &__img-block {
    position: relative;
    display: block;
    padding: 0px 0px 60% 0px;
    background-color: #C9DEF1;
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
    background-color: #C4C4C4;
    padding: px2rem(10px) px2rem(20px) px2rem(20px) px2rem(25px);

    @media (max-width: 768px) {
      padding: px2rem(10px) px2rem(20px) px2rem(20px) px2rem(20px);
    }
  }

  &__link {
    @extend %link;
    display: block;
    margin: 0 0 px2rem(45px) 0;

    @media (max-width: 768px) {
      margin: 0 0 px2rem(30px) 0;
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: px2rem(10px);
    justify-content: space-between;
  }

  &__text {
    padding: 0 0 px2rem(10px) 0;
  }

  &__btn {
    flex: 0 1 50%;
    min-height: px2rem(60px);
  }
}
</style>