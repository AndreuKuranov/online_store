<template>
  <router-link
    class="link-add"
    :to="url"
  >
    <span class="material-symbols-outlined link-add__material-symbols-outlined">add</span>
  </router-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss">

.link-add {
  @extend %link;
  @include blockCenter;
  border: 1px solid var(--dark-color);
  border-radius: 5px;
  width: 40px;
  height: 40px;
}
</style>