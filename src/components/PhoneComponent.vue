<template>
  <a href="tel:+74999999999" title="Телефон" class="phone">
    <span class="material-symbols-outlined phone__symbols">call</span>
    <span class="phone__text">+7 (499) 999 99 99</span>
  </a>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
.phone {
  @extend %link;
  display: flex;
  align-items: center;

  &__symbols {
    font-variation-settings: 'FILL' 1;
  }

  &__text {
    min-width: 170px;
    font-size: var(--main-font-size);
    display: none;

    @include min-width-lg {
      display: block;
    }
  }
}
</style>