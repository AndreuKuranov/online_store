<template>
  <div class="warning">
    <div class="warning__container container">
      <div class="warning__text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.warning {
  margin: 40px 0;

  &__container {

  }

  &__text {
    font-size: 24px;
    color: var(--danger-color);
    text-align: center;
  }
}
</style>