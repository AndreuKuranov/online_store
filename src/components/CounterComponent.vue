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
  padding: 8px;
  background-color: var(--light-color);

  min-height: var(--base-height-btn);

  @include max-width-md {
    min-height: 54px;
    padding: 5px;
  }

  @include max-width-sm {
    min-height: 50px;
  }

  @include max-width-xs {
    min-height: 44px;
  }

  &__btn {
    @include blockCenter;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: var(--border-radius-50);
    width: 35px;
    height: 35px;
    transition: 0.3s;

    @include max-width-md {
      width: 30px;
      height: 30px;
    }

    @include max-width-xs {
      width: 25px;
      height: 25px;
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
    font-size: var(--big-font-size);
    font-weight: 700;

    @include max-width-md {
      font-size: 30px;
    }

    @include max-width-xs {
      font-size: 26px;
    }
  }

  &__text {
    @include blockCenter;
    font-family: var(--font-source-sans-pro);
    font-size: var(--title-font-size);

    @include max-width-md {
      font-size: 28px;
    }

    @include max-width-xs {
      font-size: 26px;
    }
  }
}
</style>