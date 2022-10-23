<template>
  <div class="counter">
    <button class="counter__btn counter__btn--remove">
      <span class="counter__material-symbols-outlined material-symbols-outlined">remove</span>
    </button>
    <div class="counter__text">10</div>
    <button class="counter__btn counter__btn--add">
      <span class="counter__material-symbols-outlined material-symbols-outlined">add</span>
    </button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
.counter {
  display: flex;
  align-items: center;
  border: 1px solid $darkColor;
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: px2rem($smallBorderRadius);
  padding: 0 px2rem(8px);
  background-color: $lightColor;

  &__btn {
    @include blockCenter;

    border: none;
    background: none;
    cursor: pointer;
    border-radius: $borderRadius50;
    width: px2rem(35px);
    height: px2rem(35px);
    transition: 0.3s;
  }

  &__btn--remove:hover {
    background-color: $dangerColor;
    box-shadow: 0 0 px2rem(5px) rgba($dangerColor, 1);
  }

  &__btn--add:hover {
    background-color: $successColor;
    box-shadow: 0 0 px2rem(5px) rgba($successColor, 1);
  }

  &__material-symbols-outlined {
    font-size: px2rem($bigFontSize);
    font-weight: 700;
  }

  &__text {
    @include blockCenter;
    font-family: $fontSourceSansPro;
    font-size: px2rem($titleFontSize);
  }
}
</style>