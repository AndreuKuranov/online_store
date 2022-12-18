<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input-admin"
    type="text"
  />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>

<style lang="scss" scoped>
.input-admin {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  border: 1px solid var(--dark-color);
  border-radius: var(--small-border-radius);

  &--file {
    border: none;
    padding: 0;
  }
}
</style>