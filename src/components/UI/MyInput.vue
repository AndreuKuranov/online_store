<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    type="text"
  />
</template>

<script>
export default {
  name: 'my-input',
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
.input {
  box-sizing: border-box;
  width: 100%;
  padding: 14px 6px;
  border: 1px solid var(--dark-color);
  border-radius: var(--small-border-radius);

  @include min-width-md {
    padding: 18px 10px;
  }
}
</style>