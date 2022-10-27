<template>
  <div
    class="tab-content"
    v-show="title === selectedTitle"
  >
    <slot />
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: ['title'],
  setup() {
    const selectedTitle = inject("selectedTitle");

    return {
      selectedTitle
    }
  }
}
</script>

<style lang="scss">
.tab-content {
  background-color: var(--base-bg-color);
  padding: 16px 14px;
  margin: -1px 0 0 0;
  min-height: 200px;

  @include min-width-xs {
    padding: 12px 10px;
    min-height: 230px;
  }
  @include min-width-md {
    min-height: 256px;
  }
}
</style>