<template>
  <router-link
    to="/basket" 
    class="shopping-cart"
  >
    <span class="material-symbols-outlined shopping-cart__symbols">shopping_cart</span>
    <div class="shopping-cart__icon">2</div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.shopping-cart {
  @extend %link;
  position: relative;
  display: block;

  &__symbols {
    font-size: 28px;
    font-variation-settings: 'FILL' 1;

    @include min-width-xs {
      font-size: 32px;
    }
    @include min-width-md {
      font-size: 35px;
    }
  }

  &__icon {
    @extend %afterBefore;
    @include blockCenter;
    background-color: var(--danger-color);
    border-radius: var(--border-radius-50);
    width: 22px;
    height: 22px;
    top: -8px;
    right: -8px;
    color: var(--light-color);
    font-weight: 700;
    font-size: 14px;

    @include min-width-xs {
      width: 26px;
      height: 26px;
      top: -10px;
      right: -10px;
      font-size: 16px;
    }
    @include min-width-md {
      width: 30px;
      height: 30px;
      top: -12px;
      right: -12px;
    }
  }
}
</style>