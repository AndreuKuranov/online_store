<template>
  <button class="btn">
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
  font-size: var(--medium-font-size);
  background-color: var(--success-color);
  color: var(--light-color);
  border-radius: var(--small-border-radius);
  transition: 0.3s;
  padding: 5px 10px;
  min-height: var(--base-height-btn);

  @include max-width-md {
    min-height: 54px;
  }

  @include max-width-sm {
    min-height: 50px;
    font-size: 20px;
    padding: 3px 7px;
  }

  @include max-width-xs {
    min-height: 44px;
  }

  &:hover {
    box-shadow: 0px 0px 5px rgba(var(--dark-color-rgb), 0.5);
  }
}
</style>