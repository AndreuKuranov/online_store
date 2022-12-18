<template>
  <button class="btn-admin">
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.btn-admin {
  @include blockCenter;
  cursor: pointer;
  border: none;
  background-color: #0d6efd;
  color: var(--light-color);
  border-radius: var(--small-border-radius);
  transition: 0.3s;
  padding: 5px;
  font-size: 16px;

  &:hover {
    box-shadow: 0px 0px 5px rgba(var(--dark-color-rgb), 0.5);
  }

  &--delete {
    background-color: var(--danger-color);
  }
}
</style>