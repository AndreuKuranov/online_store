<template>
  <a 
    href="javascript:;" 
    @click="$router.push('/basket')" 
    class="shopping-cart"
  >
    <span class="material-symbols-outlined shopping-cart__symbols">shopping_cart</span>
    <div class="shopping-cart__icon">2</div>
  </a>
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
    font-size: 35px;
    font-variation-settings: 'FILL' 1;

    @include max-width-md {
      font-size: 32px;
    }

    @include max-width-xs {
      font-size: 28px;
    }
  }

  &__icon {
    @extend %afterBefore;
    @include blockCenter;
    background-color: var(--danger-color);
    border-radius: var(--border-radius-50);
    width: 30px;
    height: 30px;
    top: -12px;
    right: -12px;
    color: var(--light-color);
    font-weight: 700;

    @include max-width-md {
      width: 26px;
      height: 26px;
      top: -10px;
      right: -10px;
    }

    @include max-width-xs {
      width: 22px;
      height: 22px;
      top: -8px;
      right: -8px;
    }
  }
}
</style>