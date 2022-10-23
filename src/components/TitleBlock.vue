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
    font-size: px2rem($titleFontSize);
    font-weight: 400;
    margin: px2rem(28px) 0 px2rem(40px) 0;
  }
}
</style>