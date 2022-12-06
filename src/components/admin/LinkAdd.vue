<template>
  <router-link
    class="link-add btn-admin"
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
  width: 40px;
  height: 40px;

  &__material-symbols-outlined {
    font-size: 30px;
  }
}
</style>