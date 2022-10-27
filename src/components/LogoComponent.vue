<template>
  <div class="logo">
    <a 
      href="javascript:;" 
      class="logo__link" 
      @click="$router.push('/')" 
      title="На главную"
    >
      <img class="logo__img" src="@/image/vue-logo.png" alt="vue logo">
      <span class="logo__text">Vue-spa-shop</span>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.logo {
  min-width: 110px;

  @include min-width-xs {
    min-width: 140px;
  }
  @include min-width-md {
    min-width: 254px;
  }

  &__link {
    @extend %link;
    @include blockCenter;
    column-gap: 10px;
    flex-direction: column;

    @include min-width-md {
      flex-direction: row;
      column-gap: 18px;
    }
  }

  &__img {
    width: 48px;
    height: 48px;

    @include min-width-xs {
      width: 54px;
      height: 54px;
    }
    @include min-width-sm {
      width: 60px;
      height: 60px;
    }
    @include min-width-md {
      width: 71px;
      height: 71px;
    }
  }

  &__text {
    text-transform: uppercase;
    font-size: 15px;
    margin: 0;

    @include min-width-xs {
      font-size: var(--main-font-size);
    }
    @include min-width-md {
      font-size: var(--medium-font-size);
    }
  }
}
</style>