<template>
  <div class="title-block">
    <div class="title-block__container container">
      <h1 class="title-block__text">
        <slot />
      </h1>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.title-block {
  &__container {

  }

  &__text {
    font-size: 26px;
    margin: 16px 0 22px 0;
    font-weight: 400;

    @include min-width-xs {
      font-size: 32px;
      margin: 22px 0 34px 0;
    }
    @include min-width-md {
      margin: 28px 0 40px 0;
      font-size: var(--title-font-size);
    }
  }
}
</style>