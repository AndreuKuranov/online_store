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
  background-color: var(--success-color);
  color: var(--light-color);
  border-radius: var(--small-border-radius);
  transition: 0.3s;
  padding: 3px 7px;
  min-height: 44px;
  font-size: 20px;

  @include min-width-xs {
    min-height: 50px; 
  }
  @include min-width-sm {
    min-height: 54px;
    font-size: 22px;
    padding: 5px 10px;
  }
  @include min-width-md {
    min-height: 60px;
  }

  &:hover {
    box-shadow: 0px 0px 5px rgba(var(--dark-color-rgb), 0.5);
  }
}
</style>