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
  background-color: $baseBGColor;

  &__container {
    
  }

  &__body {
    min-height: px2rem(86px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    font-size: $smallFontSize;
  }
}
</style>