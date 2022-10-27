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
  border: 1px solid var(--dark-color);
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: var(--small-border-radius);
  background-color: var(--light-color);
  min-height: 44px;
  padding: 5px;

  @include min-width-sm {
    min-height: 50px;
  }

  @include min-width-xs {
    min-height: 54px;
  }

  @include min-width-md {
    min-height: 60px;
    padding: 8px;
  }

  &__btn {
    @include blockCenter;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: var(--border-radius-50);
    width: 25px;
    height: 25px;
    transition: 0.3s;

    @include min-width-xs {
      width: 30px;
      height: 30px;
    }

    @include min-width-md {
      width: 35px;
      height: 35px;
    }
  }

  &__btn--remove:hover {
    background-color: var(--danger-color);
    box-shadow: 0 0 5px rgba(var(--danger-color-rgb), 1);
  }

  &__btn--add:hover {
    background-color: var(--success-color);
    box-shadow: 0 0 5px rgba(var(--success-color-rgb), 1);
  }

  &__material-symbols-outlined {
    font-size: 26px;
    font-weight: 700;

    @include min-width-xs {
      font-size: 30px;
    }

    @include min-width-md {
      font-size: var(--big-font-size);
    }
  }

  &__text {
    @include blockCenter;
    font-family: var(--font-source-sans-pro);
    font-size: 26px;

    @include min-width-xs {
      font-size: 28px;
    }

    @include min-width-md {
      font-size: var(--title-font-size);
    }
  }
}
</style>