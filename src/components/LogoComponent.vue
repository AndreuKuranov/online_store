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
  min-width: 254px;

  @include max-width-md {
    min-width: 140px;
  }

  @include max-width-xs {
    min-width: 110px;
  }

  &__link {
    @extend %link;
    display: flex;
    column-gap: 18px;
    align-items: center;

    @include max-width-md {
      flex-direction: column;
      justify-content: center;
      column-gap: 10px;
    }
  }

  &__img {
    width: 71px;
    height: 71px;

    @include max-width-md {
      width: 60px;
      height: 60px;
    }

    @include max-width-sm {
      width: 54px;
      height: 54px;
    }

    @include max-width-xs {
      width: 48px;
      height: 48px;
    }
  }

  &__text {
    text-transform: uppercase;
    font-size: var(--medium-font-size);
    margin: 0;

    @include max-width-md {
      font-size: var(--main-font-size);
    }

    @include max-width-xs {
      font-size: 15px;
    }
  }
}
</style>