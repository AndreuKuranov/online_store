<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo logo">
        <a class="logo__link" href="/" title="На главную">
          <img class="logo__img" src="@/image/vue-logo.png" alt="vue logo">
          <p class="logo__text">Vue-spa-shop</p>
        </a>
      </div>

      <div class="header__menu">
        <Navbar class="header__navbar" />

        <a href="tel:+74999999999" title="Телефон" class="header__phone phone">
          <span class="material-symbols-outlined phone__symbols">call</span>
          <span class="phone__text">+7 (499) 999 99 99</span>
        </a>

        <div class="header__shopping-cart shopping-cart">
          <span class="material-symbols-outlined shopping-cart__symbols">shopping_cart</span>
          <div class="shopping-cart__icon">2</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Navbar from "@/components/Navbar.vue"

  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="scss" scoped>
.header {
  background-color: $baseBdColor;

  &__container {
    display: flex;
    align-items: center;
    column-gap: px2rem(24px);
    min-height: px2rem(100px);
  }
  &__logo {
    min-width: px2rem(254px);

    @media (max-width: 768px) {
      min-width: px2rem(140px);
    }
  }
  &__navbar {
  }
  &__menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: px2rem(20px);

    @media (max-width: 768px) {
      justify-content: flex-end;
    }
  }
  &__phone {
    @media (min-width: 769px) {
      margin-left: px2rem(150px);
    }
  }
  &__shopping-cart {
    margin: px2rem(18px) px2rem(45px) 0 0;

    @media (max-width: 768px) {
      margin: px2rem(18px) px2rem(25px) 0 0;
    }
  }
}

.logo {
  &__link {
    @extend %link;
    display: flex;
    column-gap: px2rem(18px);
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
  }
  &__img {
    width: px2rem(71px);
    height: px2rem(71px);

    @media (max-width: 768px) {
      width: px2rem(61px);
      height: px2rem(61px);
    }
  }
  &__text {
    text-transform: uppercase;
    font-size: px2rem(24px);
    margin: 0;

    @media (max-width: 768px) {
      font-size: px2rem(18px);
    }
  }
}

.phone {
  @extend %link;
  display: flex;
  align-items: center;

  &__symbols {
    font-variation-settings:
    'FILL' 1,
  }
  &__text {
    min-width: px2rem(152px);

    @media (max-width: 992px) {
      display: none ;
    }
  }
}

.shopping-cart {
  position: relative;
  cursor: pointer;

  &__symbols {
    font-size: px2rem(35px);
    font-variation-settings:
    'FILL' 1,
  }
  

  &__icon {
    @extend %afterBefore;
    @include blockCenter;
    background-color: $redColor;
    border-radius: 50%;
    width: px2rem(30px);
    height: px2rem(30px);
    top: px2rem(-12px);
    right: px2rem(-12px);
    color: $whiteColor;
    font-weight: 700;
    line-height: 100%;
  }
}
</style>