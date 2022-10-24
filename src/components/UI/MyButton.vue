<template>
  <button 
    class="btn"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'my-button',
  }
</script>

<style lang="scss">
.btn {
  @include blockCenter;
  cursor: pointer;
  border: none;
  font-size: px2rem($mediumFontSize);
  line-height: 1.16; // зачем так?
  background-color: $successColor;
  color: $lightColor;
  border-radius: px2rem($smallBorderRadius);
  transition: 0.3s;
  padding: px2rem(5px) px2rem(10px);

  &:hover {
    box-shadow: 0px 0px px2rem(5px) rgba($darkColor, 0.5);
  }
}
</style>