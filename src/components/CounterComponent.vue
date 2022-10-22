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
  border: 1px solid #000;
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: px2rem(5px);
  padding: 0 px2rem(8px);

  &__btn {
    @include blockCenter;

    border: none;
    background: none;
    cursor: pointer;
    border-radius: 50%;
    width: px2rem(35px);
    height: px2rem(35px);
    transition: 0.3s;
  }

  &__btn--remove:hover {
    background-color: #FE0404;
    box-shadow: 0 0 px2rem(5px) rgba(#FE0404, 1);
  }

  &__btn--add:hover {
    background-color: #57DE54;
    box-shadow: 0 0 px2rem(5px) rgba(#57DE54, 1);
  }

  &__material-symbols-outlined {
    font-size: px2rem(40px);
    font-weight: 700;
  }

  &__text {
    @include blockCenter;
    font-family: $fontSourceSansPro;
    font-size: px2rem(36px);
  }
}
</style>