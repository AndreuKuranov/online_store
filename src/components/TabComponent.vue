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
  setup () {
    const selectedTitle = inject("selectedTitle");

    return {
      selectedTitle
    }
  }
}
</script>

<style lang="scss">
.tab-content {
  background-color: #C9DEF1;
  padding: px2rem(16px) px2rem(14px);
  margin: -2px 0 0 0;
  min-height: px2rem(256px);
}
</style>