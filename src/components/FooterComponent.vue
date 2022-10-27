<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__body">
        <div class="footer__item">moscow 123456, b124 st. 212dsadasd</div>
        <div class="footer__item">all rights reserved</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.footer {
  background-color: var(--base-bg-color);

  &__container {

  }

  &__body {
    min-height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include min-width-xs {
      min-height: 76px;
    }

    @include min-width-md {
      min-height: 86px;
    }
  }

  &__item {
    font-size: var(--small-font-size);
  }
}
</style>